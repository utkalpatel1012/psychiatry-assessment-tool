const STORAGE_KEY = 'psychiatry_assessment_patient_records';

const StorageService = {
  getRecords() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading local patient records:', e);
      return [];
    }
  },

  saveRecord(record) {
    try {
      const records = this.getRecords();
      const now = new Date();
      const newRecord = {
        id: 'REC_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        timestamp: now.toISOString(),
        dateFormatted: now.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        ...record
      };
      records.unshift(newRecord);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      return newRecord;
    } catch (e) {
      console.error('Error saving local patient record:', e);
      return null;
    }
  },

  deleteRecord(id) {
    try {
      let records = this.getRecords();
      records = records.filter(r => r.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      return true;
    } catch (e) {
      console.error('Error deleting record:', e);
      return false;
    }
  },

  clearAllRecords() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (e) {
      return false;
    }
  },

  getPatientTrends(patientId, scaleId) {
    const records = this.getRecords();
    return records
      .filter(r => 
        (r.patientId || '').toLowerCase() === (patientId || '').toLowerCase() && 
        (!scaleId || r.scaleId === scaleId)
      )
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  },

  exportBackup() {
    const records = this.getRecords();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(records, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `psychiatry_patient_records_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  importBackup(jsonString) {
    try {
      const records = JSON.parse(jsonString);
      if (Array.isArray(records)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
        return true;
      }
      return false;
    } catch (e) {
      console.error('Invalid JSON backup file:', e);
      return false;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = StorageService;
}

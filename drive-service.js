// Google Identity Services & Google Drive API v3 Integration
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'; // User can replace with their Google Cloud Client ID
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

let tokenClient = null;
let accessToken = null;
let googleUser = null;

const GoogleDriveService = {
  init(onAuthChange) {
    this.onAuthChange = onAuthChange;
    this.loadSavedAuth();
  },

  loadSavedAuth() {
    try {
      const savedUser = localStorage.getItem('google_user_profile');
      const savedToken = localStorage.getItem('google_access_token');
      if (savedUser && savedToken) {
        googleUser = JSON.parse(savedUser);
        accessToken = savedToken;
        if (this.onAuthChange) this.onAuthChange(googleUser, true);
      }
    } catch (e) {
      console.warn('Google auth restore error:', e);
    }
  },

  handleCredentialResponse(response) {
    if (response && response.credential) {
      try {
        const payload = this.parseJwt(response.credential);
        googleUser = {
          id: payload.sub,
          name: payload.name,
          email: payload.email,
          picture: payload.picture
        };
        localStorage.setItem('google_user_profile', JSON.stringify(googleUser));
        this.requestAccessToken();
      } catch (e) {
        console.error('Error decoding JWT:', e);
      }
    }
  },

  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  },

  requestAccessToken() {
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
      console.log('Google Identity Services SDK not loaded yet.');
      return;
    }
    if (!tokenClient) {
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: SCOPES,
        callback: (tokenResponse) => {
          if (tokenResponse && tokenResponse.access_token) {
            accessToken = tokenResponse.access_token;
            localStorage.setItem('google_access_token', accessToken);
            if (this.onAuthChange) this.onAuthChange(googleUser, true);
            this.syncDriveFiles();
          }
        }
      });
    }
    tokenClient.requestAccessToken({ prompt: '' });
  },

  signOut() {
    googleUser = null;
    accessToken = null;
    localStorage.removeItem('google_user_profile');
    localStorage.removeItem('google_access_token');
    if (this.onAuthChange) this.onAuthChange(null, false);
  },

  async saveRecordToDrive(record) {
    if (!accessToken) {
      console.log('Google Drive sync skipped: User not authenticated with Google Drive token.');
      return false;
    }

    try {
      const fileName = `Psychiatry_${record.scaleId}_${record.patientId || 'Patient'}_${Date.now()}.json`;
      const fileMetadata = {
        name: fileName,
        mimeType: 'application/json',
      };

      const media = {
        mimeType: 'application/json',
        body: JSON.stringify(record, null, 2)
      };

      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' }));
      form.append('file', new Blob([media.body], { type: media.mimeType }));

      const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }),
        body: form
      });

      const resData = await response.json();
      console.log('File uploaded to Google Drive:', resData);
      return resData;
    } catch (e) {
      console.error('Error uploading to Google Drive:', e);
      return false;
    }
  },

  async syncDriveFiles() {
    if (!accessToken) return;
    try {
      const response = await fetch("https://www.googleapis.com/drive/v3/files?q=name+contains+'Psychiatry_'&fields=files(id,name,createdTime)", {
        headers: { 'Authorization': 'Bearer ' + accessToken }
      });
      const data = await response.json();
      console.log('User Google Drive assessment files:', data.files);
    } catch (e) {
      console.error('Drive file sync error:', e);
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoogleDriveService;
}

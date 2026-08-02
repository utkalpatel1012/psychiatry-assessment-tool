let currentScale = null;
let currentQuestionIndex = 0;
let answers = [];
let activeCategory = 'all';
let searchQuery = '';

let activePatientName = localStorage.getItem('active_patient_name') || 'Rahul Sharma';
let activePatientAge = localStorage.getItem('active_patient_age') || '32';
let activePatientMRN = localStorage.getItem('active_patient_mrn') || 'HIS-2026-8841';
let activePatientWard = localStorage.getItem('active_patient_ward') || 'GMW';

// Ward Name Mapping Helper
function getWardFullName(code) {
  const map = {
    'GMW': 'General Male Ward',
    'GFW': 'General Female Ward',
    'AMW': 'Acute Male Ward',
    'AFW': 'Acute Female Ward'
  };
  return map[code] || code || 'General Male Ward';
}

// Custom PDF Filename Formatter according to Patient Name, Age & Scale
function formatPdfDocumentTitle() {
  const cleanName = (activePatientName || 'Patient').trim().replace(/[^a-zA-Z0-9]/g, '_');
  const ageStr = activePatientAge ? `${activePatientAge}yrs` : 'AgeNA';
  const scaleStr = currentScale ? currentScale.name.replace(/[^a-zA-Z0-9]/g, '_') : 'Clinical_Report';
  const dateStr = new Date().toISOString().split('T')[0];
  
  return `${cleanName}_${ageStr}_${scaleStr}_Report_${dateStr}`;
}

// Populate the Visible Medical Report DOM Container
function populatePdfMedicalReport() {
  const container = document.getElementById('pdf-medical-report');
  if (!container || !currentScale) return;

  const dateStr = new Date().toLocaleString();
  const maxScore = currentScale.scoring.maxScore || (currentScale.scoring.totalRange ? currentScale.scoring.totalRange.max : 100);

  // Subscales
  let subscalesHtml = '';
  if (currentScale.subscales && currentScale.subscales.length > 0 && window._subscores) {
    let subCells = currentScale.subscales.map(ss => `
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; text-align: center; flex: 1;">
        <div style="font-size: 11px; font-weight: 700; color: #475569;">${ss.name}</div>
        <div style="font-size: 18px; font-weight: 800; color: #0284c7; margin: 2px 0;">${window._subscores[ss.id] || 0}</div>
        <div style="font-size: 10px; color: #94a3b8;">Range: ${ss.min} – ${ss.max}</div>
      </div>
    `).join('');

    subscalesHtml = `
      <div style="margin-bottom: 16px; page-break-inside: avoid;">
        <div style="font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Subscale Score Breakdown</div>
        <div style="display: flex; gap: 8px;">${subCells}</div>
      </div>
    `;
  }

  // Items
  let itemsHtml = '';
  currentScale.questions.forEach((q, i) => {
    const ans = answers[i];
    const opts = getQuestionOptions(q);
    const fullQuestionText = (typeof q === 'string' ? q : (q.text || '')).replace(/\n/g, '<br>');
    
    let labelText = '<em style="color: #94a3b8;">Skipped / Not Assessed</em>';
    if (ans !== null && ans !== undefined) {
      let opt = opts[ans];
      if (!opt) {
        opt = opts.find(o => {
          if (o.score !== undefined) return o.score === ans;
          const match = o.label && o.label.match(/^(\d+)/);
          return match ? parseInt(match[1]) === ans : false;
        });
      }
      
      if (opt) {
        const desc = opt.description || opt.desc || '';
        labelText = `<strong style="color: #0284c7; font-size: 12px;">Score ${ans}: ${opt.label}</strong>${desc ? `<div style="font-size: 10.5px; color: #334155; margin-top: 3px; font-weight: normal; line-height: 1.4;">${desc}</div>` : ''}`;
      } else {
        labelText = `<strong style="color: #0284c7; font-size: 12px;">Score ${ans}</strong>`;
      }
    }

    const rowBg = i % 2 === 0 ? '#ffffff' : '#f8fafc';

    itemsHtml += `
      <tr style="background: ${rowBg}; border-bottom: 1px solid #e2e8f0; page-break-inside: avoid;">
        <td style="padding: 8px 6px; font-weight: 700; color: #0284c7; text-align: center; width: 6%; border-bottom: 1px solid #cbd5e1; vertical-align: top;">${i + 1}</td>
        <td style="padding: 8px 10px; width: 54%; color: #0f172a; border-bottom: 1px solid #cbd5e1; vertical-align: top; font-weight: 500;">${fullQuestionText}</td>
        <td style="padding: 8px 10px; width: 40%; border-bottom: 1px solid #cbd5e1; vertical-align: top; background: rgba(14,165,233,0.04);">${labelText}</td>
      </tr>
    `;
  });

  const range = currentScale.scoring.ranges ? currentScale.scoring.ranges.find(r => window._lastScore >= r.min && window._lastScore <= r.max) : null;

  container.innerHTML = `
    <!-- Header Banner -->
    <div style="border-bottom: 3px solid #0284c7; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <span style="display: inline-block; background: #0284c7; color: #ffffff; padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">HIS / EHR CLINICAL EVALUATION REPORT</span>
        <h2 style="font-size: 20px; color: #0f172a; margin: 4px 0 2px 0; font-weight: 800;">${currentScale.name} EVALUATION</h2>
        <div style="font-size: 11.5px; color: #64748b; font-weight: 500;">${currentScale.fullName}</div>
      </div>
      <div style="text-align: right; font-size: 10.5px; color: #64748b; line-height: 1.4;">
        <strong style="color: #0f172a; font-size: 11.5px;">HOSPITAL INFORMATION SYSTEM</strong><br>
        Date: ${dateStr}<br>
        Status: Official Verified Record
      </div>
    </div>

    <!-- Demographics Card -->
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 14px; margin-bottom: 14px; page-break-inside: avoid;">
      <div style="font-size: 10.5px; text-transform: uppercase; color: #0284c7; font-weight: 800; margin-bottom: 4px; letter-spacing: 0.5px;">Patient Context</div>
      <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
        <tr>
          <td style="padding: 2px 0; width: 50%;"><strong>Patient Name:</strong> <span style="color: #0f172a; font-weight: 700;">${activePatientName || 'NOT SPECIFIED'}</span></td>
          <td style="padding: 2px 0; width: 50%;"><strong>Age:</strong> <span style="color: #0f172a; font-weight: 700;">${activePatientAge ? activePatientAge + ' Years' : 'N/A'}</span></td>
        </tr>
        <tr>
          <td style="padding: 2px 0; width: 50%;"><strong>MRN / UHID:</strong> <span style="color: #0f172a; font-weight: 700;">${activePatientMRN || 'N/A'}</span></td>
          <td style="padding: 2px 0; width: 50%;"><strong>Ward Location:</strong> <span style="color: #0f172a; font-weight: 700;">${activePatientWard} (${getWardFullName(activePatientWard)})</span></td>
        </tr>
      </table>
    </div>

    <!-- Score & Severity Banner -->
    <table style="width: 100%; border-collapse: collapse; background: #f0f9ff; border: 1.5px solid #7dd3fc; border-radius: 8px; margin-bottom: 14px; page-break-inside: avoid;">
      <tr>
        <td style="padding: 12px 16px; vertical-align: middle;">
          <div style="font-size: 10.5px; text-transform: uppercase; color: #0369a1; font-weight: 800;">Total Assessment Score</div>
          <div style="font-size: 28px; font-weight: 800; color: #0284c7; line-height: 1; margin-top: 2px;">
            ${window._lastScore} <span style="font-size: 14px; color: #64748b; font-weight: 600;">/ ${maxScore}</span>
          </div>
        </td>
        <td style="padding: 12px 16px; text-align: right; vertical-align: middle;">
          <div style="font-size: 10.5px; text-transform: uppercase; color: #0369a1; font-weight: 800;">Diagnostic Severity</div>
          <div style="display: inline-block; background: #0284c7; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 11.5px; font-weight: 800; text-transform: uppercase; margin-top: 4px;">
            ${window._lastSeverity}
          </div>
        </td>
      </tr>
    </table>

    <!-- Subscale Breakdown -->
    ${subscalesHtml}

    <!-- Guidelines Impression Box -->
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #0284c7; border-radius: 4px; padding: 10px 12px; margin-bottom: 16px; page-break-inside: avoid;">
      <strong style="color: #0f172a; font-size: 12px;">Clinical Guidelines & Diagnostic Impression:</strong>
      <p style="margin: 3px 0 0 0; font-size: 11px; color: #334155; line-height: 1.4;">${range ? range.interpretation : 'Assessment completed.'}</p>
    </div>

    <!-- Detailed Item Table Header -->
    <div style="margin-bottom: 6px; page-break-inside: avoid;">
      <h3 style="font-size: 13px; color: #0f172a; margin: 0; font-weight: 800; border-bottom: 2px solid #cbd5e1; padding-bottom: 4px;">
        Complete Item Responses & Operational Descriptions (${currentScale.questions.length} Items)
      </h3>
    </div>

    <!-- Detailed Items Table -->
    <table style="width: 100%; border-collapse: collapse; font-size: 10.5px; margin-bottom: 14px;">
      <thead>
        <tr style="background: #e2e8f0; text-align: left;">
          <th style="padding: 6px 6px; text-align: center; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1; width: 6%;">Item</th>
          <th style="padding: 6px 8px; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1; width: 54%;">Clinical Question & Physical Protocol</th>
          <th style="padding: 6px 8px; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1; width: 40%;">Selected Rating & Full Operational Option</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>

    <!-- Footer -->
    <table style="width: 100%; margin-top: 16px; border-top: 1px solid #cbd5e1; padding-top: 8px; font-size: 9.5px; color: #94a3b8; page-break-inside: avoid;">
      <tr>
        <td>Generated automatically by Hospital Information System (HIS / EHR Assessment Suite)</td>
        <td style="text-align: right; font-weight: 700; color: #64748b;">CONFIDENTIAL MEDICAL RECORD</td>
      </tr>
    </table>
  `;
}

// Generate Complete PDF File directly from the Visible DOM Report
async function generateScalePdfFile() {
  if (!currentScale) return null;
  populatePdfMedicalReport();

  const reportElement = document.getElementById('pdf-medical-report');
  if (!reportElement) return null;

  const filename = formatPdfDocumentTitle() + '.pdf';

  const opt = {
    margin:       [0.25, 0.25, 0.25, 0.25],
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false, backgroundColor: '#ffffff' },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
  };

  try {
    let pdfBlob = await html2pdf().set(opt).from(reportElement).outputPdf('blob');
    if (pdfBlob) {
      return new File([pdfBlob], filename, { type: 'application/pdf' });
    }
  } catch (err) {
    console.error("Error compiling PDF file:", err);
  }
  return null;
}

// DOM Elements
const homeView = document.getElementById('home-view');
const assessmentView = document.getElementById('assessment-view');
const resultsView = document.getElementById('results-view');
const bentoGrid = document.getElementById('bento-grid');
const searchInput = document.getElementById('search-input');
const scaleCountBadge = document.getElementById('scale-count-badge');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const historyBtn = document.getElementById('history-btn');
const historyModal = document.getElementById('history-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const recordsContainer = document.getElementById('records-container');

const activePatientNameEl = document.getElementById('active-patient-name');
const activePatientAgeEl = document.getElementById('active-patient-age');
const activePatientMRNEl = document.getElementById('active-patient-mrn');
const activePatientWardEl = document.getElementById('active-patient-ward');
const emrNoteTextEl = document.getElementById('emr-note-text');
const btnCopyEmr = document.getElementById('btn-copy-emr');

// Assessment View Elements
const assessmentScaleName = document.getElementById('assessment-scale-name');
const progressBarFill = document.getElementById('progress-bar-fill');
const questionCounterText = document.getElementById('question-counter-text');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
const btnCancelAssessment = document.getElementById('btn-cancel-assessment');
const liveScoreValEl = document.getElementById('live-score-val');

// Results View Elements
const scoreMainEl = document.getElementById('score-main');
const scoreMaxEl = document.getElementById('score-max');
const severityPillEl = document.getElementById('severity-pill');
const radialProgressCircle = document.getElementById('radial-progress-circle');
const subscalesGridEl = document.getElementById('subscales-grid');
const interpretationTextEl = document.getElementById('interpretation-text');
const btnSaveRecord = document.getElementById('btn-save-record');
const btnPrintPdf = document.getElementById('btn-print-pdf');
const btnRestart = document.getElementById('btn-restart');
const answersAccordion = document.getElementById('answers-accordion');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  updatePatientUI();
  renderBentoGrid();
  setupEventListeners();
  setupKeyboardShortcuts();
});

function updatePatientUI() {
  if (activePatientNameEl) activePatientNameEl.textContent = activePatientName || 'Not Specified';
  if (activePatientAgeEl) activePatientAgeEl.textContent = activePatientAge ? `${activePatientAge} yrs` : 'N/A';
  if (activePatientMRNEl) activePatientMRNEl.textContent = activePatientMRN || 'N/A';
  if (activePatientWardEl) activePatientWardEl.textContent = activePatientWard || 'GMW';
}

function updateLiveScore() {
  if (!liveScoreValEl) return;
  if (!answers || answers.length === 0) {
    liveScoreValEl.textContent = '0';
    return;
  }
  let runningTotal = 0;
  answers.forEach(val => {
    if (typeof val === 'number' && !isNaN(val)) {
      runningTotal += val;
    }
  });
  liveScoreValEl.textContent = runningTotal;
}

window.openPatientModal = function() {
  const nameInput = document.getElementById('input-patient-name');
  const ageInput = document.getElementById('input-patient-age');
  const mrnInput = document.getElementById('input-patient-mrn');
  const modal = document.getElementById('patient-modal');

  if (nameInput) nameInput.value = activePatientName;
  if (ageInput) ageInput.value = activePatientAge;
  if (mrnInput) mrnInput.value = activePatientMRN;

  const wardRadios = document.querySelectorAll('input[name="ward-selection"]');
  wardRadios.forEach(r => {
    r.checked = (r.value === activePatientWard);
  });

  if (modal) modal.classList.add('active');
};

window.closePatientModal = function() {
  const modal = document.getElementById('patient-modal');
  if (modal) modal.classList.remove('active');
};

window.savePatientDemographics = function(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById('input-patient-name');
  const ageInput = document.getElementById('input-patient-age');
  const mrnInput = document.getElementById('input-patient-mrn');
  const selectedWard = document.querySelector('input[name="ward-selection"]:checked');

  activePatientName = nameInput ? nameInput.value.trim() : '';
  activePatientAge = ageInput ? ageInput.value.trim() : '';
  activePatientMRN = mrnInput ? (mrnInput.value.trim() || 'MRN-UNASSIGNED') : 'MRN-UNASSIGNED';
  activePatientWard = selectedWard ? selectedWard.value : 'GMW';

  localStorage.setItem('active_patient_name', activePatientName);
  localStorage.setItem('active_patient_age', activePatientAge);
  localStorage.setItem('active_patient_mrn', activePatientMRN);
  localStorage.setItem('active_patient_ward', activePatientWard);

  updatePatientUI();
  closePatientModal();
};

window.openShareModal = function() {
  const modal = document.getElementById('share-modal');
  const previewEl = document.getElementById('share-text-preview');
  if (previewEl && emrNoteTextEl) {
    previewEl.textContent = emrNoteTextEl.textContent;
  }
  if (modal) modal.classList.add('active');
};

window.closeShareModal = function() {
  const modal = document.getElementById('share-modal');
  if (modal) modal.classList.remove('active');
};

// DIRECT SHARE OF COMPLETE REPORT IN PDF FORM ONLY TO ANY PLATFORM
window.shareScalePdfFile = async function() {
  closeShareModal();
  const filename = formatPdfDocumentTitle() + '.pdf';
  
  try {
    const pdfFile = await generateScalePdfFile();

    if (pdfFile && navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
      await navigator.share({
        title: `${currentScale ? currentScale.name : 'Psychiatry'} Clinical Report - ${activePatientName}`,
        text: `Attached is the complete PDF Clinical Evaluation Report for ${activePatientName} (${activePatientAge} yrs, Ward: ${activePatientWard}).`,
        files: [pdfFile]
      });
      return;
    }

    // Direct PDF File Download Fallback if browser Web Share Level 2 is unavailable
    if (pdfFile) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(pdfFile);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      alert(`Complete PDF Evaluation Report "${filename}" generated! You can now send or attach this PDF file to any platform.`);
    } else {
      window.print();
    }
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error("PDF Share failed:", err);
      window.print();
    }
  }
};

window.shareViaWhatsApp = function() {
  shareScalePdfFile();
};

window.shareViaEmail = function() {
  shareScalePdfFile();
};

window.exportPdfReport = async function() {
  closeShareModal();
  const filename = formatPdfDocumentTitle() + '.pdf';
  const pdfFile = await generateScalePdfFile();
  if (pdfFile) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(pdfFile);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    window.print();
  }
};

window.copyShareText = function() {
  if (emrNoteTextEl) {
    navigator.clipboard.writeText(emrNoteTextEl.textContent);
    alert('Clinical Evaluation Summary copied to clipboard!');
  }
};

function getQuestionText(q) {
  return typeof q === 'string' ? q : q.text;
}

function getQuestionOptions(question) {
  return question.options || currentScale.options;
}

function evaluateCondition(dependsOn, answersArr) {
  if (dependsOn.any) {
    return dependsOn.any.some(c => answersArr[c.question] != null && answersArr[c.question] >= c.value);
  }
  return answersArr[dependsOn.question] != null && answersArr[dependsOn.question] >= dependsOn.value;
}

function renderBentoGrid() {
  if (!bentoGrid) return;
  
  const filtered = scales.filter(s => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch = !searchQuery || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (scaleCountBadge) {
    scaleCountBadge.textContent = `${filtered.length} Scale${filtered.length !== 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    bentoGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3>No matching scales found</h3>
        <p>Try searching for a different clinical scale or category filter.</p>
      </div>
    `;
    return;
  }

  bentoGrid.innerHTML = filtered.map(scale => {
    return `
      <div class="bento-card" data-scale-id="${scale.id}">
        <div>
          <div class="card-top">
            <span class="scale-abbr">${scale.name}</span>
            <div class="card-badge-container">
              <span class="badge-category">${(scale.category || 'general').toUpperCase()}</span>
            </div>
          </div>
          <div class="scale-full-name">${scale.fullName}</div>
          <div class="scale-desc">${scale.description}</div>
        </div>
        <div class="card-footer">
          <div class="meta-item">
            <i class="far fa-clock"></i> ${scale.estimatedTime || '5 min'}
          </div>
          <div class="meta-item">
            <i class="fas fa-list-ol"></i> ${scale.questions.length} Items
          </div>
          <button class="btn-start" data-scale-id="${scale.id}">
            Start <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.btn-start, .bento-card').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const scaleId = btn.dataset.scaleId || btn.closest('.bento-card').dataset.scaleId;
      const scale = scales.find(s => s.id === scaleId);
      if (scale) startAssessment(scale);
    });
  });
}

function showView(view) {
  [homeView, assessmentView, resultsView].forEach(v => {
    if (v) v.style.display = 'none';
  });
  if (view) view.style.display = 'block';
}

function startAssessment(scale) {
  currentScale = scale;
  currentQuestionIndex = 0;
  answers = [];
  if (assessmentScaleName) assessmentScaleName.textContent = `${scale.name} — ${scale.fullName}`;
  showView(assessmentView);
  updateLiveScore();
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= currentScale.questions.length) {
    showResults();
    return;
  }

  const question = currentScale.questions[currentQuestionIndex];

  // Handle dynamic branching condition (e.g. C-SSRS)
  if (question.dependsOn && !evaluateCondition(question.dependsOn, answers)) {
    answers.push(null);
    currentQuestionIndex++;
    showQuestion();
    return;
  }

  const total = currentScale.questions.length;
  const options = getQuestionOptions(question);

  if (questionTextEl) questionTextEl.textContent = getQuestionText(question);
  if (questionCounterText) questionCounterText.textContent = `Item ${currentQuestionIndex + 1} of ${total}`;
  
  const pct = Math.round((currentQuestionIndex / total) * 100);
  if (progressBarFill) progressBarFill.style.width = `${pct}%`;

  updateLiveScore();

  if (optionsContainer) {
    optionsContainer.innerHTML = options.map((opt, idx) => {
      let labelText = opt.label;
      let descText = opt.description || opt.desc || '';
      
      // Determine explicit numerical score
      let optScore = opt.score;
      if (optScore === undefined || optScore === null || isNaN(optScore)) {
        const match = labelText.match(/^(\d+)/);
        optScore = match ? parseInt(match[1]) === 0 ? 0 : (match[1] ? parseInt(match[1]) : idx) : idx;
      }
      
      // Extract title and operational description if formatted with colon or dash
      if (!descText && labelText.includes(' - ')) {
        const parts = labelText.split(' - ');
        if (parts.length > 2) {
          labelText = parts[0] + ' - ' + parts[1];
          descText = parts.slice(2).join(' - ');
        } else if (parts.length === 2 && parts[1].length > 35) {
          labelText = parts[0];
          descText = parts[1];
        }
      } else if (!descText && labelText.includes(': ')) {
        const parts = labelText.split(': ');
        labelText = parts[0];
        descText = parts.slice(1).join(': ');
      }

      return `
        <button class="option-btn" data-score="${optScore}">
          <span class="option-shortcut-badge">${idx}</span>
          <div class="option-content-box">
            <div class="option-title-text">${labelText}</div>
            ${descText ? `<div class="option-desc-text">${descText}</div>` : ''}
          </div>
        </button>
      `;
    }).join('');

    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        let score = parseInt(this.dataset.score);
        if (isNaN(score)) score = 0;

        answers.push(score);
        updateLiveScore();

        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');

        setTimeout(() => {
          if (currentQuestionIndex < currentScale.questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
          } else {
            showResults();
          }
        }, 140);
      });
    });
  }

  if (btnPrev) btnPrev.style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';
}

function showResults() {
  showView(resultsView);
  calculateAndDisplayScores();
  generateEMRClinicalNote();
  renderDetailedAnswers();
  populatePdfMedicalReport();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function calculateAndDisplayScores() {
  const hasSubscales = currentScale.subscales && currentScale.subscales.length > 0;
  let totalScore = 0;

  if (currentScale.scoring.type === 'cssrs') {
    displayCSSRSResults();
    return;
  }

  if (hasSubscales) {
    let subscores = {};
    currentScale.subscales.forEach(ss => { subscores[ss.id] = 0; });

    currentScale.questions.forEach((q, i) => {
      const val = answers[i];
      const validVal = typeof val === 'number' && !isNaN(val) ? val : 0;
      if (q.subscale && subscores[q.subscale] !== undefined) {
        subscores[q.subscale] += validVal;
      }
    });

    totalScore = Object.values(subscores).reduce((a, b) => a + (typeof b === 'number' && !isNaN(b) ? b : 0), 0);
    if (subscalesGridEl) {
      subscalesGridEl.style.display = 'grid';
      subscalesGridEl.innerHTML = currentScale.subscales.map(ss => `
        <div class="subscale-card" style="background: var(--bg-primary); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--glass-border);">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-primary);">${ss.name}</div>
          <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--accent-cyan);">${subscores[ss.id]}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted);">Scale Range: ${ss.min} – ${ss.max}</div>
        </div>
      `).join('');
    }
    window._subscores = subscores;
  } else {
    if (subscalesGridEl) subscalesGridEl.style.display = 'none';
    totalScore = answers.reduce((sum, val) => sum + (typeof val === 'number' && !isNaN(val) ? val : 0), 0);
  }

  const maxScore = currentScale.scoring.maxScore || 
    (currentScale.scoring.totalRange ? currentScale.scoring.totalRange.max : 100);

  if (scoreMainEl) scoreMainEl.textContent = totalScore;
  if (scoreMaxEl) scoreMaxEl.textContent = `/ ${maxScore}`;

  const range = currentScale.scoring.ranges ? currentScale.scoring.ranges.find(r => totalScore >= r.min && totalScore <= r.max) : null;
  const severityStr = range ? range.severity : 'Completed';
  
  if (severityPillEl) {
    severityPillEl.textContent = severityStr;
    const sevClass = severityStr.toLowerCase().replace(/[^a-z0-9]/g, '-');
    severityPillEl.className = `severity-pill severity-${sevClass}`;
  }

  // SVG Radial Gauge offset
  if (radialProgressCircle) {
    const pct = Math.min(100, Math.max(0, (totalScore / maxScore) * 100));
    const circleCircumference = 390;
    const offset = circleCircumference - (pct / 100) * circleCircumference;
    radialProgressCircle.style.strokeDashoffset = offset;
  }

  if (interpretationTextEl) {
    interpretationTextEl.innerHTML = `
      <strong>Clinical Guidelines & Management Protocol:</strong><br>
      ${range ? range.interpretation : 'Assessment completed.'}
    `;
  }

  window._lastScore = totalScore;
  window._lastSeverity = severityStr;
}

function displayCSSRSResults() {
  if (subscalesGridEl) subscalesGridEl.style.display = 'none';
  const a = answers;
  let anyBehavior = a[5] === 1 || a[6] === 1 || a[7] === 1 || a[8] === 1 || a[9] === 1;
  let anyIdeation = a[0] === 1 || a[1] === 1 || a[2] === 1 || a[3] === 1 || a[4] === 1;

  let severityStr = "No Risk";
  let interpretation = "No suicidal ideation or behavior reported.";
  if (anyBehavior) {
    severityStr = "High Risk - Emergency";
    interpretation = "Suicidal behavior present. Immediate emergency psychiatric evaluation & 1-on-1 observation required.";
  } else if (anyIdeation) {
    if (a[1] === 1 || a[2] === 1 || a[3] === 1 || a[4] === 1) {
      severityStr = "Moderate Risk";
      interpretation = "Active suicidal ideation present. Urgent safety plan & psychiatric evaluation.";
    } else if (a[0] === 1) {
      severityStr = "Low Risk";
      interpretation = "Passive suicidal ideation (wish to be dead). Reinforce safety plan.";
    }
  }

  if (scoreMainEl) scoreMainEl.textContent = anyBehavior ? 'HIGH' : (anyIdeation ? 'MOD' : '0');
  if (scoreMaxEl) scoreMaxEl.textContent = '';
  if (severityPillEl) {
    severityPillEl.textContent = severityStr;
    severityPillEl.className = 'severity-pill severity-high-risk';
  }

  if (radialProgressCircle) radialProgressCircle.style.strokeDashoffset = anyBehavior ? 0 : 200;

  if (interpretationTextEl) {
    interpretationTextEl.innerHTML = `
      <strong>C-SSRS Risk Assessment Summary:</strong><br>
      ${interpretation}
    `;
  }

  window._lastScore = anyBehavior ? 99 : (anyIdeation ? 15 : 0);
  window._lastSeverity = severityStr;
}

function generateEMRClinicalNote() {
  if (!emrNoteTextEl) return;
  const dateStr = new Date().toLocaleString();
  let note = `====================================================\n`;
  note += `HOSPITAL EMR CLINICAL PSYCHIATRY EVALUATION NOTE\n`;
  note += `====================================================\n`;
  note += `PATIENT NAME : ${activePatientName || 'NOT SPECIFIED'}\n`;
  note += `AGE          : ${activePatientAge ? activePatientAge + ' YRS' : 'N/A'}\n`;
  note += `PATIENT MRN  : ${activePatientMRN || 'N/A'}\n`;
  note += `WARD LOCATION: ${activePatientWard} (${getWardFullName(activePatientWard)})\n`;
  note += `DATE/TIME    : ${dateStr}\n`;
  note += `INSTRUMENT   : ${currentScale.name} (${currentScale.fullName})\n`;
  note += `TOTAL SCORE  : ${window._lastScore} (Severity: ${window._lastSeverity})\n`;
  note += `----------------------------------------------------\n`;
  note += `CLINICAL IMPRESSION & GUIDELINES:\n`;
  const range = currentScale.scoring.ranges ? currentScale.scoring.ranges.find(r => window._lastScore >= r.min && window._lastScore <= r.max) : null;
  note += `${range ? range.interpretation : 'Assessment completed.'}\n`;
  note += `====================================================\n`;
  
  emrNoteTextEl.textContent = note;
}

function renderDetailedAnswers() {
  if (!answersAccordion) return;
  let html = '<div style="margin-top: 1.25rem;"><h4 style="margin-bottom: 0.6rem; font-family: var(--font-heading);">Detailed Item Responses</h4>';
  
  currentScale.questions.forEach((q, i) => {
    const ans = answers[i];
    const opts = getQuestionOptions(q);
    const text = (typeof q === 'string' ? q : (q.text || '')).split('\n')[0];
    
    if (ans == null) {
      html += `<div style="padding: 0.55rem; border-bottom: 1px solid var(--glass-border); font-size: 0.82rem; color: var(--text-muted);">
        <strong>Item ${i + 1}:</strong> ${text} — <em>Skipped</em>
      </div>`;
    } else {
      let opt = opts[ans];
      if (!opt) {
        opt = opts.find(o => {
          if (o.score !== undefined) return o.score === ans;
          const match = o.label && o.label.match(/^(\d+)/);
          return match ? parseInt(match[1]) === ans : false;
        });
      }
      const label = opt ? opt.label : `Score ${ans}`;
      const desc = opt ? (opt.description || opt.desc || '') : '';
      
      html += `<div style="padding: 0.65rem; border-bottom: 1px solid var(--glass-border); font-size: 0.85rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.2rem;">
          <span><strong>Item ${i + 1}:</strong> ${text}</span>
          <span style="color: var(--accent-cyan); font-weight: 700; white-space: nowrap; margin-left: 0.5rem;">Score ${ans}: ${label}</span>
        </div>
        ${desc ? `<div style="font-size: 0.78rem; color: var(--text-secondary); padding-left: 0.5rem; border-left: 2px solid var(--accent-cyan); margin-top: 0.25rem;">${desc}</div>` : ''}
      </div>`;
    }
  });

  html += '</div>';
  answersAccordion.innerHTML = html;
}

function setupEventListeners() {
  // Category Tag Filters
  document.querySelectorAll('.category-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('.category-tag').forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      activeCategory = tag.dataset.category;
      renderBentoGrid();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderBentoGrid();
    });
  }

  // Theme toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      themeToggleBtn.innerHTML = newTheme === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  }

  // Copy EMR Note Button
  if (btnCopyEmr) {
    btnCopyEmr.addEventListener('click', () => {
      if (emrNoteTextEl) {
        navigator.clipboard.writeText(emrNoteTextEl.textContent);
        alert('EMR Clinical Note copied to clipboard!');
      }
    });
  }

  // Previous Question
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentQuestionIndex > 0) {
        answers.pop();
        currentQuestionIndex--;
        updateLiveScore();
        showQuestion();
      }
    });
  }

  // Cancel assessment
  if (btnCancelAssessment) {
    btnCancelAssessment.addEventListener('click', () => {
      showView(homeView);
    });
  }

  // Restart Assessment
  if (btnRestart) {
    btnRestart.addEventListener('click', () => {
      showView(homeView);
    });
  }

  // Print / Export PDF with Custom Patient Name & Age Filename
  if (btnPrintPdf) {
    btnPrintPdf.addEventListener('click', () => {
      exportPdfReport();
    });
  }

  // Save Patient Record in Browser Local Storage
  if (btnSaveRecord) {
    btnSaveRecord.addEventListener('click', () => {
      if (typeof StorageService !== 'undefined') {
        const record = StorageService.saveRecord({
          patientId: activePatientName + ' (' + (activePatientAge ? activePatientAge + 'y, ' : '') + activePatientWard + ')',
          patientName: activePatientName,
          patientAge: activePatientAge,
          mrn: activePatientMRN,
          ward: activePatientWard,
          scaleId: currentScale.id,
          scaleName: currentScale.name,
          score: window._lastScore,
          severity: window._lastSeverity
        });

        alert(`Evaluation record for ${activePatientName} saved permanently in your browser local storage!`);
      }
    });
  }

  // History Modal
  if (historyBtn) {
    historyBtn.addEventListener('click', () => {
      renderHistoryModal();
      if (historyModal) historyModal.classList.add('active');
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (historyModal) historyModal.classList.remove('active');
    });
  }
}

function renderHistoryModal() {
  if (!recordsContainer) return;
  const records = typeof StorageService !== 'undefined' ? StorageService.getRecords() : [];
  if (records.length === 0) {
    recordsContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No saved patient evaluations yet.</p>';
    return;
  }

  recordsContainer.innerHTML = records.map(r => `
    <div style="padding: 0.85rem; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-weight: 700; font-family: var(--font-heading); color: var(--accent-cyan); font-size: 0.95rem;">${r.patientName || r.patientId} ${r.patientAge ? '(' + r.patientAge + ' yrs)' : ''}</div>
        <div style="font-size: 0.8rem; color: var(--text-primary); font-weight: 600; margin-top: 0.1rem;">${r.scaleName} — <span style="color: var(--accent-cyan);">${r.ward || 'GMW'}</span></div>
        <div style="font-size: 0.72rem; color: var(--text-muted);"><i class="far fa-clock"></i> ${r.dateFormatted}</div>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span class="severity-pill" style="font-size: 0.72rem; padding: 0.2rem 0.6rem;">${r.severity} (Score: ${r.score})</span>
        <button onclick="deleteRecordItem('${r.id}')" style="background: none; border: none; color: var(--accent-rose); cursor: pointer; padding: 0.3rem;" title="Delete record">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

window.deleteRecordItem = function(id) {
  if (confirm("Delete this patient evaluation record from local storage?")) {
    if (typeof StorageService !== 'undefined') StorageService.deleteRecord(id);
    renderHistoryModal();
  }
};

window.clearAllPatientRecords = function() {
  if (confirm("Are you sure you want to clear ALL patient evaluation records from your browser?")) {
    if (typeof StorageService !== 'undefined') StorageService.clearAllRecords();
    renderHistoryModal();
  }
};

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (assessmentView && assessmentView.style.display !== 'none') {
      if (['0', '1', '2', '3', '4', '5', '6', '7'].includes(e.key)) {
        const optionBtns = document.querySelectorAll('.option-btn');
        const idx = parseInt(e.key);
        if (optionBtns[idx]) {
          optionBtns[idx].click();
        }
      } else if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        if (btnPrev) btnPrev.click();
      }
    }
  });
}

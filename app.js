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

  if (optionsContainer) {
    optionsContainer.innerHTML = options.map((opt, idx) => {
      let labelText = opt.label;
      let descText = opt.description || opt.desc || '';
      
      // Determine explicit numerical score
      let optScore = opt.score;
      if (optScore === undefined || optScore === null || isNaN(optScore)) {
        const match = labelText.match(/^(\d+)/);
        optScore = match ? parseInt(match[1]) : idx;
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

  const range = currentScale.scoring.ranges.find(r => totalScore >= r.min && totalScore <= r.max);
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
  const range = currentScale.scoring.ranges.find(r => window._lastScore >= r.min && window._lastScore <= r.max);
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
    const text = getQuestionText(q).split('\n')[0];
    
    if (ans == null) {
      html += `<div style="padding: 0.5rem; border-bottom: 1px solid var(--glass-border); font-size: 0.82rem; color: var(--text-muted);">
        Item ${i + 1}: ${text} — <em>Skipped</em>
      </div>`;
    } else {
      const opt = opts.find(o => {
        if (o.score !== undefined) return o.score === ans;
        const match = o.label.match(/^(\d+)/);
        return match ? parseInt(match[1]) === ans : false;
      });
      const label = opt ? opt.label : `Score ${ans}`;
      html += `<div style="padding: 0.5rem; border-bottom: 1px solid var(--glass-border); font-size: 0.82rem; display: flex; justify-content: space-between;">
        <span><strong>Item ${i + 1}:</strong> ${text}</span>
        <span style="color: var(--accent-cyan); font-weight: 600;">${label}</span>
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

  // Print / Export PDF
  if (btnPrintPdf) {
    btnPrintPdf.addEventListener('click', () => {
      window.print();
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

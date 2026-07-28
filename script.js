let currentScale = null;
let currentQuestionIndex = 0;
let answers = [];
let activeCategory = 'all';
let searchQuery = '';

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
const googleAuthContainer = document.getElementById('google-auth-container');
const googleLoginBtn = document.getElementById('google-login-btn');

// Assessment View Elements
const assessmentScaleName = document.getElementById('assessment-scale-name');
const progressBarFill = document.getElementById('progress-bar-fill');
const questionCounterText = document.getElementById('question-counter-text');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
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
  renderBentoGrid();
  setupEventListeners();
  setupKeyboardShortcuts();
  setupGoogleAuth();
});

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
    const isNew = ['ciwa-ar', 'cows', 'ybocs', 'bfcrs', 'madrs'].includes(scale.id);
    return `
      <div class="bento-card" data-scale-id="${scale.id}">
        <div>
          <div class="card-top">
            <span class="scale-abbr">${scale.name}</span>
            <div class="card-badge-container">
              ${isNew ? '<span class="badge-new">NEW</span>' : ''}
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
    optionsContainer.innerHTML = options.map((opt, idx) => `
      <button class="option-btn" data-score="${opt.score}">
        <span class="option-shortcut-badge">${idx}</span>
        ${opt.label}
      </button>
    `).join('');

    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const score = parseInt(this.dataset.score);
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
      if (q.subscale && subscores[q.subscale] !== undefined && answers[i] != null) {
        subscores[q.subscale] += answers[i];
      }
    });

    totalScore = Object.values(subscores).reduce((a, b) => a + b, 0);
    if (subscalesGridEl) {
      subscalesGridEl.style.display = 'grid';
      subscalesGridEl.innerHTML = currentScale.subscales.map(ss => `
        <div class="subscale-card">
          <div class="subscale-title">${ss.name}</div>
          <div class="subscale-score-val">${subscores[ss.id]}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted);">Range: ${ss.min} – ${ss.max}</div>
        </div>
      `).join('');
    }
    window._subscores = subscores;
  } else {
    if (subscalesGridEl) subscalesGridEl.style.display = 'none';
    totalScore = answers.reduce((sum, val) => sum + (val || 0), 0);
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
    const circleCircumference = 440;
    const offset = circleCircumference - (pct / 100) * circleCircumference;
    radialProgressCircle.style.strokeDashoffset = offset;
  }

  if (interpretationTextEl) {
    interpretationTextEl.innerHTML = `
      <strong>Clinical Interpretation & Management Guidelines:</strong><br>
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
    interpretation = "Suicidal behavior present. Immediate psychiatric emergency evaluation required.";
  } else if (anyIdeation) {
    if (a[1] === 1 || a[2] === 1 || a[3] === 1 || a[4] === 1) {
      severityStr = "Moderate Risk";
      interpretation = "Active suicidal ideation present. Urgent safety plan & outpatient care.";
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

  if (radialProgressCircle) radialProgressCircle.style.strokeDashoffset = anyBehavior ? 0 : 220;

  if (interpretationTextEl) {
    interpretationTextEl.innerHTML = `
      <strong>C-SSRS Risk Assessment Summary:</strong><br>
      ${interpretation}
    `;
  }

  window._lastScore = anyBehavior ? 99 : (anyIdeation ? 15 : 0);
  window._lastSeverity = severityStr;
}

function renderDetailedAnswers() {
  if (!answersAccordion) return;
  let html = '<div style="margin-top: 1.5rem;"><h4 style="margin-bottom: 0.75rem; font-family: var(--font-heading);">Detailed Item Responses</h4>';
  
  currentScale.questions.forEach((q, i) => {
    const ans = answers[i];
    const opts = getQuestionOptions(q);
    const text = getQuestionText(q).split('\n')[0];
    
    if (ans == null) {
      html += `<div style="padding: 0.6rem; border-bottom: 1px solid var(--glass-border); font-size: 0.85rem; color: var(--text-muted);">
        Item ${i + 1}: ${text} — <em>Skipped</em>
      </div>`;
    } else {
      const opt = opts.find(o => o.score === ans);
      const label = opt ? opt.label : `Score ${ans}`;
      html += `<div style="padding: 0.6rem; border-bottom: 1px solid var(--glass-border); font-size: 0.85rem; display: flex; justify-content: space-between;">
        <span><strong>Item ${i + 1}:</strong> ${text}</span>
        <span style="color: var(--accent-cyan); font-weight: 600;">${label}</span>
      </div>`;
    }
  });

  html += '</div>';
  answersAccordion.innerHTML = html;
}

function setupGoogleAuth() {
  if (typeof GoogleDriveService === 'undefined') return;

  GoogleDriveService.init((user, isAuthenticated) => {
    if (isAuthenticated && user) {
      googleAuthContainer.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; background: rgba(0, 242, 254, 0.1); padding: 0.3rem 0.8rem; border-radius: 9999px; border: 1px solid rgba(0, 242, 254, 0.3);">
          <img src="${user.picture || 'https://lh3.googleusercontent.com/a/default-user'}" style="width: 24px; height: 24px; border-radius: 50%;">
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan);">${user.name.split(' ')[0]}</span>
          <i class="fab fa-google-drive" style="color: var(--accent-cyan);" title="Google Drive Auto-Sync Active"></i>
          <button id="google-logout-btn" style="background: none; border: none; color: var(--text-muted); cursor: pointer; margin-left: 0.3rem;" title="Sign out of Google">
            <i class="fas fa-sign-out-alt"></i>
          </button>
        </div>
      `;
      document.getElementById('google-logout-btn')?.addEventListener('click', () => {
        GoogleDriveService.signOut();
      });
    } else {
      googleAuthContainer.innerHTML = `
        <button id="google-login-btn" class="btn-pill" title="Sign in with Google to auto-sync assessments to Google Drive">
          <i class="fab fa-google"></i> Google Drive Sync
        </button>
      `;
      document.getElementById('google-login-btn')?.addEventListener('click', () => {
        GoogleDriveService.requestAccessToken();
      });
    }
  });
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

  // Save Patient Record
  if (btnSaveRecord) {
    btnSaveRecord.addEventListener('click', () => {
      const patientId = prompt("Enter Patient ID or Initials (e.g. PT-104):");
      if (patientId && typeof StorageService !== 'undefined') {
        StorageService.saveRecord({
          patientId,
          scaleId: currentScale.id,
          scaleName: currentScale.name,
          score: window._lastScore,
          severity: window._lastSeverity
        });
        alert(`Record saved locally and auto-synced to Google Drive for ${patientId}!`);
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
    <div class="record-item">
      <div>
        <div style="font-weight: 700; font-family: var(--font-heading); color: var(--accent-cyan);">${r.patientId}</div>
        <div style="font-size: 0.8rem; color: var(--text-secondary);">${r.scaleName} — ${r.dateFormatted}</div>
      </div>
      <div>
        <span class="severity-pill" style="font-size: 0.72rem; padding: 0.2rem 0.6rem;">${r.severity} (Score: ${r.score})</span>
        <button onclick="deleteRecordItem('${r.id}')" style="background: none; border: none; color: var(--accent-rose); margin-left: 0.5rem; cursor: pointer;">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

window.deleteRecordItem = function(id) {
  if (typeof StorageService !== 'undefined') StorageService.deleteRecord(id);
  renderHistoryModal();
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

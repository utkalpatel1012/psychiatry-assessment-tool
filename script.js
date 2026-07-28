let currentScale = null;
let currentQuestionIndex = 0;
let answers = [];
let sidebarOpen = false;

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const overlay = document.getElementById("overlay");
const sidebarScaleList = document.getElementById("sidebar-scale-list");
const homeView = document.getElementById("home-view");
const assessmentView = document.getElementById("assessment-view");
const resultsView = document.getElementById("results-view");
const resultsContent = document.getElementById("results-content");
const assessmentScaleName = document.getElementById("assessment-scale-name");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");
const scoreDisplay = document.getElementById("score-display");
const subscaleScoresEl = document.getElementById("subscale-scores");
const interpretationDisplay = document.getElementById("interpretation-display");
const shareBtn = document.getElementById("share-btn");
const pdfBtn = document.getElementById("pdf-btn");
const restartBtn = document.getElementById("restart-btn");
const backBtn = document.getElementById("back-to-home-btn");
const scaleCount = document.getElementById("scale-count");

function getQuestionText(q) {
  return typeof q === "string" ? q : q.text;
}

function getQuestionOptions(question) {
  return question.options || currentScale.options;
}

function evaluateCondition(dependsOn, answers) {
  if (dependsOn.any) {
    return dependsOn.any.some(c => answers[c.question] != null && answers[c.question] >= c.value);
  }
  return answers[dependsOn.question] != null && answers[dependsOn.question] >= dependsOn.value;
}

function toggleSidebar(open) {
  sidebarOpen = open !== undefined ? open : !sidebarOpen;
  sidebar.classList.toggle("open", sidebarOpen);
  overlay.classList.toggle("active", sidebarOpen);
}

sidebarToggle.addEventListener("click", () => toggleSidebar());
overlay.addEventListener("click", () => toggleSidebar(false));

function renderSidebar() {
  sidebarScaleList.innerHTML = scales.map(scale => `
    <div class="sidebar-scale-item" data-scale-id="${scale.id}">
      <h4>${scale.name}</h4>
      <p>${scale.fullName}</p>
    </div>
  `).join("");

  document.querySelectorAll(".sidebar-scale-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.dataset.scaleId;
      const scale = scales.find(s => s.id === id);
      document.querySelectorAll(".sidebar-scale-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      toggleSidebar(false);
      startAssessment(scale);
    });
  });

  if (scaleCount) scaleCount.textContent = scales.length;
}

function showView(view) {
  [homeView, assessmentView, resultsView].forEach(v => v.style.display = "none");
  view.style.display = "block";
}

function startAssessment(scale) {
  currentScale = scale;
  currentQuestionIndex = 0;
  answers = [];
  assessmentScaleName.textContent = `${scale.name}: ${scale.fullName}`;
  showView(assessmentView);
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= currentScale.questions.length) {
    showResults();
    return;
  }

  const question = currentScale.questions[currentQuestionIndex];

  if (question.dependsOn && !evaluateCondition(question.dependsOn, answers)) {
    answers.push(null);
    currentQuestionIndex++;
    showQuestion();
    return;
  }

  const total = currentScale.questions.length;
  const options = getQuestionOptions(question);

  questionText.textContent = getQuestionText(question);
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
  progressBar.style.width = `${(currentQuestionIndex / total) * 100}%`;

  optionsContainer.innerHTML = options.map(opt => `
    <button class="option-btn" data-score="${opt.score}">${opt.label}</button>
  `).join("");

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const score = parseInt(this.dataset.score);
      answers.push(score);

      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      this.classList.add("selected");

      setTimeout(() => {
        if (currentQuestionIndex < currentScale.questions.length - 1) {
          currentQuestionIndex++;
          showQuestion();
        } else {
          showResults();
        }
      }, 150);
    });
  });
}

function showResults() {
  showView(resultsView);
  displayScores();
  renderAnswersDetail();
  displayInterpretation();
  resultsContent.scrollIntoView({ behavior: "smooth" });
}

function renderAnswersDetail() {
  const el = document.getElementById("answers-detail");
  const qs = currentScale.questions;
  let html = '<div class="answers-section"><h3>Detailed Responses</h3>';
  html += '<div class="answers-list">';

  qs.forEach((q, i) => {
    const answer = answers[i];
    const qText = getQuestionText(q);
    const opts = getQuestionOptions(q);
    const qNum = i + 1;

    if (answer == null) {
      html += `<div class="answer-item answer-skipped">
        <div class="answer-q"><span class="answer-num">Q${qNum}.</span> ${qText.split('\n')[0]}</div>
        <div class="answer-val">— Skipped</div>
      </div>`;
    } else {
      const opt = opts.find(o => o.score === answer);
      const label = opt ? opt.label : `Score ${answer}`;
      html += `<div class="answer-item">
        <div class="answer-q"><span class="answer-num">Q${qNum}.</span> ${qText.split('\n')[0]}</div>
        <div class="answer-val">
          <span class="answer-badge">${answer}</span>
          ${label}
        </div>
      </div>`;
    }
  });

  html += '</div></div>';
  el.innerHTML = html;
}

function sumAnswers(arr) {
  return arr.reduce((sum, s) => sum + (s || 0), 0);
}

function displayScores() {
  const hasSubscales = currentScale.subscales && currentScale.subscales.length > 0;

  if (currentScale.scoring.type === "cssrs") {
    subscaleScoresEl.style.display = "none";
    displayCSSRSResults();
    return;
  }

  if (hasSubscales) {
    let subscaleScores = {};
    currentScale.subscales.forEach(ss => { subscaleScores[ss.id] = 0; });

    currentScale.questions.forEach((q, i) => {
      if (q.subscale && subscaleScores[q.subscale] !== undefined && answers[i] != null) {
        subscaleScores[q.subscale] += answers[i];
      }
    });

    subscaleScoresEl.style.display = "grid";
    subscaleScoresEl.innerHTML = currentScale.subscales.map(ss => `
      <div class="subscale-card">
        <h4>${ss.name}</h4>
        <div class="subscale-score">${subscaleScores[ss.id]}</div>
        <div class="subscale-range">${ss.min} – ${ss.max}</div>
      </div>
    `).join("");

    const totalScore = Object.values(subscaleScores).reduce((a, b) => a + b, 0);
    const maxScore = currentScale.scoring.totalRange ? currentScale.scoring.totalRange.max : 
      currentScale.questions.reduce((sum, q) => sum + (getQuestionOptions(q).length > 0 ? getQuestionOptions(q)[getQuestionOptions(q).length - 1].score : 0), 0);

    const range = currentScale.scoring.ranges.find(r => totalScore >= r.min && totalScore <= r.max);

    scoreDisplay.innerHTML = `
      <div class="score-item">
        <h3>${currentScale.name}: ${currentScale.fullName}</h3>
        <div class="score-value">${totalScore} / ${maxScore}</div>
        <div class="severity">Severity: <strong>${range ? range.severity : "Unknown"}</strong></div>
      </div>
    `;

    window._subscaleScores = subscaleScores;
    window._totalScore = totalScore;
  } else {
    subscaleScoresEl.style.display = "none";
    const totalScore = sumAnswers(answers);
    const maxScore = currentScale.scoring.maxScore || 
      currentScale.questions.reduce((sum, q) => {
        const opts = getQuestionOptions(q);
        return sum + opts[opts.length - 1].score;
      }, 0);

    const range = currentScale.scoring.ranges.find(r => totalScore >= r.min && totalScore <= r.max);

    scoreDisplay.innerHTML = `
      <div class="score-item">
        <h3>${currentScale.name}: ${currentScale.fullName}</h3>
        <div class="score-value">${totalScore} / ${maxScore}</div>
        <div class="severity">Severity: <strong>${range ? range.severity : "Unknown"}</strong></div>
      </div>
    `;

    window._totalScore = totalScore;
  }
}

function displayCSSRSResults() {
  const a = answers;
  const ideationLabels = [
    "1. Wish to be Dead",
    "2. Non-Specific Active Suicidal Thoughts",
    "3. Active Suicidal Ideation with Methods",
    "4. Active Suicidal Ideation with Some Intent",
    "5. Active Suicidal Ideation with Specific Plan"
  ];
  const intensityLabels = [
    "Frequency",
    "Duration",
    "Controllability",
    "Deterrents",
    "Reasons for Attempt"
  ];
  const behaviorLabels = [
    "6. Actual Attempt",
    "7. Non-Suicidal Self-Injury (NSSI)",
    "8. Interrupted Attempt",
    "9. Aborted / Self-Interrupted Attempt",
    "10. Preparatory Acts or Behavior"
  ];

  let html = '<div class="cssrs-summary">';
  html += '<h4>Suicidal Ideation</h4><ul class="cssrs-list">';
  let anyIdeation = false;
  for (let i = 0; i < 5; i++) {
    if (a[i] != null) {
      anyIdeation = anyIdeation || a[i] === 1;
      html += `<li class="${a[i] === 1 ? 'endorsed' : 'not-endorsed'}">
        <i class="fas ${a[i] === 1 ? 'fa-check-circle' : 'fa-circle'}"></i> ${ideationLabels[i]}</li>`;
    }
  }
  html += '</ul>';

  const hasIntensity = a[5] != null;
  if (hasIntensity) {
    html += '<h4>Intensity of Ideation</h4><table class="cssrs-table"><tbody>';
    for (let i = 0; i < 5; i++) {
      const idx = 5 + i;
      if (a[idx] != null) {
        const optLabels = [
          ["Less than once a week", "Once a week", "2–3 times a week", "Daily", "Many times per day"],
          ["Fleeting", "Brief", "Moderate", "Long", "Continuous"],
          ["Easily controllable", "Somewhat controllable", "With difficulty", "Poorly controlled", "Uncontrollable"],
          ["Strong deterrents", "Deterrents present", "Do not prevent", "Definitely do not prevent", "No deterrents"],
          ["No reasons", "Minimally compelling", "Some compelling", "Very compelling", "Overwhelming"]
        ];
        html += `<tr><td>${intensityLabels[i]}</td><td>${optLabels[i][a[idx]] || a[idx]}</td></tr>`;
      }
    }
    html += '</tbody></table>';
  }

  html += '<h4>Suicidal Behavior</h4><ul class="cssrs-list">';
  let anyBehavior = false;
  const behaviorIndices = [10, 14, 15, 16, 17];
  for (let i = 0; i < behaviorLabels.length; i++) {
    const idx = behaviorIndices[i];
    if (a[idx] != null) {
      anyBehavior = anyBehavior || a[idx] === 1;
      html += `<li class="${a[idx] === 1 ? 'endorsed' : 'not-endorsed'}">
        <i class="fas ${a[idx] === 1 ? 'fa-check-circle' : 'fa-circle'}"></i> ${behaviorLabels[i]}</li>`;
    }
  }

  if (a[10] === 1) {
    html += '<li class="behavior-detail">';
    if (a[11] != null) html += `Actual lethality: ${a[11]}/5 | `;
    if (a[12] != null) html += `Potential lethality: ${a[12]}/2 | `;
    if (a[13] === 1) html += `Multiple attempts: Yes`;
    else if (a[13] === 0) html += `Multiple attempts: No`;
    html += '</li>';
  }

  html += '</ul>';

  let riskClass = "No Suicidal Ideation or Behavior";
  let riskText = "No suicidal ideation or behavior reported. Continue routine monitoring.";
  if (anyBehavior) {
    riskClass = "High Risk";
    riskText = "Suicidal behavior present. This is a psychiatric emergency. Immediate evaluation for hospitalization required. Ensure constant supervision. Remove all means.";
  } else if (anyIdeation) {
    if (a[1] === 1 || a[2] === 1 || a[3] === 1 || a[4] === 1) {
      riskClass = "Moderate Risk";
      riskText = "Active suicidal ideation present. Requires thorough risk assessment. Develop safety plan. Consider urgent outpatient follow-up.";
    } else if (a[0] === 1) {
      riskClass = "Low Risk";
      riskText = "Wish to be dead only. No active suicidal thoughts. Provide supportive listening. Reinforce safety plan.";
    }
  }

  html += `<div class="cssrs-risk cssrs-risk-${riskClass.toLowerCase().replace(/\s+/g, '-')}">
    <strong>Risk Classification: ${riskClass}</strong><br>
    ${riskText}
  </div></div>`;

  subscaleScoresEl.style.display = "none";
  scoreDisplay.innerHTML = `
    <div class="score-item">
      <h3>${currentScale.name}: ${currentScale.fullName}</h3>
      <div class="cssrs-container">${html}</div>
    </div>
  `;

  window._totalScore = 0;
}

function displayInterpretation() {
  if (currentScale.scoring.type === "cssrs") {
    interpretationDisplay.innerHTML = `<strong>C-SSRS Summary:</strong> Review the endorsed items above. Document risk classification and follow institutional protocol for suicide risk management.`;
    return;
  }

  const totalScore = window._totalScore || sumAnswers(answers);
  const range = currentScale.scoring.ranges.find(r => totalScore >= r.min && totalScore <= r.max);

  interpretationDisplay.innerHTML = `
    <strong>Interpretation:</strong><br>
    ${range ? range.interpretation : "Unable to determine interpretation."}
  `;
}

function getResultsText() {
  if (currentScale.scoring.type === "cssrs") {
    return getCSSRSResultsText();
  }

  const totalScore = window._totalScore || sumAnswers(answers);
  const range = currentScale.scoring.ranges.find(r => totalScore >= r.min && totalScore <= r.max);
  let text = `Psychiatry Assessment Tool\n========================\n\nScale: ${currentScale.name} - ${currentScale.fullName}\n`;

  text += `\nResponses:\n`;
  currentScale.questions.forEach((q, i) => {
    const answer = answers[i];
    const qText = getQuestionText(q);
    const qShort = qText.split('\n')[0];
    if (answer == null) {
      text += `  Q${i + 1}. ${qShort}\n    -> Skipped\n`;
    } else {
      const opts = getQuestionOptions(q);
      const opt = opts.find(o => o.score === answer);
      const label = opt ? opt.label : `Score ${answer}`;
      text += `  Q${i + 1}. ${qShort}\n    -> ${label} [${answer}]\n`;
    }
  });

  if (currentScale.subscales && window._subscaleScores) {
    text += `\nSubscale Scores:\n`;
    currentScale.subscales.forEach(ss => {
      text += `  ${ss.name}: ${window._subscaleScores[ss.id]} (Range: ${ss.min}–${ss.max})\n`;
    });
  }

  text += `\nTotal Score: ${totalScore}\nSeverity: ${range ? range.severity : "Unknown"}\n\nInterpretation:\n${range ? range.interpretation : "Unable to determine."}\n\nDate: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  return text;
}

function getCSSRSResultsText() {
  const a = answers;
  let text = `C-SSRS Assessment\n======================\n\n`;

  text += `Responses:\n`;
  currentScale.questions.forEach((q, i) => {
    const answer = a[i];
    const qText = getQuestionText(q);
    const qShort = qText.split('\n')[0];
    if (answer == null) {
      text += `  Q${i + 1}. ${qShort}\n    -> Skipped\n`;
    } else {
      const opts = getQuestionOptions(q);
      const opt = opts.find(o => o.score === answer);
      const label = opt ? opt.label : `Score ${answer}`;
      text += `  Q${i + 1}. ${qShort}\n    -> ${label}\n`;
    }
  });

  text += `\nSummary:\n`;
  text += `Suicidal Ideation:\n`;
  const ideationLabels = ["Wish to be Dead", "Non-Specific Active Suicidal Thoughts", "Active Ideation with Methods", "Active Ideation with Some Intent", "Active Ideation with Specific Plan"];
  for (let i = 0; i < 5; i++) {
    if (a[i] != null) text += `  [${a[i] === 1 ? 'X' : ' '}] ${ideationLabels[i]}\n`;
  }

  if (a[5] != null) {
    text += `\nIntensity of Ideation:\n`;
    const intensityLabels = ["Frequency", "Duration", "Controllability", "Deterrents", "Reasons for Attempt"];
    const optLabels = [
      ["Less than once a week", "Once a week", "2-3 times a week", "Daily", "Many times per day"],
      ["Fleeting", "Brief", "Moderate", "Long", "Continuous"],
      ["Easily controllable", "Somewhat controllable", "With difficulty", "Poorly controlled", "Uncontrollable"],
      ["Strong deterrents", "Deterrents present", "Do not prevent", "Definitely do not prevent", "No deterrents"],
      ["No reasons", "Minimally compelling", "Some compelling", "Very compelling", "Overwhelming"]
    ];
    for (let i = 0; i < 5; i++) {
      const idx = 5 + i;
      if (a[idx] != null) text += `  ${intensityLabels[i]}: ${optLabels[i][a[idx]] || a[idx]}\n`;
    }
  }

  text += `\nSuicidal Behavior:\n`;
  const behaviorLabels = ["Actual Attempt", "Non-Suicidal Self-Injury", "Interrupted Attempt", "Aborted/Self-Interrupted Attempt", "Preparatory Acts"];
  const behaviorIndices = [10, 14, 15, 16, 17];
  for (let i = 0; i < behaviorLabels.length; i++) {
    const idx = behaviorIndices[i];
    if (a[idx] != null) text += `  [${a[idx] === 1 ? 'X' : ' '}] ${behaviorLabels[i]}\n`;
  }

  if (a[10] === 1) {
    text += `    Attempt details:\n`;
    if (a[11] != null) text += `      Actual lethality: ${a[11]}/5\n`;
    if (a[12] != null) text += `      Potential lethality: ${a[12]}/2\n`;
    if (a[13] != null) text += `      Multiple attempts: ${a[13] === 1 ? 'Yes' : 'No'}\n`;
  }

  let riskClass = "No Suicidal Ideation or Behavior";
  let riskText = "No suicidal ideation or behavior reported.";
  let anyIdeation = a[0] === 1 || a[1] === 1 || a[2] === 1 || a[3] === 1 || a[4] === 1;
  let anyBehavior = a[10] === 1 || a[14] === 1 || a[15] === 1 || a[16] === 1 || a[17] === 1;
  if (anyBehavior) {
    riskClass = "HIGH RISK - Suicidal Behavior Present";
    riskText = "Psychiatric emergency. Immediate hospitalization evaluation required.";
  } else if (anyIdeation) {
    if (a[1] === 1 || a[2] === 1 || a[3] === 1 || a[4] === 1) {
      riskClass = "MODERATE RISK - Active Suicidal Ideation";
      riskText = "Requires thorough risk assessment and safety plan.";
    } else if (a[0] === 1) {
      riskClass = "LOW RISK - Wish to be Dead";
      riskText = "No active suicidal thoughts. Supportive listening and monitoring.";
    }
  }

  text += `\nRisk Classification: ${riskClass}\n${riskText}\n\nDate: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  return text;
}

// Export PDF — uses native browser print for perfect quality
pdfBtn.addEventListener('click', () => {
  window.print();
});

// Share — tries html2pdf for direct PDF share if available, falls back to text
shareBtn.addEventListener('click', async () => {
  shareBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
  shareBtn.disabled = true;
  try {
    const filename = `${currentScale.name}_${new Date().toISOString().slice(0, 10)}.pdf`;
    const text = getResultsText();

    // Try html2pdf for direct file share (mobile Chrome/Safari)
    if (typeof html2pdf !== 'undefined' && navigator.share && navigator.canShare) {
      const blob = await html2pdf().set({
        margin: [8, 8],
        filename,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      }).from(resultsContent).outputPdf('blob');

      const file = new File([blob], filename, { type: 'application/pdf' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: `${currentScale.name} Assessment` });
        shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Share';
        shareBtn.disabled = false;
        return;
      }
    }

    // Fallback: try Web Share text API
    if (navigator.share) {
      await navigator.share({ title: `${currentScale.name} Assessment`, text });
    } else {
      await navigator.clipboard.writeText(text);
      alert('Results copied to clipboard. Use the Export PDF button for a formatted PDF.');
    }
  } catch (e) {
    if (e.name === 'AbortError') { /* user cancelled — do nothing */ }
    else {
      try {
        await navigator.clipboard.writeText(getResultsText());
        alert('Results copied to clipboard.');
      } catch {
        alert('Unable to share.');
      }
    }
  }
  shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Share';
  shareBtn.disabled = false;
});

backBtn.addEventListener("click", () => showView(homeView));

restartBtn.addEventListener("click", () => {
  showView(homeView);
  currentScale = null;
  document.querySelectorAll(".sidebar-scale-item").forEach(i => i.classList.remove("active"));
});

renderSidebar();

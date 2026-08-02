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

// 100% Structured A4 Printable Medical Report Window (Exact A4 Page Formatting & Subdivisional Breakdown)
function printMedicalReportWindow() {
  if (!currentScale) return;

  const dateStr = new Date().toLocaleString();
  const maxScore = currentScale.scoring.maxScore || (currentScale.scoring.totalRange ? currentScale.scoring.totalRange.max : 100);
  const range = currentScale.scoring.ranges ? currentScale.scoring.ranges.find(r => window._lastScore >= r.min && window._lastScore <= r.max) : null;

  // Build Subdivisional / Subscale Breakdown Section
  let subscalesHtml = '';
  if (currentScale.subscales && currentScale.subscales.length > 0 && window._subscores) {
    let subRows = currentScale.subscales.map(ss => {
      const scoreVal = window._subscores[ss.id] || 0;
      return `
        <tr style="border-bottom: 1px solid #cbd5e1;">
          <td style="padding: 7px 10px; font-weight: bold; color: #0f172a;">${ss.name}</td>
          <td style="padding: 7px 10px; font-weight: 800; color: #0284c7; text-align: center; font-size: 13px;">${scoreVal}</td>
          <td style="padding: 7px 10px; color: #64748b; text-align: center;">${ss.min} – ${ss.max}</td>
        </tr>
      `;
    }).join('');

    subscalesHtml = `
      <div style="background: #ffffff; border: 1.5px solid #0284c7; border-radius: 8px; padding: 12px 14px; margin-bottom: 14px; page-break-inside: avoid;">
        <div style="font-size: 11px; font-weight: 800; color: #0284c7; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
          Subdivisional Score Breakdown & Subscale Total Scores
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 11.5px;">
          <thead>
            <tr style="background: #e0f2fe; color: #0369a1; text-align: left; font-weight: 800;">
              <th style="padding: 7px 10px; border-bottom: 1.5px solid #7dd3fc;">Subdivision / Subscale Domain</th>
              <th style="padding: 7px 10px; border-bottom: 1.5px solid #7dd3fc; text-align: center;">Subtotal Score</th>
              <th style="padding: 7px 10px; border-bottom: 1.5px solid #7dd3fc; text-align: center;">Min – Max Range</th>
            </tr>
          </thead>
          <tbody>
            ${subRows}
          </tbody>
        </table>
      </div>
    `;
  }

  // Build Detailed Questions & Operational Responses Table
  let itemsHtml = '';
  currentScale.questions.forEach((q, i) => {
    const ans = answers[i];
    const opts = getQuestionOptions(q);
    const qText = (typeof q === 'string' ? q : (q.text || '')).replace(/\n/g, '<br>');

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
        labelText = `<strong style="color: #0284c7; font-size: 11.5px;">Score ${ans}: ${opt.label}</strong>${desc ? `<div style="font-size: 10.5px; color: #334155; margin-top: 3px; font-weight: normal; line-height: 1.4;">${desc}</div>` : ''}`;
      } else {
        labelText = `<strong style="color: #0284c7; font-size: 11.5px;">Score ${ans}</strong>`;
      }
    }

    const rowBg = i % 2 === 0 ? '#ffffff' : '#f8fafc';
    itemsHtml += `
      <tr style="background: ${rowBg}; border-bottom: 1px solid #cbd5e1; page-break-inside: avoid;">
        <td style="padding: 8px 6px; text-align: center; font-weight: bold; color: #0284c7; width: 6%; vertical-align: top;">${i + 1}</td>
        <td style="padding: 8px 10px; width: 54%; vertical-align: top; font-weight: 500; color: #0f172a;">${qText}</td>
        <td style="padding: 8px 10px; width: 40%; vertical-align: top; background: rgba(14,165,233,0.03);">${labelText}</td>
      </tr>
    `;
  });

  const printHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${formatPdfDocumentTitle()}</title>
      <style>
        @page { size: A4 portrait; margin: 12mm; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 16px; color: #0f172a; font-size: 11.5px; line-height: 1.45; background: #ffffff; }
        table { width: 100%; border-collapse: collapse; }
        .header-banner { border-bottom: 3px solid #0284c7; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-start; }
        .patient-card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 14px; margin-bottom: 14px; page-break-inside: avoid; }
        .score-box { background: #f0f9ff; border: 1.5px solid #7dd3fc; border-radius: 8px; padding: 12px 16px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; page-break-inside: avoid; }
        .impression-box { background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #0284c7; border-radius: 4px; padding: 10px 12px; margin-bottom: 16px; page-break-inside: avoid; }
        .table-header { font-weight: 800; font-size: 12.5px; margin-bottom: 8px; border-bottom: 2px solid #cbd5e1; padding-bottom: 4px; color: #0f172a; page-break-inside: avoid; }
        @media print {
          body { padding: 0; }
        }
      </style>
    </head>
    <body>
      <!-- Header Banner -->
      <div class="header-banner">
        <div>
          <span style="background: #0284c7; color: white; padding: 3px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">HIS / EHR CLINICAL EVALUATION REPORT</span>
          <h2 style="margin: 4px 0 2px 0; font-size: 20px; color: #0f172a; font-weight: 800;">${currentScale.name} EVALUATION</h2>
          <div style="font-size: 11.5px; color: #64748b; font-weight: 500;">${currentScale.fullName}</div>
        </div>
        <div style="text-align: right; font-size: 10.5px; color: #64748b; line-height: 1.4;">
          <strong style="color: #0f172a; font-size: 11.5px;">HOSPITAL INFORMATION SYSTEM</strong><br>
          Date: ${dateStr}<br>
          Status: Official Verified Record
        </div>
      </div>

      <!-- Patient Demographics Card -->
      <div class="patient-card">
        <div style="font-size: 10.5px; font-weight: bold; color: #0284c7; text-transform: uppercase; margin-bottom: 4px; letter-spacing: 0.5px;">Patient Context</div>
        <table>
          <tr>
            <td style="padding: 2px 0; width: 50%;"><strong>Patient Name:</strong> ${activePatientName || 'NOT SPECIFIED'}</td>
            <td style="padding: 2px 0; width: 50%;"><strong>Age:</strong> ${activePatientAge ? activePatientAge + ' Years' : 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 2px 0; width: 50%;"><strong>MRN / UHID:</strong> ${activePatientMRN || 'N/A'}</td>
            <td style="padding: 2px 0; width: 50%;"><strong>Ward Location:</strong> ${activePatientWard} (${getWardFullName(activePatientWard)})</td>
          </tr>
        </table>
      </div>

      <!-- Total Score & Severity Banner -->
      <div class="score-box">
        <div>
          <div style="font-size: 10.5px; font-weight: bold; color: #0369a1; text-transform: uppercase; letter-spacing: 0.5px;">Total Assessment Score</div>
          <div style="font-size: 28px; font-weight: 800; color: #0284c7; line-height: 1; margin-top: 2px;">
            ${window._lastScore} <span style="font-size: 14px; color: #64748b; font-weight: 600;">/ ${maxScore}</span>
          </div>
        </div>
        <div style="background: #0284c7; color: white; padding: 6px 16px; border-radius: 20px; font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">
          ${window._lastSeverity}
        </div>
      </div>

      <!-- Subdivisional Total Scores Section (If Applicable) -->
      ${subscalesHtml}

      <!-- Diagnostic Guidelines & Impression Box -->
      <div class="impression-box">
        <strong style="color: #0f172a; font-size: 12px;">Clinical Guidelines & Diagnostic Impression:</strong>
        <p style="margin: 3px 0 0 0; font-size: 11px; color: #334155; line-height: 1.45;">${range ? range.interpretation : 'Assessment completed.'}</p>
      </div>

      <!-- Scale Questions and Responses Table Header -->
      <div class="table-header">
        Complete Scale Item Responses & Operational Descriptions (${currentScale.questions.length} Items)
      </div>

      <!-- Complete Item Table -->
      <table style="font-size: 11px; margin-bottom: 16px;">
        <thead>
          <tr style="background: #e2e8f0; text-align: left;">
            <th style="padding: 8px 6px; width: 6%; text-align: center; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1;">#</th>
            <th style="padding: 8px 10px; width: 54%; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1;">Clinical Question & Physical Protocol</th>
            <th style="padding: 8px 10px; width: 40%; color: #334155; font-weight: 800; border-bottom: 2px solid #cbd5e1;">Selected Rating & Operational Description</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <!-- Footer -->
      <table style="width: 100%; margin-top: 20px; border-top: 1px solid #cbd5e1; padding-top: 8px; font-size: 10px; color: #94a3b8; page-break-inside: avoid;">
        <tr>
          <td>Generated by Hospital Information System (HIS / EHR Suite)</td>
          <td style="text-align: right; font-weight: bold; color: #64748b;">CONFIDENTIAL MEDICAL RECORD</td>
        </tr>
      </table>

      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
          }, 200);
        };
      <\/script>
    </body>
    </html>
  `;

  const win = window.open('', '_blank');
  if (win) {
    win.document.write(printHtml);
    win.document.close();
  } else {
    window.print();
  }
}

// Pure Core jsPDF Line-by-Line Vector PDF File Generator with Subdivisional Totals Box
async function generateScalePdfFile() {
  if (!currentScale) return null;
  const filename = formatPdfDocumentTitle() + '.pdf';

  let jsPDFCtor = null;
  if (window.jspdf && window.jspdf.jsPDF) {
    jsPDFCtor = window.jspdf.jsPDF;
  } else if (typeof window.jsPDF === 'function') {
    jsPDFCtor = window.jsPDF;
  }

  if (!jsPDFCtor) {
    console.warn("jsPDF constructor unavailable; using printable window fallback.");
    return null;
  }

  try {
    const doc = new jsPDFCtor({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const maxScore = currentScale.scoring.maxScore || (currentScale.scoring.totalRange ? currentScale.scoring.totalRange.max : 100);
    const range = currentScale.scoring.ranges ? currentScale.scoring.ranges.find(r => window._lastScore >= r.min && window._lastScore <= r.max) : null;
    const dateStr = new Date().toLocaleString();

    let pageNum = 1;

    function drawHeader() {
      doc.setFillColor(2, 132, 199);
      doc.rect(0, 0, 210, 22, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text(`${currentScale.name} — CLINICAL EVALUATION REPORT`, 14, 12);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.text(`Hospital Information System (HIS / EHR Suite) | Date: ${dateStr}`, 14, 18);
    }

    function drawFooter() {
      doc.setDrawColor(203, 213, 225);
      doc.line(14, 284, 196, 284);
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184);
      doc.setFont('helvetica', 'normal');
      doc.text(`Hospital Information System (HIS / EHR Suite) — Page ${pageNum}`, 14, 288);
      doc.text(`CONFIDENTIAL MEDICAL RECORD`, 196, 288, { align: 'right' });
    }

    drawHeader();

    // 1. Demographics Box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(14, 26, 182, 22, 2, 2, 'FD');

    doc.setTextColor(2, 132, 199);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(`PATIENT DEMOGRAPHICS CONTEXT`, 18, 32);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(`Patient Name:`, 18, 38);
    doc.setFont('helvetica', 'normal');
    doc.text(`${activePatientName || 'NOT SPECIFIED'}`, 44, 38);

    doc.setFont('helvetica', 'bold');
    doc.text(`Age:`, 115, 38);
    doc.setFont('helvetica', 'normal');
    doc.text(`${activePatientAge ? activePatientAge + ' Years' : 'N/A'}`, 125, 38);

    doc.setFont('helvetica', 'bold');
    doc.text(`MRN / UHID:`, 18, 44);
    doc.setFont('helvetica', 'normal');
    doc.text(`${activePatientMRN || 'N/A'}`, 44, 44);

    doc.setFont('helvetica', 'bold');
    doc.text(`Ward:`, 115, 44);
    doc.setFont('helvetica', 'normal');
    doc.text(`${activePatientWard} (${getWardFullName(activePatientWard)})`, 125, 44);

    // 2. Total Score & Diagnostic Severity Banner
    doc.setFillColor(240, 249, 255);
    doc.setDrawColor(125, 211, 252);
    doc.roundedRect(14, 52, 182, 18, 2, 2, 'FD');

    doc.setTextColor(3, 105, 161);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`TOTAL ASSESSMENT SCORE: ${window._lastScore} / ${maxScore}`, 18, 63);

    const sevText = (window._lastSeverity || 'Completed').toUpperCase();
    doc.setFillColor(2, 132, 199);
    doc.roundedRect(118, 56, 72, 10, 5, 5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    doc.text(sevText, 154, 62.5, { align: 'center' });

    let y = 74;

    // 3. Subdivisional Total Scores Section (If Subscales Exist)
    if (currentScale.subscales && currentScale.subscales.length > 0 && window._subscores) {
      const boxHeight = 8 + (currentScale.subscales.length * 6.5);
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(2, 132, 199);
      doc.roundedRect(14, y, 182, boxHeight, 2, 2, 'FD');

      doc.setTextColor(2, 132, 199);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(`SUBDIVISIONAL SCORE BREAKDOWN & SUBSCALE TOTALS`, 18, y + 6);
      
      let subY = y + 12;
      currentScale.subscales.forEach((ss) => {
        const scoreVal = window._subscores[ss.id] || 0;
        doc.setTextColor(15, 23, 42);
        doc.setFontSize(8.5);
        doc.setFont('helvetica', 'bold');
        doc.text(`${ss.name}`, 18, subY);

        doc.setTextColor(2, 132, 199);
        doc.setFont('helvetica', 'bold');
        doc.text(`Subtotal Score: ${scoreVal}`, 115, subY);

        doc.setTextColor(100, 116, 139);
        doc.setFont('helvetica', 'normal');
        doc.text(`Range: ${ss.min} – ${ss.max}`, 160, subY);

        subY += 6.5;
      });

      y += boxHeight + 4;
    }

    // 4. Clinical Guidelines & Impression Box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(14, y, 182, 20, 2, 2, 'FD');

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(`Clinical Guidelines & Diagnostic Impression:`, 18, y + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const impressionText = range ? range.interpretation : 'Assessment completed.';
    const splitImpression = doc.splitTextToSize(impressionText, 174);
    doc.text(splitImpression, 18, y + 11);

    y += 24;

    // 5. Complete Item Responses Section
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`Complete Scale Item Responses & Operational Descriptions (${currentScale.questions.length} Items)`, 14, y);
    y += 5;

    // Table Header Row
    doc.setFillColor(2, 132, 199);
    doc.rect(14, y, 182, 7, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(`#`, 17, y + 5);
    doc.text(`Clinical Question & Physical Protocol`, 28, y + 5);
    doc.text(`Selected Rating & Operational Description`, 120, y + 5);
    y += 7;

    // Loop through all items
    currentScale.questions.forEach((q, i) => {
      const ans = answers[i];
      const opts = getQuestionOptions(q);
      const qText = typeof q === 'string' ? q : (q.text || '');

      let respLabel = 'Skipped / Not Assessed';
      let respDesc = '';
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
          respLabel = `Score ${ans}: ${opt.label}`;
          respDesc = opt.description || opt.desc || '';
        } else {
          respLabel = `Score ${ans}`;
        }
      }

      const splitQ = doc.splitTextToSize(qText, 88);
      const splitRespLabel = doc.splitTextToSize(respLabel, 72);
      const splitRespDesc = respDesc ? doc.splitTextToSize(respDesc, 72) : [];
      
      const qHeight = splitQ.length * 3.5;
      const respHeight = (splitRespLabel.length + splitRespDesc.length) * 3.5 + 2;
      const rowHeight = Math.max(8, Math.max(qHeight, respHeight) + 3);

      if (y + rowHeight > 275) {
        drawFooter();
        doc.addPage();
        pageNum++;
        drawHeader();
        y = 28;

        doc.setFillColor(2, 132, 199);
        doc.rect(14, y, 182, 7, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'bold');
        doc.text(`#`, 17, y + 5);
        doc.text(`Clinical Question & Physical Protocol`, 28, y + 5);
        doc.text(`Selected Rating & Operational Description`, 120, y + 5);
        y += 7;
      }

      const rowBg = i % 2 === 0 ? [255, 255, 255] : [248, 250, 252];
      doc.setFillColor(rowBg[0], rowBg[1], rowBg[2]);
      doc.setDrawColor(226, 232, 240);
      doc.rect(14, y, 182, rowHeight, 'FD');

      doc.setTextColor(2, 132, 199);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.text(`${i + 1}`, 17, y + 4.5);

      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'normal');
      doc.text(splitQ, 28, y + 4.5);

      doc.setTextColor(2, 132, 199);
      doc.setFont('helvetica', 'bold');
      doc.text(splitRespLabel, 120, y + 4.5);

      if (splitRespDesc.length > 0) {
        doc.setTextColor(71, 85, 105);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.text(splitRespDesc, 120, y + 4.5 + (splitRespLabel.length * 3.5));
      }

      y += rowHeight;
    });

    drawFooter();

    window._lastJsPdfDoc = doc;
    const pdfBlob = doc.output('blob');
    return new File([pdfBlob], filename, { type: 'application/pdf' });
  } catch (err) {
    console.error("Error generating vector PDF:", err);
    return null;
  }
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

// DIRECT SHARE OR PRINT OF COMPLETE REPORT IN PDF FORM ONLY TO ANY PLATFORM
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

    if (window._lastJsPdfDoc) {
      window._lastJsPdfDoc.save(filename);
      printMedicalReportWindow();
    } else {
      printMedicalReportWindow();
    }
  } catch (err) {
    console.error("PDF Share failed:", err);
    printMedicalReportWindow();
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
  if (window._lastJsPdfDoc) {
    window._lastJsPdfDoc.save(filename);
    printMedicalReportWindow();
  } else {
    printMedicalReportWindow();
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

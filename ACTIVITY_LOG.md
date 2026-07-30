# 📋 Repository Activity Log & AI Handoff Document

**Project Name**: Psychiatry Assessment Tool — Hospital Information System (HIS / EHR Module)  
**Local Repository Path**: `C:\Projects\my-web-app`  
**GitHub Repository**: `https://github.com/utkalpatel1012/psychiatry-assessment-tool.git`  
**Live Production URL**: `https://psychiatry-assessment-tool.vercel.app/`  
**Last Updated**: 2026-07-29  

---

## 🎯 Executive Summary & Purpose

This codebase is a high-performance, responsive Single-Page Application (SPA) designed for psychiatrists, DNB residents, and clinical healthcare professionals to perform operationalized psychiatric rating scale assessments, compute subscale/total scores automatically, generate EMR SOAP clinical notes, and synchronize patient evaluation records with Google Drive.

---

## 📚 Complete Inventory of 22 Standardized Clinical Scales

| Scale ID | Scale Name | Full Instrument Name | Category | Items & Scoring |
| :--- | :--- | :--- | :--- | :--- |
| `panss` | **PANSS** | Positive and Negative Syndrome Scale | `psychosis` | 30 items (1–7 per item, Max 210) |
| `bprs` | **BPRS** | Brief Psychiatric Rating Scale | `psychosis` | 24 items (1–7 per item, Max 168) |
| `ymrs` | **YMRS** | Young Mania Rating Scale | `mood` | 11 items (Double-weighted items, Max 60) |
| `hamd` | **HAM-D (17)** | Hamilton Depression Rating Scale | `mood` | 17 items (0–4 per item, Max 52) |
| `hama` | **HAM-A** | Hamilton Anxiety Rating Scale | `anxiety` | 14 items (Psychic & Somatic subscales, Max 56) |
| `madrs` | **MADRS** | Montgomery-Asberg Depression Rating Scale | `mood` | 10 items (0–6 per item, Max 60) |
| `phq9` | **PHQ-9** | Patient Health Questionnaire | `mood` | 9 items (DSM-5 Depression criteria, Max 27) |
| `dass21` | **DASS-21** | Depression Anxiety Stress Scales | `mood` | 21 items (3 subscales: Dep, Anx, Str) |
| `moca` | **MoCA** | Montreal Cognitive Assessment | `cognitive` | 30 points across 8 cognitive domains |
| `mmse` | **MMSE** | Mini-Mental State Examination | `cognitive` | 30 points screening for dementia |
| `isaa` | **ISAA** | Indian Scale for Assessment of Autism | `neurodevelopmental` | 40 items (NIMH/NIEPID Govt of India, Max 200) |
| `audit` | **AUDIT** | Alcohol Use Disorders Identification Test | `substance` | 10 items (WHO alcohol risk screening, Max 40) |
| `ciwa-ar` | **CIWA-Ar** | Clinical Institute Withdrawal Assessment - Alcohol | `substance` | 10 items (Protocol-driven withdrawal guide, Max 67) |
| `cows` | **COWS** | Clinical Opiate Withdrawal Scale | `substance` | 11 items (Buprenorphine induction guide, Max 48) |
| `ybocs` | **Y-BOCS** | Yale-Brown Obsessive Compulsive Scale | `anxiety` | 10 items (Obsessions & Compulsions subscales) |
| `gad7` | **GAD-7** | Generalized Anxiety Disorder 7-Item | `anxiety` | 7 items (0–3 per item, Max 21) |
| `gsaq` | **GSAQ** | Global Sleep Assessment Questionnaire | `sleep` | 11 items (Insomnia, Apnea, RLS screening, Max 33) |
| `bfcrs` | **BFCRS** | Bush-Francis Catatonia Rating Scale | `catatonia` | 23 items (Items 1-14 screening + severity, Max 69) |
| `bars` | **BARS** | Barnes Akathisia Rating Scale | `catatonia` | 4 items (Objective, Subjective, Global impression) |
| `aims` | **AIMS** | Abnormal Involuntary Movement Scale | `catatonia` | 12 items (Tardive dyskinesia screening, Max 48) |
| `cssrs-lifetime` | **C-SSRS (Lifetime)** | Columbia Suicide Severity Rating Scale — Baseline | `suicide` | 10 items (Lifetime history & 12-month baseline) |
| `cssrs-acute` | **C-SSRS (Acute)** | Columbia Suicide Severity Rating Scale — Acute | `suicide` | 10 items (Since Last Visit / ER protocol) |

---

## 🛠 File Structure & Module Responsibilities

- **`index.html`**: Main Single Page Application shell. Contains the Hospital EHR Context bar (`patient-context-bar`), Google Drive Auth container, Bento grid layout (`bento-grid`), assessment card, results dashboard, and patient history modal.
- **`scales.js`**: Complete JSON array containing all 22 psychiatric rating scales with full question prompts, options, subscale assignments, dynamic branching logic (`dependsOn`), and validated clinical interpretation severity ranges.
- **`drive-service.js`**: Google OAuth 2.0 & Google Drive API v3 sync engine. Features `GoogleIdentityServices` client, popup fallback, custom Google Cloud Client ID prompt handler, and automated JSON report upload to user's Drive.
- **`storage.js`**: LocalStorage evaluation records service (`psych_scale_records`) providing persistent history and score trend tracking.
- **`script.js` / `app.js`**: Main application controller handling SPA view switching (`showView`), scale search filtering, dynamic question rendering, subscale calculation, EMR SOAP note text generation, and keyboard shortcuts (`0–7` keys).
- **`style.css` / `styles.css`**: Enterprise Hospital Information System (HIS / EHR) CSS design system. Includes dark/light mode tokens, Bento grid styling, SVG radial progress gauge, touch-friendly 48px tap targets, and mobile breakpoints (`@media max-width: 768px`).
- **`push-to-github.bat`**: Windows batch helper script for easy 1-click execution of `git push origin main`.

---

## 📜 Chronological Activity & Change Log

### Phase 1: Core Rating Scale & UI Foundation
- Built Vanilla JS Single Page Application (SPA) architecture.
- Added foundational scales: **PANSS**, **YMRS**, **HAM-D**, **MMSE**, **C-SSRS**, **GAD-7**, **AIMS**.
- Implemented high-resolution native PDF export (`window.print()`).

### Phase 2: Scale Suite Expansion
- Added **MADRS**, **CIWA-Ar**, **COWS**, **Y-BOCS**, and **BFCRS** scales.
- Designed modern Bento-grid category layout with search filtering.

### Phase 3: Google Identity & Drive Auto-Sync Integration
- Built `drive-service.js` integrating Google OAuth 2.0 (`https://www.googleapis.com/auth/drive.file`).
- Implemented automatic backup of patient assessment evaluation reports directly to Google Drive upon completion.

### Phase 4: Full Clinical Scale Suite Completion (22 Scales)
- Expanded `scales.js` with 9 additional official scales: **BPRS**, **HAM-A**, **MoCA**, **ISAA**, **AUDIT**, **GSAQ**, **DASS-21**, **BARS**, and **PHQ-9**.
- Restored complete library to 21 scales.
- Split **C-SSRS** into two distinct clinical instruments: **C-SSRS (Lifetime / Baseline)** and **C-SSRS (Acute / Since Last Visit)**, bringing total scale count to 22.

### Phase 5: Hospital Information System (HIS / EHR) Integration & UI Redesign
- Added top **Patient Context Bar** featuring active Patient Name, MRN/UHID, Ward location, and interactive "Change Patient Context" modal.
- Added **Automated EMR SOAP Note Generator** formatting assessment results into copyable clinical entries for hospital electronic medical records.
- Refined color scheme to Navy (`#0F172A`), Slate (`#1E293B`), and Medical Cyan (`#0EA5E9`).

### Phase 6: Touch & Mobile Responsive Optimization
- Added mobile-first CSS media queries (`<= 768px`).
- Enforced 48px minimum touch targets for rating options on mobile devices.
- Created touch-swipeable horizontal category filter tags.

### Phase 7: Google OAuth Error 401 Repair & Client ID Configuration Handler
- Resolved `Error 401: invalid_client` by adding an interactive Client ID prompt when connecting Google Account.
- Configured local storage fallback and graceful error catching for domain-level Google OAuth authentication.

### Phase 8: Migration to Permanent Local Browser Storage
- Removed Google Drive sync options, buttons, and external OAuth scripts as requested by user.
- Enforced permanent browser `localStorage` storage for all completed patient evaluations under `psychiatry_assessment_patient_records`.
- Every saved record includes full timestamp, date, time, active Patient Name, MRN/UHID, Scale Name, Score, Severity, and detailed answers.
- Added 1-click **Export Backup (.json)** and **Import Backup** feature for easy local data migration.

### Phase 9: Operationalized Clinical Option Descriptions & Response Criteria
- Enriched all 22 rating scales in `scales.js` with comprehensive, operationalized clinical explanations for EVERY response option.
- Clinicians can read explicit diagnostic criteria (frequency, intensity, behavioral manifestation, and functional impact) directly under each option before making a selection.
- Updated option button UI (`script.js`, `app.js`, `style.css`) with clean 2-line layout (`.option-title-text` + `.option-desc-text`).

---

## 🤖 Instructions for Future AI Agents & Developers

When taking over this repository:

1. **Working Directory**: Always operate inside `C:\Projects\my-web-app`.
2. **Adding New Scales**: Define new scales in `C:\Projects\my-web-app\scales.js` following the standard schema (`id`, `name`, `fullName`, `category`, `description`, `questions`, `scoring`). Update the scale count badge in `index.html`.
3. **Syntax Validation**: Before committing, always run:
   ```cmd
   node -c scales.js script.js app.js drive-service.js storage.js
   ```
4. **Git Deployment Pipeline**:
   ```cmd
   git add .
   git commit -m "Description of changes"
   cmd.exe /c start push-to-github.bat
   ```
   Vercel automatically deploys commits pushed to the `main` branch on GitHub.
5. **Activity Log Maintenance**: Update this `ACTIVITY_LOG.md` file whenever making architectural modifications or adding new features so future AI assistants maintain seamless continuity.

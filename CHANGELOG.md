# Changelog

> **Instructions for AI agents:** Before making any changes, read this file to understand the project history. After completing your work, append a new entry at the bottom documenting what you did. Keep entries brief but specific (files changed, features added, data sources used).

## [1.0.0] - 2026-07-29

### Added
- **Project scaffold** — `index.html`, `style.css`, `script.js`, `scales.js`
- **PHQ-9** — 9-item depression screener with 0–3 scale, severity ranges, and treatment interpretation
- **GAD-7** — 7-item anxiety screener with 0–3 scale, severity ranges, and treatment interpretation
- **YMRS** — 11-item clinician-rated mania scale with per-question anchors, double-weighted items (0–8), and correct scoring (0–60)
- **Sidebar navigation** — Hamburger toggle, dark sidebar listing all scales under "Scales" section
- **Auto-advance** — Selecting an option automatically moves to next question with 150ms delay
- **Share button** — Uses Web Share API with clipboard fallback; formats text summary
- **Export PDF** — Uses html2pdf.js library; captures results content as A4 PDF
- **PANSS** — 30-item schizophrenia scale with 3 subscales (Positive 7–49, Negative 7–49, General 16–112), total score 30–210, full official anchor descriptions for every item and severity level
- **Subscale scoring** — Scales with `subscales` array auto-display individual subscale scores plus total in results (used by PANSS)
- **Results interpretation** — Severity label + guideline-based interpretation text per score range
- **CHANGELOG.md** — This file

### Changed
- **Project location** — Moved from `~/OneDrive/...` to `C:\Projects\my-web-app`
- **Data model** — Scales support shared options (PHQ-9/GAD-7), per-question options (YMRS), and subscales (PANSS)
- **UI redesign** — From centered card layout to full sidebar + main content layout with gradient accents

### Data Sources
- PHQ-9, GAD-7: Standard public domain questionnaires
- YMRS: Young et al. (1978) — Br J Psychiatry 133:429–435. Anchor descriptions from official scoring PDF
- PANSS: Kay, Fiszbein & Opler (1987) — Schizophr Bull 13(2):261–276. Anchor descriptions from official PANSS rating criteria. Severity thresholds from Leucht et al. (2005) CGI linkage

## [1.1.0] - 2026-07-29

### Added
- **HAM-D (17-item)** — Hamilton Depression Rating Scale with per-question anchor descriptions (items 1–3, 7–11, 15: 0–4; items 4–6, 12–14, 16–17: 0–2). Scoring 0–52 with 5 severity levels (Normal to Very Severe). Data source: Hamilton (1960) J Neurol Neurosurg Psychiatry 23:56–62.
- **HAM-A** — 14-item anxiety scale with shared 0–4 options and detailed symptom descriptors. Scoring 0–56 with 3 severity levels. Data source: Hamilton (1959) Br J Med Psychol 32:50–55.
- **MADRS** — 10-item depression scale with shared 0–6 options. Scoring 0–60 with 4 severity levels. Data source: Montgomery & Asberg (1979) Br J Psychiatry 134:382–389.
- **BPRS (18-item)** — Brief Psychiatric Rating Scale with shared 1–7 options. Scoring 18–126 with 6 severity levels. Data source: Overall & Gorham (1962) Psychol Rep 10:799–812.
- **CGI-S** — Clinical Global Impression — Severity (1-item, 1–7 scale). Data source: Guy (1976) ECDEU Assessment Manual.
- **CGI-I** — Clinical Global Impression — Improvement (1-item, 1–7 scale). Data source: Guy (1976) ECDEU Assessment Manual.
- **AUDIT** — 10-item alcohol screening with per-question options (items 1–8: 0–4; items 9–10: 0/2/4). Scoring 0–40 with 4 risk levels. Data source: WHO (2001) AUDIT Guidelines.

## [1.2.0] - 2026-07-29

### Added
- **MMSE** — 11 consolidated items (orientation time/place, registration, attention/calculation, recall, naming, repetition, 3-stage command, reading, writing, copying). Total 0–30 with 4 severity levels. Data source: Folstein, Folstein & McHugh (1975) J Psychiatr Res 12:189–198.
- **C-SSRS** — Columbia-Suicide Severity Rating Scale with full branching logic:
  - Screening: Q1 always, Q2 always, Q3–Q5 only if Q2=Yes
  - Intensity of Ideation (5 items): only if any Q1–Q5 endorsed (compound `any` condition)
  - Behavior: Q6–Q10 always; Q6a–Q6c only if Q6=Yes
  - Risk classification: Low / Moderate / High (color-coded badge)
  - Results display: narrative summary with endorsed/not-endorsed list, intensity table, risk badge
  - Data source: Posner et al. (2011) Am J Psychiatry 168:1266–1277.

### Changed
- **Removed**: PHQ-9, GAD-7, CGI-S, CGI-I (9 total scales remain in app)
- **`script.js`** — `evaluateCondition()` for `dependsOn` skip logic; `showQuestion()` skips questions whose conditions aren't met (pushes null); `sumAnswers()` filters nulls; `displayCSSRSResults()` for narrative risk summary; `getCSSRSResultsText()` for share/PDF text
- **`style.css`** — C-SSRS result styles: `.cssrs-list` (endorsed/not-endorsed), `.cssrs-table` (intensity), `.cssrs-risk-*` (color-coded badges: green/orange/yellow/red)

## [1.4.0] - 2026-07-29

### Changed
- **Results view** now includes full question-by-question answer breakdown with scores (rendered in `#answers-detail` between subscale cards and interpretation)
- **Share text** (`getResultsText()`, `getCSSRSResultsText()`) includes every question and the selected answer label with score
- **PDF export** captures the full detail automatically (html2pdf reads `#results-content`)
- **Skipped questions** (C-SSRS `dependsOn`) show "— Skipped" with reduced opacity
- **`index.html`** — added `#answers-detail` container
- **`style.css`** — added `.answers-section`, `.answers-list`, `.answer-item`, `.answer-badge` styles with print/PDF support

## [1.5.0] - 2026-07-29

### Changed
- **PDF export** completely rewritten:
  - Uses `html2pdf().outputPdf('blob')` for blob-based generation
  - Increased `scale: 3` for crisp rendering, explicit `scrollWidth/scrollHeight` capture
  - Added `pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }` for proper multi-page splitting
  - Temporarily removes max-width constraint during capture for full-width content
- **Share button** now shares PDF file via Web Share API (`navigator.share({ files })`) on supported browsers (mobile Chrome/Safari, Safari macOS 14+)
  - Falls back to: download PDF + copy results text to clipboard
  - Final fallback: share as text (original behavior)
- **`generatePdfBlob()`** shared function used by both Share and Export PDF
- **`downloadBlob()`** utility for reliable file download

## [1.6.0] - 2026-07-29

### Changed
- **Complete visual redesign** — 3D depth with layered shadows, subtle gradients, and perspective transforms:
  - `body`: radial gradient background for ambient depth
  - Cards (welcome, question, results, info): multi-layer `box-shadow` (small + medium + large) with hover elevation (`translateY`, scale)
  - Buttons: 3D pressed/raised states with inset shadows and active/pressed transforms
  - Sidebar: sliding panel with cubic-bezier easing, shadow border, hover translateX effect
  - Score value: `text-shadow` for 3D lettering, larger 48px size
  - Progress bar: `inset` shadow on track, gradient fill with glow
  - Option buttons: hover translateX(6px), active scale(0.99) press effect
  - Subscale cards: inset highlight + subtle shadow, hover lift
  - Answers table: bordered container with alternating row hover
  - Interpretation: left gradient accent bar via `::before` pseudo-element
  - All transitions: smooth cubic-bezier or ease, consistent 0.2–0.3s duration
  - Animations: `fadeInUp` (opacity + translateY) replaces plain fadeIn

## [1.3.0] - 2026-07-29

### Changed
- **Full black & white monochrome redesign** — all colors replaced with grayscale (#1a1a1a, #555, #888, #bbb, #f5f5f5, #fff)
  - Removed: gradient backgrounds (blue/purple), green/red/orange buttons, colored shadows, blue icons
  - Replaced with: clean B&W borders, black-on-white text, subtle gray backgrounds, black buttons
  - C-SSRS risk badges: color-coded B&W (light gray → darker gray → near black → inverted)
- **`style.css`** — Complete rewrite: organized section comments, consistent spacing, improved hierarchy, responsive breakpoints
- **`index.html`** — Cleaned up welcome message, updated version to v1.2.0, swapped colored icons for neutral ones

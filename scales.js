const scales = [
  {
    id: "ciwa-ar",
    name: "CIWA-Ar",
    fullName: "Clinical Institute Withdrawal Assessment for Alcohol, Revised",
    category: "substance",
    description: "10-item clinician-rated scale to evaluate severity of alcohol withdrawal syndrome and guide protocol-driven treatment.",
    estimatedTime: "3-5 min",
    questions: [
      {
        text: "1. Nausea and Vomiting\nAsk: 'Do you feel sick to your stomach? Have you vomited?' Observe patient.",
        options: [
          { label: "0 - No nausea and no vomiting", score: 0 },
          { label: "1 - Mild nausea with no vomiting", score: 1 },
          { label: "2 - Mild nausea", score: 2 },
          { label: "3 - Mild nausea", score: 3 },
          { label: "4 - Intermittent nausea with dry heaves", score: 4 },
          { label: "5 - Intermittent nausea", score: 5 },
          { label: "6 - Intermittent nausea", score: 6 },
          { label: "7 - Constant nausea, frequent dry heaves and vomiting", score: 7 }
        ]
      },
      {
        text: "2. Tremor\nAsk patient to extend arms and spread fingers. Observe.",
        options: [
          { label: "0 - No tremor", score: 0 },
          { label: "1 - Not visible, but can be felt fingertip to fingertip", score: 1 },
          { label: "2 - Mild tremor", score: 2 },
          { label: "3 - Mild tremor", score: 3 },
          { label: "4 - Moderate tremor with patient's arms extended", score: 4 },
          { label: "5 - Moderate tremor", score: 5 },
          { label: "6 - Moderate tremor", score: 6 },
          { label: "7 - Severe tremor, even with arms not extended", score: 7 }
        ]
      },
      {
        text: "3. Paroxysmal Sweats\nObserve patient's forehead and body for diaphoresis.",
        options: [
          { label: "0 - No sweat visible", score: 0 },
          { label: "1 - Barely perceptible sweating, palms moist", score: 1 },
          { label: "2 - Mild sweating", score: 2 },
          { label: "3 - Mild sweating", score: 3 },
          { label: "4 - Beads of sweat obvious on forehead", score: 4 },
          { label: "5 - Beads of sweat obvious", score: 5 },
          { label: "6 - Beads of sweat obvious", score: 6 },
          { label: "7 - Drenching sweats", score: 7 }
        ]
      },
      {
        text: "4. Anxiety\nAsk: 'Do you feel nervous?' Observe patient.",
        options: [
          { label: "0 - No anxiety, at ease", score: 0 },
          { label: "1 - Mildly anxious", score: 1 },
          { label: "2 - Mildly anxious", score: 2 },
          { label: "3 - Mildly anxious", score: 3 },
          { label: "4 - Moderately anxious or guarded, so anxiety is inferred", score: 4 },
          { label: "5 - Moderately anxious", score: 5 },
          { label: "6 - Moderately anxious", score: 6 },
          { label: "7 - Equivalent to acute panic state as seen in severe delirium", score: 7 }
        ]
      },
      {
        text: "5. Agitation\nObserve motor activity during interview.",
        options: [
          { label: "0 - Normal activity", score: 0 },
          { label: "1 - Somewhat more than normal activity", score: 1 },
          { label: "2 - Moderately fidgety and restless", score: 2 },
          { label: "3 - Moderately restless", score: 3 },
          { label: "4 - Moderately fidgety and restless", score: 4 },
          { label: "5 - Paces back and forth", score: 5 },
          { label: "6 - Paces during most of interview", score: 6 },
          { label: "7 - Paces constantly, thrashes about, or struggles against physical barriers", score: 7 }
        ]
      },
      {
        text: "6. Tactile Disturbances\nAsk: 'Do you have itching, pins/needles, numbness, or feeling bugs crawling on your skin?'",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Very mild itching, pins and needles, burning or numbness", score: 1 },
          { label: "2 - Mild itching, pins and needles, burning or numbness", score: 2 },
          { label: "3 - Moderate itching, pins and needles, burning or numbness", score: 3 },
          { label: "4 - Moderately severe hallucinations", score: 4 },
          { label: "5 - Severe hallucinations", score: 5 },
          { label: "6 - Extremely severe hallucinations", score: 6 },
          { label: "7 - Continuous tactile hallucinations", score: 7 }
        ]
      },
      {
        text: "7. Auditory Disturbances\nAsk: 'Are you more aware of harsh sounds? Do sounds hurt your ears? Do you hear things that aren't there?'",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Very mild harshness or ability to frighten", score: 1 },
          { label: "2 - Mild harshness or ability to frighten", score: 2 },
          { label: "3 - Moderate harshness or ability to frighten", score: 3 },
          { label: "4 - Moderately severe auditory hallucinations", score: 4 },
          { label: "5 - Severe auditory hallucinations", score: 5 },
          { label: "6 - Extremely severe auditory hallucinations", score: 6 },
          { label: "7 - Continuous auditory hallucinations", score: 7 }
        ]
      },
      {
        text: "8. Visual Disturbances\nAsk: 'Is light too bright? Are colors different? Are you seeing things that bother you or aren't there?'",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Very mild sensitivity to light", score: 1 },
          { label: "2 - Mild sensitivity to light", score: 2 },
          { label: "3 - Moderate sensitivity to light", score: 3 },
          { label: "4 - Moderately severe visual hallucinations", score: 4 },
          { label: "5 - Severe visual hallucinations", score: 5 },
          { label: "6 - Extremely severe visual hallucinations", score: 6 },
          { label: "7 - Continuous visual hallucinations", score: 7 }
        ]
      },
      {
        text: "9. Headache, Fullness in Head\nAsk: 'Does your head feel different? Does it feel like there is a band around your head?'",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Very mild", score: 1 },
          { label: "2 - Mild", score: 2 },
          { label: "3 - Moderate", score: 3 },
          { label: "4 - Moderately severe", score: 4 },
          { label: "5 - Severe", score: 5 },
          { label: "6 - Very severe", score: 6 },
          { label: "7 - Extremely severe", score: 7 }
        ]
      },
      {
        text: "10. Orientation and Clouding of Sensorium\nAsk: 'What day is this? Where are you? Who am I?'",
        options: [
          { label: "0 - Oriented and can do serial additions", score: 0 },
          { label: "1 - Cannot do serial additions or is uncertain about date", score: 1 },
          { label: "2 - Disoriented for date by no more than 2 calendar days", score: 2 },
          { label: "3 - Disoriented for date by more than 2 calendar days", score: 3 },
          { label: "4 - Disoriented for place and/or person", score: 4 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 67,
      ranges: [
        { min: 0, max: 9, severity: "Mild Withdrawal", interpretation: "Score < 10: Mild withdrawal. Minimal symptom-triggered pharmacotherapy required. Continue monitoring every 4-8 hours." },
        { min: 10, max: 15, severity: "Moderate Withdrawal", interpretation: "Score 10-15: Moderate withdrawal. Administer protocol-driven oral benzodiazepines (e.g., Diazepam 10-20mg or Lorazepam 2mg). Reassess hourly." },
        { min: 16, max: 67, severity: "Severe Withdrawal", interpretation: "Score >= 16: Severe withdrawal (High risk for Delirium Tremens & seizures). Frequent parenteral benzodiazepines, ICU monitoring, and supportive care indicated." }
      ]
    }
  },
  {
    id: "cows",
    name: "COWS",
    fullName: "Clinical Opiate Withdrawal Scale",
    description: "11-item clinician-rated instrument for assessing severity of opioid withdrawal symptoms during detoxification or buprenorphine induction.",
    category: "substance",
    estimatedTime: "3-5 min",
    questions: [
      {
        text: "1. Resting Pulse Rate\nMeasured after patient has been sitting or lying for 1 minute.",
        options: [
          { label: "0 - Pulse 80 or below", score: 0 },
          { label: "1 - Pulse 81 to 100", score: 1 },
          { label: "2 - Pulse 101 to 120", score: 2 },
          { label: "4 - Pulse greater than 120", score: 4 }
        ]
      },
      {
        text: "2. Sweating\nOver past 1/2 hour not accounted for by room temperature or patient activity.",
        options: [
          { label: "0 - No report of chills or sweating", score: 0 },
          { label: "1 - Subjective report of chills or flushing", score: 1 },
          { label: "2 - Flushed or observable moistness on face", score: 2 },
          { label: "3 - Beads of sweat on brow or face", score: 3 },
          { label: "4 - Sweat streaming off face", score: 4 }
        ]
      },
      {
        text: "3. Restlessness\nObserved during interview.",
        options: [
          { label: "0 - Able to sit still", score: 0 },
          { label: "1 - Reports difficulty sitting still, but is able to do so", score: 1 },
          { label: "3 - Frequent shifting or extraneous movements of legs/arms", score: 3 },
          { label: "5 - Unable to sit still for more than a few seconds", score: 5 }
        ]
      },
      {
        text: "4. Pupil Size",
        options: [
          { label: "0 - Pupils pinned or normal size for room light", score: 0 },
          { label: "1 - Pupils possibly larger than normal for room light", score: 1 },
          { label: "2 - Pupils moderately dilated", score: 2 },
          { label: "5 - Pupils extremely dilated that only a rim of iris is visible", score: 5 }
        ]
      },
      {
        text: "5. Bone or Joint Aches\nIf patient has baseline pain, rate only additional pain component.",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Mild diffuse bone or joint aches", score: 1 },
          { label: "2 - Patient reports severe diffuse aching of joints/muscles", score: 2 },
          { label: "4 - Patient is rubbing joints and unable to sit still because of pain", score: 4 }
        ]
      },
      {
        text: "6. Runny Nose or Tearing\nNot accounted for by cold symptoms or allergies.",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Nasal stuffiness or unusually moist eyes", score: 1 },
          { label: "2 - Nose running or tearing present", score: 2 },
          { label: "4 - Nose constantly running or tears streaming down cheeks", score: 4 }
        ]
      },
      {
        text: "7. GI Upset\nOver past 1/2 hour.",
        options: [
          { label: "0 - No GI symptoms", score: 0 },
          { label: "1 - Stomach cramps", score: 1 },
          { label: "2 - Nausea or loose stool", score: 2 },
          { label: "3 - Vomiting or diarrhea", score: 3 },
          { label: "5 - Multiple episodes of diarrhea or vomiting", score: 5 }
        ]
      },
      {
        text: "8. Tremor\nObserving outstretched hands.",
        options: [
          { label: "0 - No tremor", score: 0 },
          { label: "1 - Tremor can be felt but not seen", score: 1 },
          { label: "2 - Slight tremor observable", score: 2 },
          { label: "4 - Gross tremor or muscle twitching", score: 4 }
        ]
      },
      {
        text: "9. Yawning\nObserved during interview.",
        options: [
          { label: "0 - No yawning", score: 0 },
          { label: "1 - Yawning once or twice during interview", score: 1 },
          { label: "2 - Yawning three or more times during interview", score: 2 },
          { label: "4 - Yawning several times per minute", score: 4 }
        ]
      },
      {
        text: "10. Anxiety or Irritability",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Patient reports increasing irritability or anxiousness", score: 1 },
          { label: "2 - Patient obviously irritable or anxious", score: 2 },
          { label: "4 - Patient so irritable or anxious that participation in interview is difficult", score: 4 }
        ]
      },
      {
        text: "11. Gooseflesh Skin\nSkin piloerection observed on arms or chest.",
        options: [
          { label: "0 - Skin is smooth", score: 0 },
          { label: "3 - Piloerection felt or visible on skin", score: 3 },
          { label: "5 - Prominent piloerection (gooseflesh)", score: 5 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 48,
      ranges: [
        { min: 0, max: 4, severity: "Minimal Withdrawal", interpretation: "Score 0-4: Minimal withdrawal. Safe to monitor. Buprenorphine induction should NOT be started yet due to risk of precipitated withdrawal." },
        { min: 5, max: 12, severity: "Mild Withdrawal", interpretation: "Score 5-12: Mild withdrawal. Monitor closely. Re-assess COWS in 1-2 hours." },
        { min: 13, max: 24, severity: "Moderate Withdrawal", interpretation: "Score 13-24: Moderate withdrawal. Appropriate severity to safely initiate Buprenorphine induction (first dose typically 2-4mg)." },
        { min: 25, max: 36, severity: "Moderately Severe", interpretation: "Score 25-36: Moderately severe withdrawal. Initiate buprenorphine or symptomatic opioid withdrawal medication protocol immediately." },
        { min: 37, max: 48, severity: "Severe Withdrawal", interpretation: "Score > 36: Severe withdrawal. Requires aggressive medical management, hydration, and induction protocol." }
      ]
    }
  },
  {
    id: "ybocs",
    name: "Y-BOCS",
    fullName: "Yale-Brown Obsessive Compulsive Scale",
    description: "10-item clinician-rated gold standard scale for assessing OCD symptom severity (Obsession & Compulsion subscales).",
    category: "anxiety",
    estimatedTime: "10-15 min",
    subscales: [
      { id: "obsessions", name: "Obsessions Subscale", min: 0, max: 20 },
      { id: "compulsions", name: "Compulsions Subscale", min: 0, max: 20 }
    ],
    questions: [
      {
        text: "1. Time Spent on Obsessions\nHow much of your time is occupied by obsessive thoughts?",
        subscale: "obsessions",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Mild (less than 1 hr/day or occasional intrusion)", score: 1 },
          { label: "2 - Moderate (1 to 3 hrs/day or frequent intrusion)", score: 2 },
          { label: "3 - Severe (greater than 3 and up to 8 hrs/day or very frequent intrusion)", score: 3 },
          { label: "4 - Extreme (greater than 8 hrs/day or near constant intrusion)", score: 4 }
        ]
      },
      {
        text: "2. Interference Due to Obsessions\nHow much do your obsessive thoughts interfere with your social or work functioning?",
        subscale: "obsessions",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Mild: slight interference with social or occupational activities, but overall performance not impaired", score: 1 },
          { label: "2 - Moderate: definite interference with social or occupational performance, but still manageable", score: 2 },
          { label: "3 - Severe: causes substantial impairment in social or occupational performance", score: 3 },
          { label: "4 - Extreme: incapacitating", score: 4 }
        ]
      },
      {
        text: "3. Distress Associated with Obsessions\nHow much distress do your obsessive thoughts cause you?",
        subscale: "obsessions",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Mild: infrequent and not too disturbing", score: 1 },
          { label: "2 - Moderate: frequent and disturbing, but still manageable", score: 2 },
          { label: "3 - Severe: very frequent and very disturbing", score: 3 },
          { label: "4 - Extreme: near constant and disabling distress", score: 4 }
        ]
      },
      {
        text: "4. Resistance Against Obsessions\nHow much of an effort do you make to resist the obsessive thoughts?",
        subscale: "obsessions",
        options: [
          { label: "0 - Try to resist all the time", score: 0 },
          { label: "1 - Try to resist most of the time", score: 1 },
          { label: "2 - Make some effort to resist", score: 2 },
          { label: "3 - Yield to all obsessions without attempting to control them, but with some reluctance", score: 3 },
          { label: "4 - Completely and willingly yield to all obsessions", score: 4 }
        ]
      },
      {
        text: "5. Degree of Control Over Obsessions\nHow much control do you have over your obsessive thoughts?",
        subscale: "obsessions",
        options: [
          { label: "0 - Complete control", score: 0 },
          { label: "1 - Much control: usually able to stop or divert obsessions with some effort", score: 1 },
          { label: "2 - Moderate control: sometimes able to stop or divert obsessions", score: 2 },
          { label: "3 - Little control: rarely successful in stopping or dismissing obsessions", score: 3 },
          { label: "4 - No control: experienced as completely involuntary", score: 4 }
        ]
      },
      {
        text: "6. Time Spent Performing Compulsions\nHow much time do you spend performing compulsive behaviors?",
        subscale: "compulsions",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Mild (less than 1 hr/day or occasional performance)", score: 1 },
          { label: "2 - Moderate (1 to 3 hrs/day or frequent performance)", score: 2 },
          { label: "3 - Severe (greater than 3 and up to 8 hrs/day or very frequent performance)", score: 3 },
          { label: "4 - Extreme (greater than 8 hrs/day or near constant performance)", score: 4 }
        ]
      },
      {
        text: "7. Interference Due to Compulsions\nHow much do your compulsive behaviors interfere with your social or work functioning?",
        subscale: "compulsions",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Mild: slight interference, but overall performance not impaired", score: 1 },
          { label: "2 - Moderate: definite interference, but manageable", score: 2 },
          { label: "3 - Severe: substantial impairment in social or occupational performance", score: 3 },
          { label: "4 - Extreme: incapacitating", score: 4 }
        ]
      },
      {
        text: "8. Distress Associated with Compulsions\nHow would you feel if prevented from performing your compulsion(s)?",
        subscale: "compulsions",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Mild: only slight anxiety if compulsion prevented", score: 1 },
          { label: "2 - Moderate: anxiety would mount but remains manageable", score: 2 },
          { label: "3 - Severe: prominent and disturbing increase in anxiety", score: 3 },
          { label: "4 - Extreme: overwhelming anxiety from any intervention", score: 4 }
        ]
      },
      {
        text: "9. Resistance Against Compulsions\nHow much of an effort do you make to resist compulsions?",
        subscale: "compulsions",
        options: [
          { label: "0 - Try to resist all the time", score: 0 },
          { label: "1 - Try to resist most of the time", score: 1 },
          { label: "2 - Make some effort to resist", score: 2 },
          { label: "3 - Yield to almost all compulsions with reluctance", score: 3 },
          { label: "4 - Completely and willingly yield to all compulsions", score: 4 }
        ]
      },
      {
        text: "10. Degree of Control Over Compulsions\nHow strong is the drive to perform the compulsive behavior?",
        subscale: "compulsions",
        options: [
          { label: "0 - Complete control", score: 0 },
          { label: "1 - Much control: experienced as voluntary, able to delay or stop", score: 1 },
          { label: "2 - Moderate control: strong drive, but can control with effort", score: 2 },
          { label: "3 - Little control: very strong drive, must be carried to completion", score: 3 },
          { label: "4 - No control: drive feels involuntary and overwhelming", score: 4 }
        ]
      }
    ],
    scoring: {
      type: "subscale",
      totalRange: { min: 0, max: 40 },
      ranges: [
        { min: 0, max: 7, severity: "Subclinical OCD", interpretation: "Score 0-7: Subclinical OCD symptoms. No intensive pharmacotherapy needed." },
        { min: 8, max: 15, severity: "Mild OCD", interpretation: "Score 8-15: Mild OCD. First-line CBT with Exposure and Response Prevention (ERP) recommended; consider SSRI if ERP unavailable." },
        { min: 16, max: 23, severity: "Moderate OCD", interpretation: "Score 16-23: Moderate OCD. Initiate high-dose SSRI (e.g., Fluoxetine 40-80mg, Sertraline 200mg, or Fluvoxamine 200-300mg) combined with ERP." },
        { min: 24, max: 31, severity: "Severe OCD", interpretation: "Score 24-31: Severe OCD. Combination high-dose SSRI + ERP. Consider augmentation (Aripiprazole, Risperidone, or Clomipramine) if inadequate response." },
        { min: 32, max: 40, severity: "Extreme OCD", interpretation: "Score 32-40: Extreme, incapacitating OCD. Specialized intensive outpatient or inpatient residential treatment program indicated." }
      ]
    }
  },
  {
    id: "bfcrs",
    name: "BFCRS",
    fullName: "Bush-Francis Catatonia Rating Scale",
    description: "23-item clinician rating scale for diagnosing and assessing severity of catatonia (Items 1-14 serve as screening checklist).",
    category: "catatonia",
    estimatedTime: "8-12 min",
    questions: [
      {
        text: "1. Immobility / Stupor\nExtreme hypoactivity, immobile, unresponsive to stimuli.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Sits/lies unnaturally still, brief spontaneous movements", score: 1 },
          { label: "2 - Sits/lies immobile, very limited movement", score: 2 },
          { label: "3 - Completely stuporous, unmovable", score: 3 }
        ]
      },
      {
        text: "2. Mutism\nVerbally unresponsive or minimal speech.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Speaks inaudibly or minimal words", score: 1 },
          { label: "2 - Speaks fewer than 20 words per hour", score: 2 },
          { label: "3 - Completely mute", score: 3 }
        ]
      },
      {
        text: "3. Staring\nFixed gaze, little blinking, unmoving eyes.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Poor eye contact, fixed gaze for <20 seconds", score: 1 },
          { label: "2 - Gaze fixed for >20 seconds, minimal blinking", score: 2 },
          { label: "3 - Non-responsive staring, fixed gaze uninterrupted by movement", score: 3 }
        ]
      },
      {
        text: "4. Posturing / Catalepsy\nSpontaneous maintenance of posture against gravity.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Holds posture <1 minute", score: 1 },
          { label: "2 - Holds posture 1 to 15 minutes", score: 2 },
          { label: "3 - Holds bizarre posture >15 minutes", score: 3 }
        ]
      },
      {
        text: "5. Grimacing\nMaintenance of odd facial expressions.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Fleeting odd facial movements", score: 1 },
          { label: "2 - Holds odd facial expression <1 minute", score: 2 },
          { label: "3 - Holds bizarre facial expression >1 minute", score: 3 }
        ]
      },
      {
        text: "6. Echopraxia / Echolalia\nMimicking examiner's movements or speech.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Occasional or subtle copying", score: 1 },
          { label: "2 - Frequent copying", score: 2 },
          { label: "3 - Constant, compulsive copying", score: 3 }
        ]
      },
      {
        text: "7. Stereotypy\nRepetitive, non-goal-directed motor activity (e.g., body rocking).",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Occasional stereotyped movements", score: 1 },
          { label: "2 - Frequent stereotyped movements", score: 2 },
          { label: "3 - Constant motor stereotypy", score: 3 }
        ]
      },
      {
        text: "8. Mannerisms\nOdd, purposeful movements (e.g., exaggerated salute, walking on toes).",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Occasional mannerisms", score: 1 },
          { label: "2 - Frequent mannerisms", score: 2 },
          { label: "3 - Constant bizarre mannerisms", score: 3 }
        ]
      },
      {
        text: "9. Verbigeration\nRepetition of senseless phrases or words.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Occasional repetition", score: 1 },
          { label: "2 - Frequent repetition", score: 2 },
          { label: "3 - Constant continuous verbigeration", score: 3 }
        ]
      },
      {
        text: "10. Rigidity\nMaintenance of rigid posture despite attempts to move patient.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild resistance", score: 1 },
          { label: "2 - Moderate rigidity", score: 2 },
          { label: "3 - Severe rigidity, lead-pipe quality", score: 3 }
        ]
      },
      {
        text: "11. Negativism\nOpposition or resistance to instructions/movement without apparent motive.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild resistance / hesitation", score: 1 },
          { label: "2 - Moderate active opposition", score: 2 },
          { label: "3 - Severe, continuous opposition or does exact opposite", score: 3 }
        ]
      },
      {
        text: "12. Waxy Flexibility\nInitial resistance to positioning followed by yielding (like bending a candle).",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild plastic resistance", score: 1 },
          { label: "2 - Clear waxy flexibility", score: 2 },
          { label: "3 - Complete waxy flexibility in multiple limbs", score: 3 }
        ]
      },
      {
        text: "13. Withdrawal\nRefusal to eat, drink, or make eye contact.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Minimal eye contact or reluctant eating", score: 1 },
          { label: "2 - Avoids all eye contact, refuses food/water for 1 day", score: 2 },
          { label: "3 - Complete refusal of food and fluids >1 day", score: 3 }
        ]
      },
      {
        text: "14. Impulsivity\nSudden, inappropriate motor behavior without provocation.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Occasional impulsive act", score: 1 },
          { label: "2 - Frequent impulsive behavior", score: 2 },
          { label: "3 - Continuous violent or dangerous impulsive outbursts", score: 3 }
        ]
      },
      {
        text: "15. Automatic Obedience\nExaggerated compliance with trivial requests (e.g. sticking tongue out when examiner points needle).",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild automatic obedience", score: 1 },
          { label: "2 - Moderate automatic obedience", score: 2 },
          { label: "3 - Complete automatic obedience", score: 3 }
        ]
      },
      {
        text: "16. Mitgehen\n'Anglepoise lamp' phenomenon: moving limb with light pressure despite instruction to resist.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Light pressure moves arm slowly", score: 1 },
          { label: "2 - Arm moves easily with feather light pressure", score: 2 },
          { label: "3 - Limb yields instantly to any touch", score: 3 }
        ]
      },
      {
        text: "17. Gegenhalten\nInvoluntary resistance to passive movement equal in force to examiner's pressure.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild opposition", score: 1 },
          { label: "2 - Moderate opposition proportional to force", score: 2 },
          { label: "3 - Severe opposing force", score: 3 }
        ]
      },
      {
        text: "18. Ambendung\nPatient acts as if magnet is pulling them towards examiner.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Hesitant motor response", score: 1 },
          { label: "2 - Clear magnet-like motor attraction", score: 2 },
          { label: "3 - Compulsive physical movement towards examiner", score: 3 }
        ]
      },
      {
        text: "19. Perseveration\nRepeatedly returning to same topic or motor action.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Occasional motor or verbal repetition", score: 1 },
          { label: "2 - Frequent perseveration", score: 2 },
          { label: "3 - Constant perseveration", score: 3 }
        ]
      },
      {
        text: "20. Combativeness\nUnprovoked physical aggression.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Threatening gestures", score: 1 },
          { label: "2 - Striking objects or physical aggression", score: 2 },
          { label: "3 - Severe unprovoked assault", score: 3 }
        ]
      },
      {
        text: "21. Autonomic Abnormality\nTemperature >37.8°C, tachycardia >100, BP fluctuations, diaphoresis.",
        options: [
          { label: "0 - Normal vitals", score: 0 },
          { label: "1 - Abnormality in 1 vital sign", score: 1 },
          { label: "2 - Abnormality in 2 vital signs", score: 2 },
          { label: "3 - Abnormality in 3+ vital signs (Malignant Catatonia risk)", score: 3 }
        ]
      },
      {
        text: "22. Excitement\nExcessive non-goal-directed motor activity.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Hyperactive", score: 1 },
          { label: "2 - Extreme restlessness, pacing", score: 2 },
          { label: "3 - Continuous frantic motor excitement", score: 3 }
        ]
      },
      {
        text: "23. Grasp Reflex\nInvoluntary grasping of examiner's hand when palm stroked.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Weak grasp response", score: 1 },
          { label: "2 - Moderate grasp", score: 2 },
          { label: "3 - Uncontrollable forcible grasp reflex", score: 3 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 69,
      ranges: [
        { min: 0, max: 0, severity: "No Catatonia", interpretation: "Score 0: No catatonia features observed." },
        { min: 1, max: 7, severity: "Mild Catatonia", interpretation: "Score 1-7 (or >=2 positive screening items 1-14): Probable Catatonia. Perform Lorazepam challenge (1-2mg IV/IM). Monitor resolution within 30-60 mins." },
        { min: 8, max: 19, severity: "Moderate Catatonia", interpretation: "Score 8-19: Moderate Catatonia. Initiate Lorazepam trial (6-16mg/day divided doses). Evaluate underlying etiology (affective, psychotic, or medical)." },
        { min: 20, max: 69, severity: "Severe / Malignant Catatonia", interpretation: "Score >= 20 or Autonomic Instability: Severe/Malignant Catatonia. High risk for autonomic collapse. Emergency Lorazepam + Electroconvulsive Therapy (ECT) evaluation required immediately." }
      ]
    }
  },
  {
    id: "ymrs",
    name: "YMRS",
    fullName: "Young Mania Rating Scale",
    category: "mood",
    description: "11-item clinician-rated scale for evaluating manic symptom severity in bipolar disorder.",
    estimatedTime: "5-10 min",
    questions: [
      {
        text: "1. Elevated Mood",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mildly or possibly increased on questioning", score: 1 },
          { label: "2 - Definite subjective elevation; optimistic, self-confident; cheerful", score: 2 },
          { label: "3 - Elevated, inappropriate to content; humorous", score: 3 },
          { label: "4 - Euphoric; inappropriate laughter; singing", score: 4 }
        ]
      },
      {
        text: "2. Increased Motor Activity-Energy",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Subjectively increased", score: 1 },
          { label: "2 - Animated; gestures increased", score: 2 },
          { label: "3 - Excessive energy; hyperactive at times; restless", score: 3 },
          { label: "4 - Motor excitement; continuous hyperactivity", score: 4 }
        ]
      },
      {
        text: "3. Sexual Interest",
        options: [
          { label: "0 - Normal; not increased", score: 0 },
          { label: "1 - Mildly or possibly increased", score: 1 },
          { label: "2 - Definite subjective increase on questioning", score: 2 },
          { label: "3 - Spontaneous sexual content; hypersexual by report", score: 3 },
          { label: "4 - Overt sexual acts toward others", score: 4 }
        ]
      },
      {
        text: "4. Sleep",
        options: [
          { label: "0 - Reports no decrease in sleep", score: 0 },
          { label: "1 - Sleeping less than normal amount by up to 1 hour", score: 1 },
          { label: "2 - Sleeping less than normal by more than 1 hour", score: 2 },
          { label: "3 - Reports decreased need for sleep", score: 3 },
          { label: "4 - Denies need for sleep", score: 4 }
        ]
      },
      {
        text: "5. Irritability (double-weighted)",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "2 - Subjectively increased", score: 2 },
          { label: "4 - Irritable at times; recent anger episodes", score: 4 },
          { label: "6 - Frequently irritable; short, curt throughout interview", score: 6 },
          { label: "8 - Hostile, uncooperative; interview impossible", score: 8 }
        ]
      },
      {
        text: "6. Speech (Rate and Amount) (double-weighted)",
        options: [
          { label: "0 - No increase", score: 0 },
          { label: "2 - Feels talkative", score: 2 },
          { label: "4 - Increased rate or amount at times", score: 4 },
          { label: "6 - Push; consistently increased rate; difficult to interrupt", score: 6 },
          { label: "8 - Pressured; uninterruptible; continuous speech", score: 8 }
        ]
      },
      {
        text: "7. Language-Thought Disorder",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Circumstantial; mild distractibility; quick thoughts", score: 1 },
          { label: "2 - Distractible; loses goal of thought; racing thoughts", score: 2 },
          { label: "3 - Flight of ideas; tangentiality; rhyming, echolalia", score: 3 },
          { label: "4 - Incoherent; communication impossible", score: 4 }
        ]
      },
      {
        text: "8. Content (double-weighted)",
        options: [
          { label: "0 - Normal", score: 0 },
          { label: "2 - Questionable plans, new interests", score: 2 },
          { label: "4 - Special project(s); hyperreligious", score: 4 },
          { label: "6 - Grandiose or paranoid ideas; ideas of reference", score: 6 },
          { label: "8 - Delusions; hallucinations", score: 8 }
        ]
      },
      {
        text: "9. Disruptive-Aggressive Behavior (double-weighted)",
        options: [
          { label: "0 - Absent, cooperative", score: 0 },
          { label: "2 - Sarcastic; loud at times", score: 2 },
          { label: "4 - Demanding; threats on ward", score: 4 },
          { label: "6 - Threatens interviewer; shouting", score: 6 },
          { label: "8 - Assaultive; destructive; interview impossible", score: 8 }
        ]
      },
      {
        text: "10. Appearance",
        options: [
          { label: "0 - Appropriate dress and grooming", score: 0 },
          { label: "1 - Minimally unkempt", score: 1 },
          { label: "2 - Poorly groomed; overdressed", score: 2 },
          { label: "3 - Disheveled; partly clothed; garish make-up", score: 3 },
          { label: "4 - Completely unkempt; bizarre garb", score: 4 }
        ]
      },
      {
        text: "11. Insight",
        options: [
          { label: "0 - Present; admits illness; agrees with need for treatment", score: 0 },
          { label: "1 - Possibly ill", score: 1 },
          { label: "2 - Admits behavior change, but denies illness", score: 2 },
          { label: "3 - Admits possible change in behavior, but denies illness", score: 3 },
          { label: "4 - Denies any behavior change", score: 4 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 60,
      ranges: [
        { min: 0, max: 11, severity: "Remission", interpretation: "Score < 12: Euthymic / Remission. Continue maintenance mood stabilizer." },
        { min: 12, max: 19, severity: "Mild Mania", interpretation: "Score 12-19: Mild mania / Hypomania. Consider outpatient mood stabilizer titration." },
        { min: 20, max: 25, severity: "Moderate Mania", interpretation: "Score 20-25: Moderate mania. Intensify mood stabilizer + atypical antipsychotic therapy." },
        { min: 26, max: 60, severity: "Severe Mania", interpretation: "Score >= 26: Severe mania. Inpatient admission recommended. Dual therapy (Lithium/Valproate + Antipsychotic)." }
      ]
    }
  },
  {
    id: "panss",
    name: "PANSS",
    fullName: "Positive and Negative Syndrome Scale",
    category: "psychosis",
    description: "30-item comprehensive rating scale for schizophrenia (Positive, Negative, and General Psychopathology subscales).",
    estimatedTime: "15-20 min",
    subscales: [
      { id: "positive", name: "Positive Symptoms", min: 7, max: 49 },
      { id: "negative", name: "Negative Symptoms", min: 7, max: 49 },
      { id: "general", name: "General Psychopathology", min: 16, max: 112 }
    ],
    questions: [
      {
        text: "P1. Delusions\nBeliefs which are unfounded, unrealistic, and idiosyncratic.",
        subscale: "positive",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "P2. Conceptual Disorganization\nDisorganized thinking characterized by loosening of associations, tangentiality.",
        subscale: "positive",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "P3. Hallucinatory Behavior\nPerceptions not generated by external stimuli.",
        subscale: "positive",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "P4. Excitement\nHyperactivity, elevated mood, increased energy.",
        subscale: "positive",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "P5. Grandiosity\nExaggerated self-opinion, unrealistic beliefs of superiority.",
        subscale: "positive",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "P6. Suspiciousness / Persecution\nUnrealistic distrust or persecutory beliefs.",
        subscale: "positive",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "P7. Hostility\nVerbal or physical expressions of anger or aggression.",
        subscale: "positive",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "N1. Blunted Affect\nDiminished emotional responsiveness.",
        subscale: "negative",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "N2. Emotional Withdrawal\nLack of interest or involvement with interviewer.",
        subscale: "negative",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "N3. Poor Rapport\nLack of interpersonal connection or openness.",
        subscale: "negative",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "N4. Passive / Apathetic Social Withdrawal\nDiminished social interest and initiative.",
        subscale: "negative",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "N5. Difficulty in Abstract Thinking\nImpaired ability to use abstract concepts.",
        subscale: "negative",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "N6. Lack of Spontaneity & Flow of Conversation\nReduced normal flow of conversation.",
        subscale: "negative",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "N7. Stereotyped Thinking\nRigid, repetitive thought content.",
        subscale: "negative",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G1. Somatic Concern\nPreoccupation with physical health.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G2. Anxiety\nNervousness, worry, or apprehension.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G3. Guilt Feelings\nRemorse or self-blame.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G4. Tension\nObservable motor tension or restlessness.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G5. Mannerisms & Posturing\nBizarre movements or postures.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G6. Depression\nSadness, hopelessness, pessimism.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G7. Motor Retardation\nSlowing of movements and speech.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G8. Uncooperativeness\nActive refusal to comply with requests.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G9. Unusual Thought Content\nStrange or bizarre delusional thinking.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G10. Disorientation\nConfusion about person, place, or time.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G11. Poor Attention\nDifficulty focusing or sustaining attention.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G12. Lack of Judgment & Insight\nImpaired awareness of psychiatric condition.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G13. Disturbance of Volition\nImpaired ability to initiate goal-directed activity.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G14. Poor Impulse Control\nDifficulty regulating impulses.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G15. Preoccupation\nExcessive focus on internal thoughts.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      },
      {
        text: "G16. Active Social Avoidance\nAvoiding social contact due to fear/suspiciousness.",
        subscale: "general",
        options: [
          { label: "1 - Absent", score: 1 },
          { label: "2 - Minimal", score: 2 },
          { label: "3 - Mild", score: 3 },
          { label: "4 - Moderate", score: 4 },
          { label: "5 - Moderate-Severe", score: 5 },
          { label: "6 - Severe", score: 6 },
          { label: "7 - Extreme", score: 7 }
        ]
      }
    ],
    scoring: {
      type: "subscale",
      totalRange: { min: 30, max: 210 },
      ranges: [
        { min: 30, max: 57, severity: "Mild Psychopathology", interpretation: "CGI: Mildly ill. Continue antipsychotic maintenance." },
        { min: 58, max: 74, severity: "Mild to Moderate", interpretation: "CGI: Moderately ill. Assess medication adherence & dosage optimization." },
        { min: 75, max: 94, severity: "Moderate Psychopathology", interpretation: "CGI: Markedly ill. Consider switching or augmenting antipsychotic." },
        { min: 95, max: 115, severity: "Marked Psychopathology", interpretation: "CGI: Severely ill. Intensive inpatient care indicated." },
        { min: 116, max: 210, severity: "Severe Psychopathology", interpretation: "CGI: Among the most extremely ill. Consider Clozapine if treatment resistant." }
      ]
    }
  },
  {
    id: "hamd17",
    name: "HAM-D (17)",
    fullName: "Hamilton Depression Rating Scale",
    category: "mood",
    description: "17-item clinician-rated gold standard scale for depression severity.",
    estimatedTime: "8-12 min",
    questions: [
      {
        text: "1. Depressed Mood\nGloomy attitude, pessimism, hopelessness, worthlessness.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Expressed only on questioning", score: 1 },
          { label: "2 - Spontaneously reports depressed mood", score: 2 },
          { label: "3 - Communicates nonverbally (posture, crying)", score: 3 },
          { label: "4 - Overwhelming despair / exclusively nonverbal", score: 4 }
        ]
      },
      {
        text: "2. Feelings of Guilt",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Self-reproach", score: 1 },
          { label: "2 - Ideas of guilt over past errors", score: 2 },
          { label: "3 - Present illness is punishment; guilt delusions", score: 3 },
          { label: "4 - Accusatory auditory or visual hallucinations", score: 4 }
        ]
      },
      {
        text: "3. Suicide",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Feels life is not worth living", score: 1 },
          { label: "2 - Wishes to be dead", score: 2 },
          { label: "3 - Suicidal ideas or gestures", score: 3 },
          { label: "4 - Serious suicide attempt", score: 4 }
        ]
      },
      {
        text: "4. Insomnia — Early\nDifficulty falling asleep.",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Occasional difficulty (>30 mins)", score: 1 },
          { label: "2 - Nightly difficulty falling asleep", score: 2 }
        ]
      },
      {
        text: "5. Insomnia — Middle\nWaking during the night.",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Restlessness / waking during night", score: 1 },
          { label: "2 - Waking during night, getting out of bed", score: 2 }
        ]
      },
      {
        text: "6. Insomnia — Late\nEarly morning awakening.",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Early waking but falls asleep again", score: 1 },
          { label: "2 - Unable to fall asleep again", score: 2 }
        ]
      },
      {
        text: "7. Work and Activities",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Feelings of incapacity related to work", score: 1 },
          { label: "2 - Loss of interest in hobbies", score: 2 },
          { label: "3 - Decreased productivity", score: 3 },
          { label: "4 - Stopped working due to illness", score: 4 }
        ]
      },
      {
        text: "8. Retardation (Slowness of thought and speech)",
        options: [
          { label: "0 - Normal speech/thought", score: 0 },
          { label: "1 - Slight retardation at interview", score: 1 },
          { label: "2 - Obvious retardation at interview", score: 2 },
          { label: "3 - Marked retardation", score: 3 },
          { label: "4 - Complete stupor", score: 4 }
        ]
      },
      {
        text: "9. Agitation",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Fidgetiness", score: 1 },
          { label: "2 - Playing with hands/hair", score: 2 },
          { label: "3 - Moving about, cannot sit still", score: 3 },
          { label: "4 - Hand wringing, nail biting", score: 4 }
        ]
      },
      {
        text: "10. Anxiety — Psychic",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Subjective tension/irritability", score: 1 },
          { label: "2 - Worrying about minor matters", score: 2 },
          { label: "3 - Apprehensive attitude", score: 3 },
          { label: "4 - Overwhelming panic", score: 4 }
        ]
      },
      {
        text: "11. Anxiety — Somatic (Autonomic symptoms)",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild", score: 1 },
          { label: "2 - Moderate", score: 2 },
          { label: "3 - Severe", score: 3 },
          { label: "4 - Incapacitating", score: 4 }
        ]
      },
      {
        text: "12. Somatic Symptoms — GI",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Loss of appetite", score: 1 },
          { label: "2 - Difficulty eating without persuasion / laxative use", score: 2 }
        ]
      },
      {
        text: "13. General Somatic Symptoms (Aches, fatigue)",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Mild heaviness in limbs/head", score: 1 },
          { label: "2 - Severe muscle aches or fatigue", score: 2 }
        ]
      },
      {
        text: "14. Genital Symptoms (Loss of libido)",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild loss of interest", score: 1 },
          { label: "2 - Severe loss of libido", score: 2 }
        ]
      },
      {
        text: "15. Hypochondriasis",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Bodily self-absorption", score: 1 },
          { label: "2 - Preoccupation with health", score: 2 },
          { label: "3 - Frequent complaints", score: 3 },
          { label: "4 - Hypochondriacal delusions", score: 4 }
        ]
      },
      {
        text: "16. Loss of Weight",
        options: [
          { label: "0 - No weight loss", score: 0 },
          { label: "1 - Probable weight loss", score: 1 },
          { label: "2 - Definite weight loss", score: 2 }
        ]
      },
      {
        text: "17. Insight",
        options: [
          { label: "0 - Acknowledges illness", score: 0 },
          { label: "1 - Attributes illness to overwork/virus", score: 1 },
          { label: "2 - Denies being ill", score: 2 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 52,
      ranges: [
        { min: 0, max: 7, severity: "Normal", interpretation: "Score 0-7: Normal mood, no clinical depression." },
        { min: 8, max: 13, severity: "Mild Depression", interpretation: "Score 8-13: Mild depression. Consider psychotherapy." },
        { min: 14, max: 18, severity: "Moderate Depression", interpretation: "Score 14-18: Moderate depression. Initiate SSRI/SNRI antidepressant." },
        { min: 19, max: 22, severity: "Severe Depression", interpretation: "Score 19-22: Severe depression. Optimize antidepressant or consider dual action/augmentation." },
        { min: 23, max: 52, severity: "Very Severe", interpretation: "Score >= 23: Very severe depression. Evaluate for ECT and inpatient safety." }
      ]
    }
  },
  {
    id: "cssrs",
    name: "C-SSRS",
    fullName: "Columbia-Suicide Severity Rating Scale",
    category: "suicide",
    description: "Evaluates suicidal ideation and behavior with dynamic branching logic to gauge immediate emergency risk.",
    estimatedTime: "3-6 min",
    questions: [
      {
        text: "1. Wish to be Dead\nHas patient wished they were dead or wished to go to sleep and not wake up?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "2. Non-Specific Active Suicidal Thoughts\nHas patient had any thoughts of killing themselves?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "3. Active Ideation with Methods\nHas patient thought of methods/ways to kill themselves? (Shown if Q2 = Yes)",
        dependsOn: { question: 1, value: 1 },
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "4. Active Ideation with Some Intent\nHas patient had thoughts with intent to act? (Shown if Q2 = Yes)",
        dependsOn: { question: 1, value: 1 },
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "5. Active Ideation with Specific Plan\nHas patient thought of a specific plan & intent? (Shown if Q2 = Yes)",
        dependsOn: { question: 1, value: 1 },
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "6. Actual Attempt\nHas patient made an actual suicide attempt?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "7. Non-Suicidal Self-Injury\nSelf-injury without any intent to die?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "8. Interrupted Attempt\nStarted attempt but interrupted by external circumstance?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "9. Aborted Attempt\nStarted attempt but stopped themselves before act?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "10. Preparatory Acts\nTaken steps like gathering pills, writing a note, giving away possessions?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      }
    ],
    scoring: {
      type: "cssrs",
      ranges: [
        { min: 0, max: 0, severity: "No Suicidal Ideation", interpretation: "No suicidal ideation or behavior reported." },
        { min: 1, max: 5, severity: "Low Risk", interpretation: "Passive suicidal ideation only. Provide supportive counseling and safety plan." },
        { min: 6, max: 49, severity: "Moderate Risk", interpretation: "Active suicidal ideation. Urgently establish safety plan, remove lethal means, schedule early follow-up." },
        { min: 50, max: 99, severity: "High Risk - Emergency", interpretation: "Suicidal behavior present. Psychiatric Emergency. Immediate inpatient safety evaluation required." }
      ]
    }
  },
  {
    id: "phq9",
    name: "PHQ-9",
    fullName: "Patient Health Questionnaire-9",
    category: "mood",
    description: "9-item self-report / clinician screening tool for major depressive disorder.",
    estimatedTime: "2-4 min",
    options: [
      { label: "0 - Not at all", score: 0 },
      { label: "1 - Several days", score: 1 },
      { label: "2 - More than half the days", score: 2 },
      { label: "3 - Nearly every day", score: 3 }
    ],
    questions: [
      "1. Little interest or pleasure in doing things",
      "2. Feeling down, depressed, or hopeless",
      "3. Trouble falling or staying asleep, or sleeping too much",
      "4. Feeling tired or having little energy",
      "5. Poor appetite or overeating",
      "6. Feeling bad about yourself — or that you are a failure",
      "7. Trouble concentrating on things, such as reading or TV",
      "8. Moving or speaking so slowly that others could have noticed",
      "9. Thoughts that you would be better off dead or of hurting yourself"
    ],
    scoring: {
      type: "total",
      maxScore: 27,
      ranges: [
        { min: 0, max: 4, severity: "Minimal Depression", interpretation: "Score 0-4: Minimal depression. No treatment required." },
        { min: 5, max: 9, severity: "Mild Depression", interpretation: "Score 5-9: Mild depression. Watchful waiting; repeat PHQ-9 at follow-up." },
        { min: 10, max: 14, severity: "Moderate Depression", interpretation: "Score 10-14: Moderate depression. Consider psychotherapy or pharmacotherapy." },
        { min: 15, max: 19, severity: "Moderately Severe", interpretation: "Score 15-19: Moderately severe depression. Initiate antidepressant and/or psychotherapy." },
        { min: 20, max: 27, severity: "Severe Depression", interpretation: "Score 20-27: Severe depression. Initiate antidepressant medication and immediate mental health referral." }
      ]
    }
  },
  {
    id: "gad7",
    name: "GAD-7",
    fullName: "Generalized Anxiety Disorder 7-Item Scale",
    category: "anxiety",
    description: "7-item screening tool for generalized anxiety disorder severity.",
    estimatedTime: "2-3 min",
    options: [
      { label: "0 - Not at all", score: 0 },
      { label: "1 - Several days", score: 1 },
      { label: "2 - More than half the days", score: 2 },
      { label: "3 - Nearly every day", score: 3 }
    ],
    questions: [
      "1. Feeling nervous, anxious, or on edge",
      "2. Not being able to stop or control worrying",
      "3. Worrying too much about different things",
      "4. Trouble relaxing",
      "5. Being so restless that it is hard to sit still",
      "6. Becoming easily annoyed or irritable",
      "7. Feeling afraid as if something awful might happen"
    ],
    scoring: {
      type: "total",
      maxScore: 21,
      ranges: [
        { min: 0, max: 4, severity: "Minimal Anxiety", interpretation: "Score 0-4: Minimal anxiety." },
        { min: 5, max: 9, severity: "Mild Anxiety", interpretation: "Score 5-9: Mild anxiety. Psychoeducation & relaxation exercises." },
        { min: 10, max: 14, severity: "Moderate Anxiety", interpretation: "Score 10-14: Moderate anxiety. Evaluate for GAD; consider CBT or SSRI/SNRI." },
        { min: 15, max: 21, severity: "Severe Anxiety", interpretation: "Score 15-21: Severe anxiety. Pharmacotherapy and CBT indicated." }
      ]
    }
  },
  {
    id: "mmse",
    name: "MMSE",
    fullName: "Mini-Mental State Examination",
    category: "cognitive",
    description: "11-item cognitive screening test for orientation, memory, attention, and visual construction.",
    estimatedTime: "7-10 min",
    questions: [
      {
        text: "1. Orientation to Time (Year, Season, Month, Date, Day)",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 },
          { label: "3 correct", score: 3 },
          { label: "4 correct", score: 4 },
          { label: "5 correct", score: 5 }
        ]
      },
      {
        text: "2. Orientation to Place (Country, State, City, Hospital, Floor)",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 },
          { label: "3 correct", score: 3 },
          { label: "4 correct", score: 4 },
          { label: "5 correct", score: 5 }
        ]
      },
      {
        text: "3. Registration (Name 3 objects: Apple, Table, Penny)",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 },
          { label: "3 correct", score: 3 }
        ]
      },
      {
        text: "4. Attention & Calculation (Serial 7s from 100 or Spell WORLD backwards)",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 },
          { label: "3 correct", score: 3 },
          { label: "4 correct", score: 4 },
          { label: "5 correct", score: 5 }
        ]
      },
      {
        text: "5. Recall (3 objects from Q3)",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 },
          { label: "3 correct", score: 3 }
        ]
      },
      {
        text: "6. Naming (Pencil and Watch)",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 }
        ]
      },
      {
        text: "7. Repetition ('No ifs, ands, or buts')",
        options: [
          { label: "0 - Incorrect", score: 0 },
          { label: "1 - Correct", score: 1 }
        ]
      },
      {
        text: "8. 3-Stage Command (Take paper in right hand, fold in half, put on floor)",
        options: [
          { label: "0 steps correct", score: 0 },
          { label: "1 step correct", score: 1 },
          { label: "2 steps correct", score: 2 },
          { label: "3 steps correct", score: 3 }
        ]
      },
      {
        text: "9. Reading (Read and obey 'Close your eyes')",
        options: [
          { label: "0 - Does not obey", score: 0 },
          { label: "1 - Closes eyes", score: 1 }
        ]
      },
      {
        text: "10. Writing (Write a complete sentence)",
        options: [
          { label: "0 - No sentence", score: 0 },
          { label: "1 - Meaningful sentence", score: 1 }
        ]
      },
      {
        text: "11. Visuospatial Copying (Copy intersecting pentagons)",
        options: [
          { label: "0 - Incorrect copy", score: 0 },
          { label: "1 - Correct copy", score: 1 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 30,
      ranges: [
        { min: 24, max: 30, severity: "Normal Cognition", interpretation: "Score 24-30: Normal cognition." },
        { min: 18, max: 23, severity: "Mild Cognitive Impairment", interpretation: "Score 18-23: Mild cognitive impairment. Screen for underlying dementia or delirium." },
        { min: 10, max: 17, severity: "Moderate Impairment", interpretation: "Score 10-17: Moderate cognitive impairment. Dementia workup indicated." },
        { min: 0, max: 9, severity: "Severe Impairment", interpretation: "Score 0-9: Severe cognitive impairment." }
      ]
    }
  },
  {
    id: "aims",
    name: "AIMS",
    fullName: "Abnormal Involuntary Movement Scale",
    category: "catatonia",
    description: "12-item clinician rating scale to detect and track Tardive Dyskinesia in patients taking antipsychotics.",
    estimatedTime: "5-8 min",
    options: [
      { label: "0 - None", score: 0 },
      { label: "1 - Minimal / Normal extreme", score: 1 },
      { label: "2 - Mild", score: 2 },
      { label: "3 - Moderate", score: 3 },
      { label: "4 - Severe", score: 4 }
    ],
    questions: [
      "1. Facial and Oral Movements: Muscles of facial expression (pouting, smacking, puckering)",
      "2. Lips and Perioral Area (puckering, pouting, smacking)",
      "3. Jaw (biting, clenching, chewing, mouth opening)",
      "4. Tongue (darting, protrusion, tremor)",
      "5. Extremity Movements: Upper (arms, wrists, hands, fingers)",
      "6. Lower Extremities (legs, knees, ankles, toes, foot tapping)",
      "7. Trunk Movements (neck, shoulders, hips, rocking, gyrating)",
      "8. Global Severity of Abnormal Movements",
      "9. Incapacitation Due to Abnormal Movements",
      "10. Patient's Awareness of Movements"
    ],
    scoring: {
      type: "total",
      maxScore: 40,
      ranges: [
        { min: 0, max: 1, severity: "No Tardive Dyskinesia", interpretation: "No abnormal movements detected." },
        { min: 2, max: 15, severity: "Mild / Suspected TD", interpretation: "Mild dyskinesia in >=2 body areas or moderate in 1 area. Meets diagnostic criteria for Tardive Dyskinesia. Consider VMAT2 inhibitor (Valbenazine / Deutetrabenazine) or switching to Clozapine/Quetiapine." },
        { min: 16, max: 40, severity: "Moderate-Severe TD", interpretation: "Moderate to severe Tardive Dyskinesia. Initiate VMAT2 inhibitor treatment; reassess antipsychotic requirement." }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = scales;
}

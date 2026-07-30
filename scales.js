const scales = [
  {
    id: "panss",
    name: "PANSS",
    fullName: "Positive and Negative Syndrome Scale",
    category: "psychosis",
    description: "30-item clinician-rated instrument for operationalized assessment of schizophrenia symptoms across Positive, Negative, and General Psychopathology subscales.",
    estimatedTime: "30-45 min",
    options: [
      { label: "1 - Absent - Definition does not apply; symptom is completely absent or not present." },
      { label: "2 - Minimal - Questionable or subtle pathology; may be at the upper limit of normal behavior." },
      { label: "3 - Mild - Symptom is present and produces mild disruption or distress, but without significant impairment in daily social or occupational functioning." },
      { label: "4 - Moderate - Symptom is clearly present and causes noticeable interference with daily social, occupational, or personal functioning." },
      { label: "5 - Moderate Severe - Symptom exerts a serious disruption on functioning; requires close clinical supervision and medication adjustment." },
      { label: "6 - Severe - Symptom dominates patient's life, severely limits functional capacity, and requires intensive inpatient intervention." },
      { label: "7 - Extreme - Grossly severe manifestation; patient is completely incapacitated, unresponsive, or requires continuous emergency containment." }
    ],
    subscales: [
      { id: "positive", name: "Positive Scale (P1-P7)", min: 7, max: 49 },
      { id: "negative", name: "Negative Scale (N1-N7)", min: 7, max: 49 },
      { id: "general", name: "General Psychopathology (G1-G16)", min: 16, max: 112 }
    ],
    questions: [
      { text: "P1. Delusions\nBeliefs unsupported by reality, ungrounded in fact, and impervious to logical counter-argument.", subscale: "positive" },
      { text: "P2. Conceptual Disorganization\nDisorganized thought processes characterized by looseness of associations, tangentiality, circumstantiality, or incoherence.", subscale: "positive" },
      { text: "P3. Hallucinatory Behavior\nPerceptual experiences without external stimuli in any sensory modality (auditory, visual, olfactory, gustatory, or tactile).", subscale: "positive" },
      { text: "P4. Excitement\nHyper-reactivity, motor agitation, heightened emotional arousal, or instability of affect.", subscale: "positive" },
      { text: "P5. Grandiosity\nExaggerated self-opinion, inflated sense of power, wealth, knowledge, or special connection to higher powers.", subscale: "positive" },
      { text: "P6. Suspiciousness / Persecution\nUnfounded beliefs that others harbor malevolent intentions, are spying on, or intend physical or psychological harm.", subscale: "positive" },
      { text: "P7. Hostility\nOvert expressions of anger, animosity, resentment, verbal abuse, or physical aggression.", subscale: "positive" },
      { text: "N1. Blunted Affect\nDiminished emotional expressiveness, reduced facial reactivity, monotone voice, and lack of spontaneous gestures.", subscale: "negative" },
      { text: "N2. Emotional Withdrawal\nLack of interest, empathy, or involvement in social interactions and emotional detachment from others.", subscale: "negative" },
      { text: "N3. Poor Rapport\nLack of interpersonal openness, warmth, empathy, or rapport during clinical interview.", subscale: "negative" },
      { text: "N4. Passive / Apathetic Social Withdrawal\nDiminished social drive, loss of interest in hobbies and social relationships, leading to isolation.", subscale: "negative" },
      { text: "N5. Difficulty in Abstract Thinking\nImpairment in abstract reasoning, concrete interpretation of proverbs, and difficulty forming categories.", subscale: "negative" },
      { text: "N6. Lack of Spontaneity and Flow of Conversation\nReduced fluidity of dialogue, delayed response latency, and brief, poverty-of-speech answers.", subscale: "negative" },
      { text: "N7. Stereotyped Thinking\nRepetitive, rigid, or restricted thought content, perseveration on single topics or themes.", subscale: "negative" },
      { text: "G1. Somatic Concern\nExcessive concern, preoccupation, or fears regarding bodily health or physical illness.", subscale: "general" },
      { text: "G2. Anxiety\nNervousness, apprehension, worry, or physiological symptoms of autonomic arousal.", subscale: "general" },
      { text: "G3. Guilt Feelings\nOver-concern, self-blame, or remorse for real or imagined past misdeeds or moral failures.", subscale: "general" },
      { text: "G4. Tension\nObservable physical manifestations of nervous tension, restlessness, trembling, or muscle tightness.", subscale: "general" },
      { text: "G5. Mannerisms and Posturing\nOdd, unnatural, stilted, or bizarre motor mannerisms, gestures, or maintained postures.", subscale: "general" },
      { text: "G6. Depression\nSubjective feelings of sadness, despondency, helplessness, or hopelessness about the future.", subscale: "general" },
      { text: "G7. Motor Retardation\nObservable slowing of physical movement, speech rate, and motor reactivity.", subscale: "general" },
      { text: "G8. Uncooperativeness\nActive refusal, hostility, or stubborn resistance during evaluation or medical care.", subscale: "general" },
      { text: "G9. Unusual Thought Content\nAbsurd, bizarre, idiosyncratic, or non-delusional strange ideas.", subscale: "general" },
      { text: "G10. Disorientation\nConfusion regarding orientation to time, place, or person during assessment.", subscale: "general" },
      { text: "G11. Poor Attention\nDistractibility, inability to sustain focus, or impaired cognitive processing speed.", subscale: "general" },
      { text: "G12. Lack of Judgment and Insight\nUnawareness of psychiatric illness, denial of need for treatment, or poor realistic planning.", subscale: "general" },
      { text: "G13. Disturbance of Volition\nImpairment in initiation, motivation, and sustained execution of goal-directed actions.", subscale: "general" },
      { text: "G14. Poor Impulse Control\nDisinhibited expression of aggressive, sexual, or erratic urges without regard for consequences.", subscale: "general" },
      { text: "G15. Preoccupation\nAbsorption with internal thoughts, fantasies, or autistic worries to the exclusion of external reality.", subscale: "general" },
      { text: "G16. Active Social Avoidance\nUnwillingness to engage with others due to suspiciousness, paranoid fear, or social anxiety.", subscale: "general" }
    ],
    scoring: {
      type: "total",
      maxScore: 210,
      ranges: [
        { min: 30, max: 58, severity: "Mild / Remission", interpretation: "Score 30-58: Minimal to mild illness. Maintain low-dose antipsychotic regimen and psychosocial support." },
        { min: 59, max: 75, severity: "Moderate Psychosis", interpretation: "Score 59-75: Moderate symptom severity. Adjust antipsychotic therapy and address specific subscale elevations." },
        { min: 76, max: 95, severity: "Marked Psychosis", interpretation: "Score 76-95: Marked symptom severity. Optimize medication dosing, consider Clozapine if treatment-resistant." },
        { min: 96, max: 210, severity: "Severe Psychosis", interpretation: "Score 96+: Severe psychotic exacerbation. Inpatient stabilization, intensive nursing supervision, and emergency pharmacotherapy." }
      ]
    }
  },
  {
    id: "ymrs",
    name: "YMRS",
    fullName: "Young Mania Rating Scale",
    category: "mood",
    description: "11-item clinician-rated instrument assessing core manic symptoms based on patient report and behavioral observation during interview.",
    estimatedTime: "15-20 min",
    questions: [
      {
        text: "1. Elevated Mood\nEvaluates patient's subjective affect and observed mood elevation during the interview.",
        options: [
          { label: "0 - Absent - Normal mood; no elevation, euphoria, or grandiosity observed or reported.", score: 0 },
          { label: "1 - Mild / Possible Elevation - Mildly or possibly elevated mood; optimistic, cheerful, self-confident above baseline.", score: 1 },
          { label: "2 - Definite Elevation - Definite subjective elevation; highly optimistic, self-confident; noticeably cheerful.", score: 2 },
          { label: "3 - Inappropriate Elevation - Elevated mood, inappropriate to context; excessively humorous or grandiose.", score: 3 },
          { label: "4 - Euphoric - Euphoric; inappropriate laughter, singing, or excessive elation.", score: 4 }
        ]
      },
      {
        text: "2. Increased Motor Activity-Energy\nEvaluates motor restlessness, pacing, gestures, and overall physical energy level.",
        options: [
          { label: "0 - Normal - Motor activity and energy level within normal baseline range.", score: 0 },
          { label: "1 - Mild Increase - Subjectively increased energy; slightly more animated.", score: 1 },
          { label: "2 - Animated - Visibly animated; increased hand gestures and rapid movements.", score: 2 },
          { label: "3 - Excessive Energy - Excessive energy; hyperactive at times; restless, shifts in seat frequently.", score: 3 },
          { label: "4 - Motor Excitement - Continuous hyperactivity, pacing, unable to remain seated; motor excitement.", score: 4 }
        ]
      },
      {
        text: "3. Sexual Interest\nEvaluates increase in sexual thoughts, preoccupations, or overt hypersexual conduct.",
        options: [
          { label: "0 - Normal - Sexual interest normal or unchanged from baseline.", score: 0 },
          { label: "1 - Mild Increase - Mildly or possibly increased sexual interest on questioning.", score: 1 },
          { label: "2 - Definite Increase - Definite subjective increase in sexual drive or preoccupation.", score: 2 },
          { label: "3 - Hypersexual - Spontaneous conversation about sexual topics; hypersexual behavior.", score: 3 },
          { label: "4 - Overt Hypersexuality - Overt sexual acts, advances, or sexual comments directed towards staff or patients.", score: 4 }
        ]
      },
      {
        text: "4. Sleep\nEvaluates decreased need for sleep over past 48 hours.",
        options: [
          { label: "0 - Normal - Reports no decrease in sleep duration.", score: 0 },
          { label: "1 - Slightly Decreased - Sleeping up to 1 hour less than baseline.", score: 1 },
          { label: "2 - Moderately Decreased - Sleeping 1 to 2 hours less than baseline without feeling tired.", score: 2 },
          { label: "3 - Markedly Decreased - Sleeping more than 2 hours less than baseline without fatigue.", score: 3 },
          { label: "4 - Denies Need - Denies need for sleep; stays awake all night with high energy.", score: 4 }
        ]
      },
      {
        text: "5. Irritability (Double Weighted)\nEvaluates subjective irritability, hostility, and uncooperative conduct during interview.",
        options: [
          { label: "0 - Absent - No irritability or hostility observed.", score: 0 },
          { label: "2 - Mild Tension - Subjectively increased tension; irritable at times on probing.", score: 2 },
          { label: "4 - Irritable - Irritable during interview; sharp responses, easily frustrated.", score: 4 },
          { label: "6 - Frequently Hostile - Frequently irritable; hostile or abrupt towards examiner.", score: 6 },
          { label: "8 - Uncooperative / Hostile - Extremely hostile, aggressive, uncooperative; interview impossible.", score: 8 }
        ]
      },
      {
        text: "6. Speech (Rate and Amount - Double Weighted)\nEvaluates pressure of speech, talkativeness, and speech velocity.",
        options: [
          { label: "0 - Normal - Normal speech rate, volume, and quantity.", score: 0 },
          { label: "2 - Talkative - Talkative at times; increased rate and flow of speech.", score: 2 },
          { label: "4 - Rapid Speech - Rapid rate; loquacious; difficult to interrupt.", score: 4 },
          { label: "6 - Push of Speech - Push of speech; continuous stream of rapid words.", score: 6 },
          { label: "8 - Pressure of Speech - Extreme pressure of speech; incoherent, loud; impossible to interrupt.", score: 8 }
        ]
      },
      {
        text: "7. Language-Thought Disorder\nEvaluates flight of ideas, tangentiality, circumstantiality, and speech incoherence.",
        options: [
          { label: "0 - Normal - Coherent, logical, goal-directed speech.", score: 0 },
          { label: "1 - Circumstantial - Circumstantial; distractible; occasionally loses train of thought.", score: 1 },
          { label: "2 - Flight of Ideas - Flight of ideas; tangentiality; rhyming or punning associations.", score: 2 },
          { label: "3 - Incoherent - Incoherent speech; clang associations; frequent loose associations.", score: 3 },
          { label: "4 - Word Salad - Neologisms; complete incoherence; word salad.", score: 4 }
        ]
      },
      {
        text: "8. Thought Content (Double Weighted)\nEvaluates grandiosity, special powers, persecutory beliefs, or delusional content.",
        options: [
          { label: "0 - Normal - Normal, realistic thought content.", score: 0 },
          { label: "2 - Special Plans - Special plans, grand goals, or heightened self-importance.", score: 2 },
          { label: "4 - Special Powers - Believes has special powers, connections, or superior intellect.", score: 4 },
          { label: "6 - Delusions of Grandeur - Frank delusions of grandeur, religious delusions, or persecutory beliefs.", score: 6 },
          { label: "8 - Delusional Dominance - Delusional ideas dominate; hallucinations or extreme paranoia.", score: 8 }
        ]
      },
      {
        text: "9. Disruptive-Aggressive Behavior (Double Weighted)\nEvaluates loudness, argumentativeness, property destruction, or assaultive behavior.",
        options: [
          { label: "0 - Absent - Cooperative, calm, and quiet behavior.", score: 0 },
          { label: "2 - Loud - Loud voice at times; sarcastic or slightly disruptive.", score: 2 },
          { label: "4 - Demanding - Demanding; loud; argumentative during interview.", score: 4 },
          { label: "6 - Threatening - Threatening staff or others; destructive of property.", score: 6 },
          { label: "8 - Physical Assault - Physical assault; violent towards others or self; severe destruction.", score: 8 }
        ]
      },
      {
        text: "10. Appearance\nEvaluates dress, grooming, garish makeup, or eccentric clothing.",
        options: [
          { label: "0 - Appropriate - Well-groomed, appropriate dress and appearance.", score: 0 },
          { label: "1 - Slightly Unkempt - Slightly unkempt or slightly over-dressed.", score: 1 },
          { label: "2 - Garish / Overdressed - Moderately unkempt; garish makeup; bright, mismatched clothing.", score: 2 },
          { label: "3 - Disheveled - Disheveled; inappropriate clothing for season/context.", score: 3 },
          { label: "4 - Bizarre - Completely unkempt; bizarre decorations, symbols, or nakedness.", score: 4 }
        ]
      },
      {
        text: "11. Insight\nEvaluates clinical insight into manic condition and need for treatment.",
        options: [
          { label: "0 - Full Insight - Full insight; admits illness and necessity of psychiatric treatment.", score: 0 },
          { label: "1 - Partial Insight - Admits change in mood, but denies illness.", score: 1 },
          { label: "2 - External Attribution - Admits illness symptoms, but attributes them to external causes or stress.", score: 2 },
          { label: "3 - Denies Illness - Admits change in behavior, but completely denies mental illness.", score: 3 },
          { label: "4 - Total Denial - Complete denial of any change or illness; refuses evaluation/treatment.", score: 4 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 60,
      ranges: [
        { min: 0, max: 12, severity: "Euthymic / Minimal Symptoms", interpretation: "Score <= 12: Remission / Euthymia. Continue mood stabilizer maintenance therapy (Lithium / Valproate)." },
        { min: 13, max: 19, severity: "Hypomania / Mild Mania", interpretation: "Score 13-19: Hypomania. Optimize primary mood stabilizer dose; check serum levels." },
        { min: 20, max: 25, severity: "Moderate Mania", interpretation: "Score 20-25: Moderate manic episode. Add atypical antipsychotic (Olanzapine/Risperidone/Aripiprazole)." },
        { min: 26, max: 60, severity: "Severe Mania", interpretation: "Score >= 26: Severe acute mania. Inpatient admission, combination therapy (Lithium/Valproate + Antipsychotic + Benzodiazepine)." }
      ]
    }
  },
  {
    id: "hamd",
    name: "HAM-D (17)",
    fullName: "Hamilton Depression Rating Scale (17-Item)",
    category: "mood",
    description: "Standard 17-item clinician-rated instrument for assessing depression severity in adults.",
    estimatedTime: "15-20 min",
    options: [
      { label: "0 - Absent - Symptom is completely absent or normal baseline." },
      { label: "1 - Mild - Symptom is mild, occasional, or reported only on direct questioning." },
      { label: "2 - Moderate - Symptom is clearly present, causes noticeable distress, and interferes with daily tasks." },
      { label: "3 - Severe - Symptom is severe, continuous, or spontaneous without prompting." },
      { label: "4 - Extremely Severe - Incapacitating severity; overwhelming manifestation." }
    ],
    questions: [
      "1. Depressed Mood (Gloomy, helpless, hopeless, worthless)",
      "2. Feelings of Guilt (Self-reproach, feels he has let people down)",
      "3. Suicide (Feels life is not worth living, wishes to be dead, suicidal gestures)",
      "4. Insomnia - Early (Difficulty falling asleep)",
      "5. Insomnia - Middle (Waking during the night)",
      "6. Insomnia - Late (Early morning awakening)",
      "7. Work and Activities (Loss of interest, decreased productivity)",
      "8. Retardation (Slowness of thought and speech, impaired concentration)",
      "9. Agitation (Restlessness, fidgeting, hand-wringing)",
      "10. Anxiety - Psychic (Subjective tension, worry, irritability)",
      "11. Anxiety - Somatic (GI, cardiovascular, respiratory symptoms of anxiety)",
      "12. Somatic Symptoms - GI (Loss of appetite, heavy feeling in abdomen)",
      "13. Somatic Symptoms - General (Heaviness in limbs, backaches, muscle aches)",
      "14. Genital Symptoms (Loss of libido, menstrual disturbances)",
      "15. Hypochondriasis (Self-absorption in physical symptoms)",
      "16. Loss of Weight (Rated by history or actual weight loss)",
      "17. Insight (Acknowledges being depressed and ill)"
    ],
    scoring: {
      type: "total",
      maxScore: 52,
      ranges: [
        { min: 0, max: 7, severity: "Normal / Remission", interpretation: "Score 0-7: Normal / Remission. No significant depressive symptoms." },
        { min: 8, max: 13, severity: "Mild Depression", interpretation: "Score 8-13: Mild depression. Psychoeducation, supportive therapy, consider SSRI." },
        { min: 14, max: 18, severity: "Moderate Depression", interpretation: "Score 14-18: Moderate depression. Initiate SSRI/SNRI antidepressant and CBT." },
        { min: 19, max: 22, severity: "Severe Depression", interpretation: "Score 19-22: Severe depression. Pharmacotherapy with dual-action agents, consider augmentation." },
        { min: 23, max: 52, severity: "Very Severe Depression", interpretation: "Score 23+: Very severe depression. Evaluate for inpatient admission, suicide safety, and ECT." }
      ]
    }
  },
  {
    id: "hama",
    name: "HAM-A",
    fullName: "Hamilton Anxiety Rating Scale",
    category: "anxiety",
    description: "14-item clinician-rated scale to evaluate severity of anxiety symptoms, distinguishing psychic and somatic anxiety.",
    estimatedTime: "5-10 min",
    options: [
      { label: "0 - Not Present - Symptom is completely absent." },
      { label: "1 - Mild - Occasional or mild intensity; minor tension or worry without daily dysfunction." },
      { label: "2 - Moderate - Symptom occurs frequently; produces noticeable distress and mild interference with work or social activities." },
      { label: "3 - Severe - Symptom is continuous or high-intensity; causes marked distress and significant functional impairment." },
      { label: "4 - Very Severe / Incapacitating - Extreme, continuous, or overwhelming manifestation; incapacitates daily functioning." }
    ],
    subscales: [
      { id: "psychic", name: "Psychic Anxiety", min: 0, max: 28 },
      { id: "somatic", name: "Somatic Anxiety", min: 0, max: 28 }
    ],
    questions: [
      { text: "1. Anxious Mood\nWorries, anticipation of the worst, fearful anticipation, irritability.", subscale: "psychic" },
      { text: "2. Tension\nFeelings of tension, fatigability, startle response, moved to tears easily, trembling, restlessness, inability to relax.", subscale: "psychic" },
      { text: "3. Fears\nOf dark, of strangers, of being left alone, of animals, of traffic, of crowds.", subscale: "psychic" },
      { text: "4. Insomnia\nDifficulty in falling asleep, broken sleep, unsatisfying sleep and fatigue on waking, nightmares.", subscale: "psychic" },
      { text: "5. Intellectual (Cognitive)\nDifficulty in concentration, poor memory.", subscale: "psychic" },
      { text: "6. Depressed Mood\nLoss of interest, lack of pleasure in hobbies, depression, early waking, diurnal swing.", subscale: "psychic" },
      { text: "7. Somatic (Muscular)\nPains and aches, twitchings, stiffness, myoclonic jerks, grinding of teeth, unsteady voice, increased muscle tone.", subscale: "somatic" },
      { text: "8. Somatic (Sensory)\nTinnitus, blurring of vision, hot and cold flushes, feelings of weakness, pricking sensation.", subscale: "somatic" },
      { text: "9. Cardiovascular Symptoms\nTachycardia, palpitations, pain in chest, throbbing of vessels, fainting feelings, missing beat.", subscale: "somatic" },
      { text: "10. Respiratory Symptoms\nPressure or constriction in chest, choking feelings, sighing, dyspnea.", subscale: "somatic" },
      { text: "11. Gastrointestinal Symptoms\nDifficulty in swallowing, meteorism, abdominal pain, burning, nausea, vomiting, loose bowels, constipation.", subscale: "somatic" },
      { text: "12. Genitourinary Symptoms\nFrequency of micturition, urgency, amenorrhea, menorrhagia, frigidity, premature ejaculation, loss of libido.", subscale: "somatic" },
      { text: "13. Autonomic Symptoms\nDry mouth, flushing, pallor, tendency to sweat, giddiness, tension headache, raising of hair.", subscale: "somatic" },
      { text: "14. Behavior at Interview\nFidgeting, restlessness or pacing, tremor of hands, furrowed brow, strained face, sighing, facial pallor.", subscale: "psychic" }
    ],
    scoring: {
      type: "total",
      maxScore: 56,
      ranges: [
        { min: 0, max: 17, severity: "Mild Anxiety", interpretation: "Score 0-17: Mild anxiety symptoms. Psychoeducation, supportive counseling, or watchful waiting." },
        { min: 18, max: 24, severity: "Moderate Anxiety", interpretation: "Score 18-24: Moderate anxiety. Consider CBT psychotherapy and SSRI/SNRI pharmacotherapy." },
        { min: 25, max: 30, severity: "Severe Anxiety", interpretation: "Score 25-30: Severe anxiety. Initiate combination CBT and pharmacotherapy (SSRI/SNRI + short-term anxiolytic)." },
        { min: 31, max: 56, severity: "Very Severe Anxiety", interpretation: "Score 31-56: Very severe anxiety. Intensive psychiatric management, combination pharmacotherapy, and close monitoring." }
      ]
    }
  },
  {
    id: "bprs",
    name: "BPRS",
    fullName: "Brief Psychiatric Rating Scale (Expanded 24-Item)",
    category: "psychosis",
    description: "24-item clinician-rated instrument assessing overall psychotic, affective, and behavioral symptoms.",
    estimatedTime: "10-15 min",
    options: [
      { label: "1 - Not Present - Symptom is completely absent or normal baseline." },
      { label: "2 - Very Mild - Questionable or subtle pathology; barely perceptible." },
      { label: "3 - Mild - Present but causes minimal distress or impairment." },
      { label: "4 - Moderate - Clearly present; causes moderate distress or noticeable functional interference." },
      { label: "5 - Moderately Severe - Prominent symptom; noticeable disruption of social or occupational roles." },
      { label: "6 - Severe - Severe symptom expression; requires close psychiatric supervision." },
      { label: "7 - Extremely Severe - Incapacitating severity; requires emergency containment or intensive inpatient care." }
    ],
    questions: [
      "1. Somatic Concern: Excessive concern over bodily health, fears of physical illness.",
      "2. Anxiety: Worry, apprehension, or fearful anticipation concerning present or future.",
      "3. Depression: Subjective report of sadness, despondency, or feelings of hopelessness.",
      "4. Suicidality: Expressed suicidal thoughts, preoccupation, or self-harming behavior.",
      "5. Guilt Feelings: Over-concern or remorse for past actions; self-blame.",
      "6. Hostility: Animosity, contempt, belligerence, or verbal abuse.",
      "7. Elated Mood: Excessive optimism, euphoria, or inflated self-esteem.",
      "8. Grandiosity: Exaggerated opinion of abilities, power, wealth, or station.",
      "9. Suspiciousness: Belief that others harbor malicious or discriminatory intentions.",
      "10. Hallucinations: Perceptual experiences without external stimuli (auditory, visual, tactile).",
      "11. Unusual Thought Content: Unorthodox, bizarre, or delusional beliefs.",
      "12. Bizarre Behavior: Eccentric, odd, or inappropriate motor/social conduct.",
      "13. Self-Neglect: Hygiene, grooming, or personal care deficits.",
      "14. Disorientation: Confusion or lack of awareness of time, place, or person.",
      "15. Conceptual Disorganization: Thought disorder; tangentiality, neologisms, incoherence.",
      "16. Blunted Affect: Diminished emotional responsiveness, flat affect, reduced facial expressiveness.",
      "17. Emotional Withdrawal: Lack of spontaneous interaction, apathy, detachment.",
      "18. Motor Retardation: Slowed movement, speech, or motor reactivity.",
      "19. Tension: Observable physical signs of nervousness, motor tension, or trembling.",
      "20. Uncooperativeness: Resistance, unfriendliness, or refusal to comply with interview.",
      "21. Excitement: Heightened emotional tone, hyper-reactivity, or agitation.",
      "22. Mannerisms and Posturing: Odd, unnatural motor postures or stilted mannerisms.",
      "23. Distractibility: Inability to sustain attention due to internal/external stimuli.",
      "24. Hyperactivity: Excessive motor activity, pacing, or inability to sit still."
    ],
    scoring: {
      type: "total",
      maxScore: 168,
      ranges: [
        { min: 24, max: 36, severity: "Mild / Remission", interpretation: "Score 24-36: Minimal to no active psychotic or affective symptoms." },
        { min: 37, max: 53, severity: "Mild Symptom Severity", interpretation: "Score 37-53: Mild symptoms. Low-dose antipsychotic maintenance and psychosocial rehabilitation." },
        { min: 54, max: 70, severity: "Moderate Psychosis", interpretation: "Score 54-70: Moderate symptom severity. Optimize antipsychotic regimen and monitor for side effects." },
        { min: 71, max: 168, severity: "Severe Psychosis / Crisis", interpretation: "Score 71+: Severe psychotic exacerbation. Urgent inpatient psychiatric stabilization and high-potency antipsychotic intervention." }
      ]
    }
  },
  {
    id: "mmse",
    name: "MMSE",
    fullName: "Mini-Mental State Examination",
    category: "cognitive",
    description: "30-point questionnaire used extensively in clinical practice to screen for cognitive impairment and dementia.",
    estimatedTime: "10 min",
    options: [
      { label: "0 - Incorrect / Failed - Patient failed task or gave incorrect response." },
      { label: "1 - Correct / Passed - Patient successfully executed task without assistance." }
    ],
    questions: [
      "1. Orientation - Year",
      "2. Orientation - Season",
      "3. Orientation - Date",
      "4. Orientation - Day of week",
      "5. Orientation - Month",
      "6. Orientation - State / Region",
      "7. Orientation - Country",
      "8. Orientation - Town / City",
      "9. Orientation - Hospital / Clinic",
      "10. Orientation - Floor / Ward",
      "11. Registration - Word 1 ('Apple')",
      "12. Registration - Word 2 ('Penny')",
      "13. Registration - Word 3 ('Table')",
      "14. Attention/Calculation - Serial 7s (100-7 = 93)",
      "15. Attention/Calculation - Serial 7s (93-7 = 86)",
      "16. Attention/Calculation - Serial 7s (86-7 = 79)",
      "17. Attention/Calculation - Serial 7s (79-7 = 72)",
      "18. Attention/Calculation - Serial 7s (72-7 = 65)",
      "19. Recall - Word 1 ('Apple')",
      "20. Recall - Word 2 ('Penny')",
      "21. Recall - Word 3 ('Table')",
      "22. Language - Name object 1 (Pencil)",
      "23. Language - Name object 2 (Watch)",
      "24. Language - Repeat phrase ('No ifs, ands, or buts')",
      "25. Language - Follow 3-stage command (Take paper in right hand)",
      "26. Language - Follow 3-stage command (Fold paper in half)",
      "27. Language - Follow 3-stage command (Put paper on floor)",
      "28. Language - Read and obey ('Close your eyes')",
      "29. Language - Write a complete sentence",
      "30. Language - Copy overlapping pentagons design"
    ],
    scoring: {
      type: "total",
      maxScore: 30,
      ranges: [
        { min: 24, max: 30, severity: "Normal Cognition", interpretation: "Score 24-30: Normal cognitive function." },
        { min: 19, max: 23, severity: "Mild Cognitive Impairment", interpretation: "Score 19-23: Mild cognitive impairment. Investigate reversible causes (B12, TSH, MRI brain)." },
        { min: 10, max: 18, severity: "Moderate Dementia", interpretation: "Score 10-18: Moderate cognitive impairment / dementia. Consider cholinesterase inhibitors." },
        { min: 0, max: 9, severity: "Severe Dementia", interpretation: "Score 0-9: Severe dementia. High dependency care required." }
      ]
    }
  },
  {
    id: "moca",
    name: "MoCA",
    fullName: "Montreal Cognitive Assessment",
    category: "cognitive",
    description: "30-point screening tool for Mild Cognitive Impairment (MCI) and early dementia across 8 cognitive domains.",
    estimatedTime: "10 min",
    options: [
      { label: "0 - Incorrect / Failed - Patient failed task or gave incorrect response." },
      { label: "1 - Correct / Passed - Patient successfully executed task without assistance." }
    ],
    questions: [
      "1. Visuospatial - Alternating Trail Making B (1 -> A -> 2 -> B -> 3 -> C -> 4 -> D -> 5 -> E)",
      "2. Visuospatial - Copy 3D Cube (Draws cube accurately with all lines)",
      "3. Visuospatial - Clock Contour (Draws complete closed circle)",
      "4. Visuospatial - Clock Numbers (All 12 numbers in correct positions)",
      "5. Visuospatial - Clock Hands (Hands point to 11:10 accurately)",
      "6. Naming - Animal 1 (Identify Lion)",
      "7. Naming - Animal 2 (Identify Rhinoceros)",
      "8. Naming - Animal 3 (Identify Camel)",
      "9. Attention - Forward Digit Span (Repeat 2-1-8-5-4 correctly)",
      "10. Attention - Backward Digit Span (Repeat 7-4-2 backwards as 2-4-7)",
      "11. Attention - Vigilance Letter A Tapping (Taps on letter A with <= 1 error)",
      "12. Attention - Serial 7 Subtraction 1 (100 - 7 = 93)",
      "13. Attention - Serial 7 Subtraction 2 (93 - 7 = 86)",
      "14. Attention - Serial 7 Subtraction 3 (86 - 7 = 79)",
      "15. Attention - Serial 7 Subtraction 4 (79 - 7 = 72)",
      "16. Attention - Serial 7 Subtraction 5 (65)",
      "17. Language - Sentence Repetition 1 ('I only know that John is the one to help today.')",
      "18. Language - Sentence Repetition 2 ('The cat always hid under the couch when dogs were in the room.')",
      "19. Language - Verbal Fluency (Generates 11 or more words starting with letter 'F' in 1 min)",
      "20. Abstraction - Similarity 1 (Category for Banana - Orange -> Fruit)",
      "21. Abstraction - Similarity 2 (Category for Train - Bicycle -> Transport / Vehicle)",
      "22. Delayed Recall - Word 1 ('FACE' recalled without cue)",
      "23. Delayed Recall - Word 2 ('VELVET' recalled without cue)",
      "24. Delayed Recall - Word 3 ('CHURCH' recalled without cue)",
      "25. Delayed Recall - Word 4 ('DAISY' recalled without cue)",
      "26. Delayed Recall - Word 5 ('RED' recalled without cue)",
      "27. Orientation - Date of the month",
      "28. Orientation - Month of the year",
      "29. Orientation - Year",
      "30. Orientation - Day of the week & Exact Place/City"
    ],
    scoring: {
      type: "total",
      maxScore: 30,
      ranges: [
        { min: 26, max: 30, severity: "Normal Cognitive Function", interpretation: "Score 26-30: Normal cognition. No evidence of mild cognitive impairment." },
        { min: 18, max: 25, severity: "Mild Cognitive Impairment (MCI)", interpretation: "Score 18-25: Mild Cognitive Impairment. Order neuroimaging (MRI/CT brain), B12, TSH, and neuropsychological evaluation." },
        { min: 10, max: 17, severity: "Moderate Cognitive Impairment", interpretation: "Score 10-17: Moderate cognitive deficit / early dementia. Initiate cholinesterase inhibitor (Donepezil/Rivastigmine) and safety planning." },
        { min: 0, max: 9, severity: "Severe Cognitive Impairment", interpretation: "Score 0-9: Severe dementia. Comprehensive caregiver support, safety evaluation, and specialized memory care." }
      ]
    }
  },
  {
    id: "isaa",
    name: "ISAA",
    fullName: "Indian Scale for Assessment of Autism",
    category: "neurodevelopmental",
    description: "40-item standardized rating scale developed by Govt of India (NIMH/NIEPID) for diagnosing and quantifying Autism Spectrum Disorder (ASD) severity.",
    estimatedTime: "15-20 min",
    options: [
      { label: "1 - Rarely / Never (< 20% of time) - Behavior is absent or observed less than 20% of the time." },
      { label: "2 - Sometimes (21–40% of time) - Behavior occurs occasionally, between 21% and 40% of observation period." },
      { label: "3 - Frequently (41–60% of time) - Behavior occurs regularly, between 41% and 60% of observation period." },
      { label: "4 - Mostly (61–80% of time) - Behavior is present during most activities, between 61% and 80% of the time." },
      { label: "5 - Always (81–100% of time) - Behavior is persistent, occurring between 81% and 100% of the observation period." }
    ],
    questions: [
      "1. Has poor eye contact",
      "2. Lacks social smile",
      "3. Remains aloof / avoids peer interaction",
      "4. Does not reach out to parent / caregiver",
      "5. Lacks joint attention",
      "6. Responds inappropriately to social cues",
      "7. Shows lack of empathy",
      "8. Unable to initiate or sustain conversation",
      "9. Uses gestures inappropriately",
      "10. Shows inappropriate emotional responses",
      "11. Shows exaggerated fear to harmless objects",
      "12. Lacks fear of real danger",
      "13. Shows excitement without evident cause",
      "14. Insensitive to pain / thermal stimuli",
      "15. Shows delay in speech development",
      "16. Uses echolalia (repeating words/phrases)",
      "17. Uses jargon / unintelligible speech",
      "18. Uses pronominal reversal (e.g. 'you' for 'I')",
      "19. Cannot understand simple verbal instructions",
      "20. Speaks with monotonous voice or abnormal pitch",
      "21. Shows repetitive vocalizations",
      "22. Lacks imaginative / pretend play",
      "23. Plays with objects inappropriately",
      "24. Shows stereotypic motor movements (hand flapping, spinning)",
      "25. Shows resistance to change in routine",
      "26. Shows obsessive attachment to unusual objects",
      "27. Shows hyperactive behavior",
      "28. Shows aggressive behavior towards others",
      "29. Shows self-injurious behavior (head banging, biting)",
      "30. Shows temper tantrums",
      "31. Stares at spinning objects / lights",
      "32. Smells or licks objects repeatedly",
      "33. Shows tactile defensiveness (dislikes textures/touch)",
      "34. Shows hyper-responsiveness to auditory stimuli",
      "35. Shows hypo-responsiveness to auditory stimuli",
      "36. Shows unusual visual inspection of objects",
      "37. Shows inconsistent attention span",
      "38. Shows uneven cognitive profile",
      "39. Shows exceptional memory in specific narrow areas",
      "40. Shows difficulty in conceptual thinking and generalization"
    ],
    scoring: {
      type: "total",
      maxScore: 200,
      ranges: [
        { min: 40, max: 69, severity: "No Autism (< 40%)", interpretation: "Score < 70: No autism detected. Normal developmental trajectory." },
        { min: 70, max: 106, severity: "Mild Autism (40-70%)", interpretation: "Score 70-106: Mild Autism. Initiate early intervention, occupational therapy, and speech therapy." },
        { min: 107, max: 153, severity: "Moderate Autism (71-100%)", interpretation: "Score 107-153: Moderate Autism. Structured sensory integration, ABA therapy, and special education." },
        { min: 154, max: 200, severity: "Severe Autism (> 100%)", interpretation: "Score > 153: Severe Autism. High-intensity multi-disciplinary intervention, disability certification, and caregiver training." }
      ]
    }
  },
  {
    id: "audit",
    name: "AUDIT",
    fullName: "Alcohol Use Disorders Identification Test",
    category: "substance",
    description: "10-item WHO screening tool to identify hazardous alcohol consumption, harmful use, and alcohol dependence.",
    estimatedTime: "3-5 min",
    questions: [
      {
        text: "1. How often do you have a drink containing alcohol?",
        options: [
          { label: "0 - Never - Abstinent; does not drink alcohol.", score: 0 },
          { label: "1 - Monthly or Less - Consumes alcohol once a month or less.", score: 1 },
          { label: "2 - 2 to 4 Times a Month - Consumes alcohol 2 to 4 times per month.", score: 2 },
          { label: "3 - 2 to 3 Times a Week - Consumes alcohol 2 to 3 times per week.", score: 3 },
          { label: "4 - 4+ Times a Week - Consumes alcohol 4 or more times per week.", score: 4 }
        ]
      },
      {
        text: "2. How many drinks containing alcohol do you have on a typical day when drinking?",
        options: [
          { label: "0 - 1 or 2 Drinks - 1 to 2 standard alcohol units per occasion.", score: 0 },
          { label: "1 - 3 or 4 Drinks - 3 to 4 standard alcohol units per occasion.", score: 1 },
          { label: "2 - 5 or 6 Drinks - 5 to 6 standard alcohol units per occasion.", score: 2 },
          { label: "3 - 7 to 9 Drinks - 7 to 9 standard alcohol units per occasion.", score: 3 },
          { label: "4 - 10+ Drinks - 10 or more standard alcohol units per occasion.", score: 4 }
        ]
      },
      {
        text: "3. How often do you have 6 or more drinks on one occasion?",
        options: [
          { label: "0 - Never - Never engages in binge drinking.", score: 0 },
          { label: "1 - Less than Monthly - Binge drinking occurs less than once per month.", score: 1 },
          { label: "2 - Monthly - Binge drinking occurs monthly.", score: 2 },
          { label: "3 - Weekly - Binge drinking occurs weekly.", score: 3 },
          { label: "4 - Daily / Almost Daily - Binge drinking occurs daily or almost daily.", score: 4 }
        ]
      },
      {
        text: "4. How often during the last year have you found that you were not able to stop drinking once started?",
        options: [
          { label: "0 - Never - Full control over alcohol intake.", score: 0 },
          { label: "1 - Less than Monthly - Loss of control less than monthly.", score: 1 },
          { label: "2 - Monthly - Impaired control occurs monthly.", score: 2 },
          { label: "3 - Weekly - Impaired control occurs weekly.", score: 3 },
          { label: "4 - Daily / Almost Daily - Complete loss of control daily or almost daily.", score: 4 }
        ]
      },
      {
        text: "5. How often during the last year have you failed to do what was normally expected because of drinking?",
        options: [
          { label: "0 - Never - No failure of role obligations.", score: 0 },
          { label: "1 - Less than Monthly - Role failure occurs less than monthly.", score: 1 },
          { label: "2 - Monthly - Role failure occurs monthly.", score: 2 },
          { label: "3 - Weekly - Role failure occurs weekly.", score: 3 },
          { label: "4 - Daily / Almost Daily - Persistent failure of obligations daily.", score: 4 }
        ]
      },
      {
        text: "6. How often during the last year have you needed a first drink in the morning to get going after heavy drinking?",
        options: [
          { label: "0 - Never - No morning eye-opener drink needed.", score: 0 },
          { label: "1 - Less than Monthly - Eye-opener drink less than monthly.", score: 1 },
          { label: "2 - Monthly - Eye-opener drink needed monthly.", score: 2 },
          { label: "3 - Weekly - Eye-opener drink needed weekly.", score: 3 },
          { label: "4 - Daily / Almost Daily - Eye-opener drink needed daily.", score: 4 }
        ]
      },
      {
        text: "7. How often during the last year have you had a feeling of guilt or remorse after drinking?",
        options: [
          { label: "0 - Never - No guilt or remorse.", score: 0 },
          { label: "1 - Less than Monthly - Guilt less than monthly.", score: 1 },
          { label: "2 - Monthly - Guilt felt monthly.", score: 2 },
          { label: "3 - Weekly - Guilt felt weekly.", score: 3 },
          { label: "4 - Daily / Almost Daily - Guilt felt daily.", score: 4 }
        ]
      },
      {
        text: "8. How often during the last year have you been unable to remember what happened the night before because of drinking?",
        options: [
          { label: "0 - Never - No alcohol blackouts.", score: 0 },
          { label: "1 - Less than Monthly - Blackout less than monthly.", score: 1 },
          { label: "2 - Monthly - Blackout experienced monthly.", score: 2 },
          { label: "3 - Weekly - Blackout experienced weekly.", score: 3 },
          { label: "4 - Daily / Almost Daily - Blackout experienced daily or almost daily.", score: 4 }
        ]
      },
      {
        text: "9. Have you or someone else been injured as a result of your drinking?",
        options: [
          { label: "0 - No - No injuries resulted from drinking.", score: 0 },
          { label: "2 - Yes, Previous Year - Injury occurred, but not in the last year.", score: 2 },
          { label: "4 - Yes, Past Year - Injury occurred during the last year.", score: 4 }
        ]
      },
      {
        text: "10. Has a relative, friend, doctor, or health worker been concerned about your drinking or suggested cutting down?",
        options: [
          { label: "0 - No - No concern expressed by others.", score: 0 },
          { label: "2 - Yes, Previous Year - Concern expressed, but not in the last year.", score: 2 },
          { label: "4 - Yes, Past Year - Concern expressed during the last year.", score: 4 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 40,
      ranges: [
        { min: 0, max: 7, severity: "Low Risk / Abstinent", interpretation: "Score 0-7: Low-risk drinking or abstinence. Provide brief alcohol education." },
        { min: 8, max: 15, severity: "Hazardous Alcohol Use", interpretation: "Score 8-15: Hazardous alcohol use. Provide brief intervention and counseling to reduce consumption." },
        { min: 16, max: 19, severity: "Harmful Alcohol Use", interpretation: "Score 16-19: Harmful alcohol use. Extended brief intervention, motivational interviewing, and close monitoring." },
        { min: 20, max: 40, severity: "Possible Alcohol Dependence", interpretation: "Score 20-40: High risk of alcohol dependence. Specialist addiction evaluation, medical detoxification, and pharmacotherapy (Acamprosate/Naltrexone)." }
      ]
    }
  },
  {
    id: "gsaq",
    name: "GSAQ",
    fullName: "Global Sleep Assessment Questionnaire",
    category: "sleep",
    description: "11-item validated self-report screening tool for common clinical sleep disorders.",
    estimatedTime: "4-6 min",
    options: [
      { label: "0 - Never (0 days/week) - Symptom never occurs or applies 0 days per week." },
      { label: "1 - Sometimes (1-2 days/week) - Occurs occasionally, 1 to 2 days per week." },
      { label: "2 - Usually (3-4 days/week) - Occurs frequently, 3 to 4 days per week." },
      { label: "3 - Always (5-7 days/week) - Occurs persistently, 5 to 7 days per week." }
    ],
    questions: [
      "1. How often do you have difficulty falling asleep at night?",
      "2. How often do you wake up during the night and have trouble going back to sleep?",
      "3. How often do you wake up too early in the morning and cannot fall back asleep?",
      "4. How often do you feel unrested or tired during the day, even after a full night's sleep?",
      "5. How often do you feel excessively sleepy during the day or struggle to stay awake?",
      "6. How often has anyone told you that you snore loudly or gasp for breath while sleeping?",
      "7. How often do you have unpleasant restless sensations in your legs when lying down to sleep?",
      "8. How often do you move or kick your legs repeatedly while sleeping?",
      "9. How often do you experience disturbing nightmares, vivid dreams, or sleep walking?",
      "10. How often does pain or physical discomfort interrupt your sleep?",
      "11. How often does worry, stress, or sadness keep you awake at night?"
    ],
    scoring: {
      type: "total",
      maxScore: 33,
      ranges: [
        { min: 0, max: 7, severity: "Normal Sleep Pattern", interpretation: "Score 0-7: Healthy sleep hygiene. No significant sleep pathology." },
        { min: 8, max: 14, severity: "Mild Sleep Disturbance", interpretation: "Score 8-14: Mild sleep disruption. Optimize sleep hygiene, limit caffeine, and establish regular sleep routine." },
        { min: 15, max: 22, severity: "Moderate Sleep Disorder Risk", interpretation: "Score 15-22: Moderate risk of clinical sleep disorder (Insomnia / Restless Legs / Sleep Apnea). Consider polysomnography." },
        { min: 23, max: 33, severity: "Severe Sleep Disorder", interpretation: "Score 23-33: High probability of primary sleep disorder. Urgent referral for overnight polysomnography and sleep specialist evaluation." }
      ]
    }
  },
  {
    id: "dass21",
    name: "DASS-21",
    fullName: "Depression Anxiety Stress Scales (21-Item)",
    category: "mood",
    description: "21-item quantitative self-report measure of emotional states across Depression, Anxiety, and Stress.",
    estimatedTime: "5-7 min",
    options: [
      { label: "0 - Did not apply to me at all - Never or rarely experienced over the past week." },
      { label: "1 - Applied to me to some degree - Experienced occasionally or to a mild degree over the past week." },
      { label: "2 - Applied to me to a considerable degree - Experienced frequently or to a moderate-to-severe degree over the past week." },
      { label: "3 - Applied to me very much - Experienced almost constantly or to an extreme degree over the past week." }
    ],
    subscales: [
      { id: "dep", name: "Depression", min: 0, max: 21 },
      { id: "anx", name: "Anxiety", min: 0, max: 21 },
      { id: "str", name: "Stress", min: 0, max: 21 }
    ],
    questions: [
      { text: "1. I found it hard to wind down", subscale: "str" },
      { text: "2. I was aware of dryness of my mouth", subscale: "anx" },
      { text: "3. I couldn't seem to experience any positive feeling at all", subscale: "dep" },
      { text: "4. I experienced breathing difficulty (e.g., excessively rapid breathing)", subscale: "anx" },
      { text: "5. I found it difficult to work up the initiative to do things", subscale: "dep" },
      { text: "6. I tended to over-react to situations", subscale: "str" },
      { text: "7. I experienced trembling (e.g., in the hands)", subscale: "anx" },
      { text: "8. I felt that I was using a lot of nervous energy", subscale: "str" },
      { text: "9. I was worried about situations in which I might panic and make a fool of myself", subscale: "anx" },
      { text: "10. I felt that I had nothing to look forward to", subscale: "dep" },
      { text: "11. I found myself getting agitated", subscale: "str" },
      { text: "12. I found it difficult to relax", subscale: "str" },
      { text: "13. I felt down-hearted and blue", subscale: "dep" },
      { text: "14. I was intolerant of anything that kept me from getting on with what I was doing", subscale: "str" },
      { text: "15. I felt I was close to panic", subscale: "anx" },
      { text: "16. I was unable to become enthusiastic about anything", subscale: "dep" },
      { text: "17. I felt I wasn't worth much as a person", subscale: "dep" },
      { text: "18. I felt that I was rather touchy", subscale: "str" },
      { text: "19. I was aware of the action of my heart in the absence of physical exertion", subscale: "anx" },
      { text: "20. I felt scared without any good reason", subscale: "anx" },
      { text: "21. I felt that life was meaningless", subscale: "dep" }
    ],
    scoring: {
      type: "total",
      maxScore: 63,
      ranges: [
        { min: 0, max: 14, severity: "Normal Emotional State", interpretation: "Score 0-14: Normal emotional state across Depression, Anxiety, and Stress domains." },
        { min: 15, max: 25, severity: "Mild Emotional Distress", interpretation: "Score 15-25: Mild distress. Recommend mindfulness, stress management, and supportive therapy." },
        { min: 26, max: 40, severity: "Moderate Emotional Distress", interpretation: "Score 26-40: Moderate emotional distress. Initiate Cognitive Behavioral Therapy (CBT) and clinical monitoring." },
        { min: 41, max: 63, severity: "Severe / Extremely Severe Distress", interpretation: "Score 41+: Severe to extremely severe distress. Comprehensive psychiatric evaluation and combined psychotherapy + pharmacotherapy." }
      ]
    }
  },
  {
    id: "bars",
    name: "BARS",
    fullName: "Barnes Akathisia Rating Scale",
    category: "catatonia",
    description: "4-item rating scale for drug-induced akathisia assessing objective motor restlessness and subjective distress.",
    estimatedTime: "3-5 min",
    questions: [
      {
        text: "1. Objective Akathisia\nEvaluates observed motor restlessness while seated or standing during examination.",
        options: [
          { label: "0 - Normal - No restless movements observed.", score: 0 },
          { label: "1 - Mild Restlessness - Characteristic movements of legs/feet present < 50% of examination time.", score: 1 },
          { label: "2 - Moderate Restlessness - Characteristic movements of legs/feet present > 50% of examination time.", score: 2 },
          { label: "3 - Severe Akathisia - Severe constant pacing or inability to remain seated during examination.", score: 3 }
        ]
      },
      {
        text: "2. Subjective Awareness of Restlessness\nEvaluates patient's subjective internal feeling of motor urge and inability to keep legs still.",
        options: [
          { label: "0 - None - Absence of inner restlessness.", score: 0 },
          { label: "1 - Non-Specific - Non-specific sense of inner restlessness.", score: 1 },
          { label: "2 - Awareness of Motor Urge - Awareness of inability to keep legs still.", score: 2 },
          { label: "3 - Intense Compulsion - Intense compulsion to move legs continuously.", score: 3 }
        ]
      },
      {
        text: "3. Subjective Distress Related to Restlessness\nEvaluates patient's subjective distress or emotional turmoil caused by akathisia.",
        options: [
          { label: "0 - No Distress - No distress experienced.", score: 0 },
          { label: "1 - Mild Distress - Mild subjective discomfort.", score: 1 },
          { label: "2 - Moderate Distress - Moderate subjective distress.", score: 2 },
          { label: "3 - Severe Distress - Severe distress or emotional agony.", score: 3 }
        ]
      },
      {
        text: "4. Global Clinical Impression of Akathisia\nClinician's overall diagnostic impression of akathisia severity.",
        options: [
          { label: "0 - Absent - Akathisia absent.", score: 0 },
          { label: "1 - Questionable - Questionable akathisia.", score: 1 },
          { label: "2 - Mild - Mild akathisia (Awareness + mild distress).", score: 2 },
          { label: "3 - Moderate - Moderate akathisia (Noticeable restlessness + distress).", score: 3 },
          { label: "4 - Marked - Marked akathisia (Frequent movement + severe discomfort).", score: 4 },
          { label: "5 - Severe - Severe akathisia (Constant pacing + severe agony).", score: 5 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 14,
      ranges: [
        { min: 0, max: 1, severity: "Akathisia Absent", interpretation: "Score 0-1: No diagnostic evidence of drug-induced akathisia." },
        { min: 2, max: 5, severity: "Mild Akathisia", interpretation: "Score 2-5: Mild akathisia. Consider reducing antipsychotic dosage or adding Propranolol (20-40 mg/day)." },
        { min: 6, max: 9, severity: "Moderate Akathisia", interpretation: "Score 6-9: Moderate akathisia. Add Propranolol or switch to lower-risk antipsychotic (Quetiapine/Clozapine)." },
        { min: 10, max: 14, severity: "Severe Akathisia", interpretation: "Score 10-14: Severe distressing akathisia. Urgent dose reduction, Propranolol + short-term Benzodiazepine, or antipsychotic switch." }
      ]
    }
  },
  {
    id: "phq9",
    name: "PHQ-9",
    fullName: "Patient Health Questionnaire (9-Item)",
    category: "mood",
    description: "9-item self-report scale based on DSM-5 major depressive episode criteria.",
    estimatedTime: "3 min",
    options: [
      { label: "0 - Not at all - Experienced 0 to 1 day over the past 2 weeks." },
      { label: "1 - Several days - Experienced 2 to 6 days over the past 2 weeks." },
      { label: "2 - More than half the days - Experienced 7 to 11 days over the past 2 weeks." },
      { label: "3 - Nearly every day - Experienced 12 to 14 days over the past 2 weeks." }
    ],
    questions: [
      "1. Little interest or pleasure in doing things (Anhedonia)",
      "2. Feeling down, depressed, or hopeless",
      "3. Trouble falling or staying asleep, or sleeping too much",
      "4. Feeling tired or having little energy",
      "5. Poor appetite or overeating",
      "6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
      "7. Trouble concentrating on things, such as reading the newspaper or watching television",
      "8. Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless",
      "9. Thoughts that you would be better off dead, or of hurting yourself in some way"
    ],
    scoring: {
      type: "total",
      maxScore: 27,
      ranges: [
        { min: 0, max: 4, severity: "Minimal / No Depression", interpretation: "Score 0-4: Minimal depression. No treatment required." },
        { min: 5, max: 9, severity: "Mild Depression", interpretation: "Score 5-9: Mild depression. Watchful waiting and repeat PHQ-9 at follow-up." },
        { min: 10, max: 14, severity: "Moderate Depression", interpretation: "Score 10-14: Moderate depression. Consider psychotherapy (CBT) and/or SSRI antidepressant." },
        { min: 15, max: 19, severity: "Moderately Severe Depression", interpretation: "Score 15-19: Moderately severe depression. Initiate SSRI/SNRI antidepressant and psychotherapy." },
        { min: 20, max: 27, severity: "Severe Depression", interpretation: "Score 20-27: Severe depression. Immediate pharmacotherapy, dual-action antidepressant, and safety evaluation." }
      ]
    }
  },
  {
    id: "madrs",
    name: "MADRS",
    fullName: "Montgomery-Asberg Depression Rating Scale",
    category: "mood",
    description: "10-item clinician-rated scale sensitive to change in depression severity over treatment.",
    estimatedTime: "5-8 min",
    options: [
      { label: "0 - Normal - Normal affect; brightens up appropriately." },
      { label: "1 - Slight - Slight despondency or sadness." },
      { label: "2 - Sad - Looks sad but brightens up on interaction." },
      { label: "3 - Moderate - Moderate sadness; gloomy most of the time." },
      { label: "4 - Pervasive Sadness - Pervasive sadness; gloomy and despondent most of the day." },
      { label: "5 - Severe - Severe continuous sadness." },
      { label: "6 - Extreme Misery - Extreme continuous misery and despondency." }
    ],
    questions: [
      "1. Apparent Sadness: Despondency, gloom and despair rated on observed affect",
      "2. Reported Sadness: Subjective reports of depressed mood",
      "3. Inner Tension: Ill-defined discomfort, edginess, inner turmoil, panic",
      "4. Reduced Sleep: Reduced duration or depth of sleep compared to baseline",
      "5. Reduced Appetite: Reduced desire to eat or loss of interest in food",
      "6. Concentration Difficulties: Difficulty collecting thoughts, easily distractible",
      "7. Lassitude: Difficulty starting or performing routine activities; reduced energy",
      "8. Inability to Feel: Reduced interest in surroundings; emotional detachment",
      "9. Pessimistic Thoughts: Guilt, inferiority, self-reproach, ideas of ruin",
      "10. Suicidal Thoughts: Thoughts life is not worth living, or active ideation"
    ],
    scoring: {
      type: "total",
      maxScore: 60,
      ranges: [
        { min: 0, max: 6, severity: "Normal / Remission", interpretation: "Score 0-6: Normal mood, no clinical depression." },
        { min: 7, max: 19, severity: "Mild Depression", interpretation: "Score 7-19: Mild depression. Watchful waiting or psychotherapy." },
        { min: 20, max: 34, severity: "Moderate Depression", interpretation: "Score 20-34: Moderate depression. Initiate SSRI/SNRI antidepressant." },
        { min: 35, max: 60, severity: "Severe Depression", interpretation: "Score 35-60: Severe depression. Aggressive antidepressant therapy + inpatient safety." }
      ]
    }
  },
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
          { label: "0 - None - No nausea and no vomiting.", score: 0 },
          { label: "1 - Mild Nausea - Mild nausea with no vomiting.", score: 1 },
          { label: "2 - Mild Nausea - Mild nausea present.", score: 2 },
          { label: "3 - Mild Nausea - Mild persistent nausea.", score: 3 },
          { label: "4 - Intermittent Nausea - Intermittent nausea with dry heaves.", score: 4 },
          { label: "5 - Intermittent Nausea - Frequent dry heaves.", score: 5 },
          { label: "6 - Frequent Nausea - Severe dry heaves.", score: 6 },
          { label: "7 - Severe Vomiting - Constant nausea, frequent dry heaves and vomiting.", score: 7 }
        ]
      },
      {
        text: "2. Tremor\nAsk patient to extend arms and spread fingers. Observe.",
        options: [
          { label: "0 - No Tremor - No tremor present.", score: 0 },
          { label: "1 - Felt Only - Tremor not visible, but felt fingertip to fingertip.", score: 1 },
          { label: "2 - Mild Tremor - Mild tremor visible on arms extended.", score: 2 },
          { label: "3 - Mild Tremor - Mild continuous tremor.", score: 3 },
          { label: "4 - Moderate Tremor - Moderate tremor with patient's arms extended.", score: 4 },
          { label: "5 - Moderate Tremor - Moderate tremor.", score: 5 },
          { label: "6 - Moderate Tremor - Prominent tremor.", score: 6 },
          { label: "7 - Severe Tremor - Severe tremor, even with arms not extended.", score: 7 }
        ]
      },
      {
        text: "3. Paroxysmal Sweats\nObserve patient's forehead and body for diaphoresis.",
        options: [
          { label: "0 - No Sweat - No sweat visible.", score: 0 },
          { label: "1 - Barely Perceptible - Barely perceptible sweating, palms moist.", score: 1 },
          { label: "2 - Mild Sweating - Mild moistness.", score: 2 },
          { label: "3 - Mild Sweating - Mild sweating on brow.", score: 3 },
          { label: "4 - Obvious Sweat - Beads of sweat obvious on forehead.", score: 4 },
          { label: "5 - Obvious Sweat - Beads of sweat on face.", score: 5 },
          { label: "6 - Heavy Sweat - Heavy diaphoresis.", score: 6 },
          { label: "7 - Drenching Sweats - Drenching sweats covering entire body.", score: 7 }
        ]
      },
      {
        text: "4. Anxiety\nAsk: 'Do you feel nervous?' Observe patient.",
        options: [
          { label: "0 - No Anxiety - Calm and at ease.", score: 0 },
          { label: "1 - Mildly Anxious - Mildly anxious.", score: 1 },
          { label: "2 - Mildly Anxious - Mild tension.", score: 2 },
          { label: "3 - Mildly Anxious - Noticeable apprehension.", score: 3 },
          { label: "4 - Moderately Anxious - Moderately anxious or guarded.", score: 4 },
          { label: "5 - Moderately Anxious - Moderate apprehension.", score: 5 },
          { label: "6 - Moderately Anxious - Severe apprehension.", score: 6 },
          { label: "7 - Acute Panic - Equivalent to acute panic state as seen in severe delirium.", score: 7 }
        ]
      },
      {
        text: "5. Agitation\nObserve motor activity during interview.",
        options: [
          { label: "0 - Normal Activity - Normal activity.", score: 0 },
          { label: "1 - Slightly Increased - Somewhat more than normal activity.", score: 1 },
          { label: "2 - Fidgety - Moderately fidgety and restless.", score: 2 },
          { label: "3 - Restless - Moderately restless.", score: 3 },
          { label: "4 - Fidgety - Moderately fidgety and restless.", score: 4 },
          { label: "5 - Pacing - Paces back and forth.", score: 5 },
          { label: "6 - Frequent Pacing - Paces during most of interview.", score: 6 },
          { label: "7 - Constant Pacing - Paces constantly, thrashes about, or struggles against physical barriers.", score: 7 }
        ]
      },
      {
        text: "6. Tactile Disturbances\nAsk: 'Do you have itching, pins/needles, numbness, or feeling bugs crawling on your skin?'",
        options: [
          { label: "0 - None - No tactile disturbances.", score: 0 },
          { label: "1 - Very Mild - Very mild itching, pins and needles, burning or numbness.", score: 1 },
          { label: "2 - Mild - Mild itching or pins and needles.", score: 2 },
          { label: "3 - Moderate - Moderate itching or burning.", score: 3 },
          { label: "4 - Moderately Severe - Moderately severe hallucinations.", score: 4 },
          { label: "5 - Severe - Severe tactile hallucinations.", score: 5 },
          { label: "6 - Extremely Severe - Extremely severe hallucinations.", score: 6 },
          { label: "7 - Continuous - Continuous tactile hallucinations.", score: 7 }
        ]
      },
      {
        text: "7. Auditory Disturbances\nAsk: 'Are you more aware of harsh sounds? Do sounds hurt your ears? Do you hear things that aren't there?'",
        options: [
          { label: "0 - None - Not present.", score: 0 },
          { label: "1 - Very Mild - Very mild harshness or ability to frighten.", score: 1 },
          { label: "2 - Mild - Mild harshness.", score: 2 },
          { label: "3 - Moderate - Moderate harshness.", score: 3 },
          { label: "4 - Moderately Severe - Moderately severe auditory hallucinations.", score: 4 },
          { label: "5 - Severe - Severe auditory hallucinations.", score: 5 },
          { label: "6 - Extremely Severe - Extremely severe auditory hallucinations.", score: 6 },
          { label: "7 - Continuous - Continuous auditory hallucinations.", score: 7 }
        ]
      },
      {
        text: "8. Visual Disturbances\nAsk: 'Is the light too bright? Do you see things that aren't there?'",
        options: [
          { label: "0 - None - Not present.", score: 0 },
          { label: "1 - Very Mild - Very mild sensitivity to light.", score: 1 },
          { label: "2 - Mild - Mild sensitivity.", score: 2 },
          { label: "3 - Moderate - Moderate sensitivity.", score: 3 },
          { label: "4 - Moderately Severe - Moderately severe visual hallucinations.", score: 4 },
          { label: "5 - Severe - Severe visual hallucinations.", score: 5 },
          { label: "6 - Extremely Severe - Extremely severe visual hallucinations.", score: 6 },
          { label: "7 - Continuous - Continuous visual hallucinations.", score: 7 }
        ]
      },
      {
        text: "9. Headache, Fullness in Head\nAsk: 'Does your head feel different? Does it feel like a tight band around your head?'",
        options: [
          { label: "0 - None - Not present.", score: 0 },
          { label: "1 - Very Mild - Very mild headache.", score: 1 },
          { label: "2 - Mild - Mild headache.", score: 2 },
          { label: "3 - Moderate - Moderate headache.", score: 3 },
          { label: "4 - Moderately Severe - Moderately severe headache.", score: 4 },
          { label: "5 - Severe - Severe headache.", score: 5 },
          { label: "6 - Very Severe - Very severe headache.", score: 6 },
          { label: "7 - Extremely Severe - Extremely severe headache.", score: 7 }
        ]
      },
      {
        text: "10. Orientation and Clouding of Sensorium\nAsk: 'What day is it? Where are you? Who am I?'",
        options: [
          { label: "0 - Oriented - Oriented and can do serial additions.", score: 0 },
          { label: "1 - Uncertain - Cannot do serial additions or uncertain of date.", score: 1 },
          { label: "2 - Disoriented Date <= 2d - Disoriented for date by no more than 2 calendar days.", score: 2 },
          { label: "3 - Disoriented Date > 2d - Disoriented for date by more than 2 calendar days.", score: 3 },
          { label: "4 - Disoriented Place/Person - Disoriented for place and/or person.", score: 4 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 67,
      ranges: [
        { min: 0, max: 9, severity: "Mild Withdrawal", interpretation: "Score 0-9: Mild withdrawal. Supportive care, hydration, oral thiamine. Symptom-triggered medication usually not required." },
        { min: 10, max: 15, severity: "Moderate Withdrawal", interpretation: "Score 10-15: Moderate withdrawal. Administer protocol-driven Benzodiazepines (e.g., Lorazepam 2 mg or Diazepam 10 mg PO)." },
        { min: 16, max: 67, severity: "Severe Withdrawal", interpretation: "Score 16+: Severe alcohol withdrawal. High risk of delirium tremens and seizures. ICU/monitored setting, IV Benzodiazepines." }
      ]
    }
  },
  {
    id: "cows",
    name: "COWS",
    fullName: "Clinical Opiate Withdrawal Scale",
    category: "substance",
    description: "11-item clinician-administered instrument for assessing opioid withdrawal severity to guide Buprenorphine induction.",
    estimatedTime: "3-5 min",
    questions: [
      {
        text: "1. Resting Pulse Rate (Measured after patient is resting for 1 minute)",
        options: [
          { label: "0 - Pulse <= 80 - Pulse rate 80 or below.", score: 0 },
          { label: "1 - Pulse 81-100 - Pulse rate 81 to 100 bpm.", score: 1 },
          { label: "2 - Pulse 101-120 - Pulse rate 101 to 120 bpm.", score: 2 },
          { label: "4 - Pulse > 120 - Pulse rate greater than 120 bpm.", score: 4 }
        ]
      },
      {
        text: "2. Sweating (Over past 1/2 hour not related to room temperature)",
        options: [
          { label: "0 - None - No report of chills or flushing.", score: 0 },
          { label: "1 - Subjective Chills - Subjective report of chills or flushing.", score: 1 },
          { label: "2 - Flushed / Moist - Flushed face or observable moistness on face.", score: 2 },
          { label: "3 - Beads of Sweat - Beads of sweat on brow or face.", score: 3 },
          { label: "4 - Sweat Streaming - Sweat streaming off face.", score: 4 }
        ]
      },
      {
        text: "3. Restlessness (Observed during interview)",
        options: [
          { label: "0 - Able to Sit Still - Able to sit still.", score: 0 },
          { label: "1 - Reports Difficulty - Reports difficulty sitting still, but is able to do so.", score: 1 },
          { label: "3 - Frequent Shifting - Frequent shifting or extraneous movements of legs/arms.", score: 3 },
          { label: "5 - Unable to Sit Still - Unable to sit still for more than a few seconds.", score: 5 }
        ]
      },
      {
        text: "4. Pupil Size",
        options: [
          { label: "0 - Normal / Pinned - Pupils pinned or normal size for room light.", score: 0 },
          { label: "1 - Possibly Larger - Pupils possibly larger than normal for room light.", score: 1 },
          { label: "2 - Moderately Dilated - Pupils moderately dilated.", score: 2 },
          { label: "5 - Extremely Dilated - Pupils extremely dilated; only a rim of iris is visible.", score: 5 }
        ]
      },
      {
        text: "5. Bone or Joint Aches (Score only additional opioid withdrawal pain)",
        options: [
          { label: "0 - None - Not present.", score: 0 },
          { label: "1 - Mild Diffuse Aches - Mild diffuse bone or joint aches.", score: 1 },
          { label: "2 - Severe Aching - Patient reports severe diffuse aching of joints/muscles.", score: 2 },
          { label: "4 - Rubbing Joints - Patient is rubbing joints and unable to sit still because of pain.", score: 4 }
        ]
      },
      {
        text: "6. Runny Nose or Tearing (Not accounted for by cold or allergies)",
        options: [
          { label: "0 - None - Not present.", score: 0 },
          { label: "1 - Nasal Stuffiness - Nasal stuffiness or unusually moist eyes.", score: 1 },
          { label: "2 - Running Nose - Nose running or tearing present.", score: 2 },
          { label: "4 - Constant Tears - Nose constantly running or tears streaming down cheeks.", score: 4 }
        ]
      },
      {
        text: "7. GI Upset (Over past 1/2 hour)",
        options: [
          { label: "0 - None - No GI symptoms.", score: 0 },
          { label: "1 - Cramps - Stomach cramps.", score: 1 },
          { label: "2 - Nausea / Loose Stool - Nausea or loose stool.", score: 2 },
          { label: "3 - Vomiting / Diarrhea - Vomiting or diarrhea.", score: 3 },
          { label: "5 - Multiple Episodes - Multiple episodes of diarrhea or vomiting.", score: 5 }
        ]
      },
      {
        text: "8. Tremor (Observation of outstretched hands)",
        options: [
          { label: "0 - No Tremor - No tremor.", score: 0 },
          { label: "1 - Felt Only - Tremor can be felt, but not seen.", score: 1 },
          { label: "2 - Slight Tremor - Slight tremor observable.", score: 2 },
          { label: "4 - Gross Tremor - Gross tremor or muscle twitching.", score: 4 }
        ]
      },
      {
        text: "9. Yawning (Observed during interview)",
        options: [
          { label: "0 - No Yawning - No yawning.", score: 0 },
          { label: "1 - Yawning 1-2 Times - Yawning once or twice during interview.", score: 1 },
          { label: "2 - Yawning 3+ Times - Yawning three or more times during interview.", score: 2 },
          { label: "4 - Frequent Yawning - Yawning several times per minute.", score: 4 }
        ]
      },
      {
        text: "10. Anxiety or Irritability",
        options: [
          { label: "0 - None - None.", score: 0 },
          { label: "1 - Increasing Irritability - Patient reports increasing irritability or anxiousness.", score: 1 },
          { label: "2 - Obviously Irritable - Patient is obviously irritable or anxious.", score: 2 },
          { label: "4 - Severe Anxiety - Patient shows severe anxiety; participating in interview with difficulty.", score: 4 }
        ]
      },
      {
        text: "11. Gooseflesh Skin (Goosebumps)",
        options: [
          { label: "0 - Smooth - Skin is smooth.", score: 0 },
          { label: "3 - Visible Piloerection - Piloerection felt or visible on arms/torso.", score: 3 },
          { label: "5 - Prominent Goosebumps - Prominent piloerection (goosebumps).", score: 5 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 48,
      ranges: [
        { min: 0, max: 4, severity: "Minimal Withdrawal", interpretation: "Score 0-4: Minimal opiate withdrawal. Hold Buprenorphine induction; re-assess later." },
        { min: 5, max: 12, severity: "Mild Opiate Withdrawal", interpretation: "Score 5-12: Mild withdrawal. Delay Buprenorphine induction until COWS > 12 to avoid precipitated withdrawal." },
        { min: 13, max: 24, severity: "Moderate Withdrawal", interpretation: "Score 13-24: Moderate opiate withdrawal. Safe to initiate Buprenorphine/Naloxone induction (e.g. 2-4 mg sublingual)." },
        { min: 25, max: 36, severity: "Moderately Severe Withdrawal", interpretation: "Score 25-36: Moderately severe withdrawal. Proceed with Buprenorphine induction; symptom management." },
        { min: 37, max: 48, severity: "Severe Opiate Withdrawal", interpretation: "Score 37+: Severe withdrawal. Immediate Buprenorphine induction and supportive care." }
      ]
    }
  },
  {
    id: "ybocs",
    name: "Y-BOCS",
    fullName: "Yale-Brown Obsessive Compulsive Scale",
    category: "anxiety",
    description: "10-item clinician-rated gold standard scale assessing severity of obsessive and compulsive symptoms.",
    estimatedTime: "10-15 min",
    options: [
      { label: "0 - None - No symptoms present; 0 hours per day." },
      { label: "1 - Mild - Less than 1 hour per day; minimal interference and distress." },
      { label: "2 - Moderate - 1 to 3 hours per day; definite interference but manageable." },
      { label: "3 - Severe - 3 to 8 hours per day; substantial impairment in daily functioning." },
      { label: "4 - Extreme - Greater than 8 hours per day; complete incapacitation." }
    ],
    subscales: [
      { id: "obsessions", name: "Obsessions Subscale", min: 0, max: 20 },
      { id: "compulsions", name: "Compulsions Subscale", min: 0, max: 20 }
    ],
    questions: [
      { text: "1. Time Occupied by Obsessive Thoughts\nHow much of your time is occupied by obsessive thoughts?", subscale: "obsessions" },
      { text: "2. Interference Due to Obsessive Thoughts\nHow much do your obsessive thoughts interfere with functioning?", subscale: "obsessions" },
      { text: "3. Distress Associated with Obsessive Thoughts\nHow much distress do your obsessive thoughts cause you?", subscale: "obsessions" },
      { text: "4. Resistance Against Obsessions\nHow much effort do you make to resist the obsessive thoughts?", subscale: "obsessions" },
      { text: "5. Degree of Control Over Obsessive Thoughts\nHow much control do you have over your obsessive thoughts?", subscale: "obsessions" },
      { text: "6. Time Spent Performing Compulsive Behaviors\nHow much time do you spend performing compulsive behaviors?", subscale: "compulsions" },
      { text: "7. Interference Due to Compulsive Behaviors\nHow much do your compulsive behaviors interfere with functioning?", subscale: "compulsions" },
      { text: "8. Distress Associated with Compulsive Behaviors\nHow would you feel if prevented from performing compulsions?", subscale: "compulsions" },
      { text: "9. Resistance Against Compulsions\nHow much effort do you make to resist compulsions?", subscale: "compulsions" },
      { text: "10. Degree of Control Over Compulsive Behavior\nHow much control do you have over compulsions?", subscale: "compulsions" }
    ],
    scoring: {
      type: "total",
      maxScore: 40,
      ranges: [
        { min: 0, max: 7, severity: "Subclinical OCD", interpretation: "Score 0-7: Subclinical OCD symptoms. No active treatment required." },
        { min: 8, max: 15, severity: "Mild OCD", interpretation: "Score 8-15: Mild OCD. Initiate Exposure and Response Prevention (ERP) CBT." },
        { min: 16, max: 23, severity: "Moderate OCD", interpretation: "Score 16-23: Moderate OCD. Initiate high-dose SSRI (e.g. Sertraline, Fluoxetine) + ERP CBT." },
        { min: 24, max: 31, severity: "Severe OCD", interpretation: "Score 24-31: Severe OCD. High-dose SSRI + Augmentation (Atypical Antipsychotic) + intensive ERP." },
        { min: 32, max: 40, severity: "Extreme OCD", interpretation: "Score 32-40: Extreme incapacitating OCD. Specialist OCD clinic, refractory protocols." }
      ]
    }
  },
  {
    id: "bfcrs",
    name: "BFCRS",
    fullName: "Bush-Francis Catatonia Rating Scale",
    category: "catatonia",
    description: "23-item standardized clinician rating scale for screening (items 1-14) and quantifying catatonia severity.",
    estimatedTime: "10 min",
    options: [
      { label: "0 - Absent - Sign is completely absent." },
      { label: "1 - Mild - Present occasionally or with mild intensity." },
      { label: "2 - Moderate - Present frequently with moderate severity." },
      { label: "3 - Severe - Present continuously with extreme severity." }
    ],
    questions: [
      "1. Excitement: Excessive motor activity, apparent purposeless, not influenced by external stimuli.",
      "2. Immobility/Stupor: Extreme hypoactivity, immobile, minimally responsive to stimuli.",
      "3. Mutism: Verbally unresponsive or minimal comprehension.",
      "4. Staring: Fixed gaze, little blinking, eyes open for extended periods.",
      "5. Posturing/Catalepsy: Spontaneous maintenance of posture for extended time.",
      "6. Grimacing: Maintenance of odd facial expressions.",
      "7. Echopraxia/Echolalia: Mimicking examiner's movements or speech.",
      "8. Stereotypy: Repetitive, non-goal-directed motor actions.",
      "9. Mannerisms: Odd, stilted purposeful movements.",
      "10. Verbigeration: Repetition of senseless phrases or sentences.",
      "11. Mitgehen: 'Angled' exaggeration of cooperation with examiner's touch.",
      "12. Waxy Flexibility: Resistance to positioning by examiner then maintenance of new position.",
      "13. Negativism: Resistance to instructions or attempt to move patient.",
      "14. Ambitendency: Patient appears stuck in indecisive movement.",
      "15. Automatic Obedience: Exaggerated cooperation with examiner's requests.",
      "16. Passive Obedience: Patient allows positioning without resistance.",
      "17. Perseveration: Repeated execution of an action after original stimulus passed.",
      "18. Combativeness: Direct physical aggression towards examiner/staff.",
      "19. Autonomic Abnormality: Temperature, BP, pulse fluctuations, diaphoresis.",
      "20. Grasp Reflex: Involuntary grasp upon light touch to palm.",
      "21. Gegenhalten: Equal and opposite resistance to passive limb movement.",
      "22. Myoclonus: Rapid involuntary muscle twitches.",
      "23. Intestinal Obstruction / Retention: Abdominal distension, constipation, urinary retention."
    ],
    scoring: {
      type: "total",
      maxScore: 69,
      ranges: [
        { min: 0, max: 0, severity: "No Catatonia", interpretation: "Score 0: Catatonia absent." },
        { min: 1, max: 5, severity: "Mild Catatonia", interpretation: "Score 1-5: Positive catatonia screening (>=2 items 1-14). Perform Lorazepam Challenge Test (1-2 mg IV/IM)." },
        { min: 6, max: 15, severity: "Moderate Catatonia", interpretation: "Score 6-15: Moderate catatonia. Initiate Lorazepam 6-12 mg/day in divided doses." },
        { min: 16, max: 69, severity: "Severe / Malignant Catatonia", interpretation: "Score 16+: Severe catatonia. Risk of Malignant Catatonia / NMS. Prepare for ECT (Electroconvulsive Therapy)." }
      ]
    }
  },
  {
    id: "cssrs-lifetime",
    name: "C-SSRS (Lifetime)",
    fullName: "Columbia-Suicide Severity Rating Scale — Lifetime / Baseline",
    category: "suicide",
    description: "Standardized baseline scale assessing lifetime history and past 12-month baseline of suicidal ideation, intent, and suicidal behaviors.",
    estimatedTime: "5 min",
    options: [
      { label: "0 - No - Behavior or ideation was NOT present.", score: 0 },
      { label: "1 - Yes - Behavior or ideation WAS present.", score: 1 }
    ],
    questions: [
      { text: "1. Wish to be Dead (Lifetime & Past 12 Months): Have you wished you were dead or wished you could go to sleep and not wake up?" },
      { text: "2. Suicidal Thoughts: Have you actually had any thoughts of killing yourself?" },
      { text: "3. Suicidal Thoughts with Method: Have you been thinking about how you might kill yourself?", dependsOn: { question: 1, value: 1 } },
      { text: "4. Suicidal Intent: Have you had these thoughts and had some intention of acting on them?", dependsOn: { question: 1, value: 1 } },
      { text: "5. Intent with Specific Plan: Have you started to work out or worked out the details of how to kill yourself?", dependsOn: { question: 1, value: 1 } },
      { text: "6. Actual Attempt (Lifetime & Past 3 Months): Have you ever done anything or started to do anything to end your life?" },
      { text: "7. Interrupted Attempt: Has there been a time when you were about to do something to end your life but someone stopped you?" },
      { text: "8. Aborted Attempt: Has there been a time when you were about to do something to end your life but you stopped yourself?" },
      { text: "9. Preparatory Acts: Have you taken any steps towards an attempt (e.g. buying pills, writing a note)?" },
      { text: "10. Suicidal Behavior in last 3 months: Have you engaged in any suicidal behavior in the past 3 months?" }
    ],
    scoring: {
      type: "cssrs",
      maxScore: 10,
      ranges: [
        { min: 0, max: 0, severity: "No Lifetime Risk", interpretation: "No lifetime suicidal ideation or behavior reported." },
        { min: 1, max: 2, severity: "Low Lifetime Risk", interpretation: "Passive suicidal ideation reported. Provide safety plan and routine outpatient follow-up." },
        { min: 3, max: 5, severity: "Moderate Lifetime Risk", interpretation: "Active suicidal ideation with method or intent. Initiate urgent safety planning and psychiatric evaluation." },
        { min: 6, max: 10, severity: "High Lifetime Risk - Emergency", interpretation: "Active suicidal intent with plan or recent suicidal behavior. Immediate emergency psychiatric admission and continuous 1-on-1 observation." }
      ]
    }
  },
  {
    id: "cssrs-acute",
    name: "C-SSRS (Acute / Since Last Visit)",
    fullName: "Columbia-Suicide Severity Rating Scale — Since Last Visit (Acute Risk)",
    category: "suicide",
    description: "Acute screening tool assessing suicidal ideation, intent, and behavior since the patient's last clinical contact or visit (ER / Inpatient protocol).",
    estimatedTime: "3 min",
    options: [
      { label: "0 - No - Behavior or ideation was NOT present since last visit.", score: 0 },
      { label: "1 - Yes - Behavior or ideation WAS present since last visit.", score: 1 }
    ],
    questions: [
      { text: "1. Wish to be Dead (Since Last Visit): Have you wished you were dead or wished you could go to sleep and not wake up?" },
      { text: "2. Active Suicidal Thoughts (Since Last Visit): Have you actually had any thoughts of killing yourself?" },
      { text: "3. Active Suicidal Thoughts with Method (Since Last Visit): Have you been thinking about how you might kill yourself?", dependsOn: { question: 1, value: 1 } },
      { text: "4. Suicidal Intent (Since Last Visit): Have you had these thoughts and had some intention of acting on them?", dependsOn: { question: 1, value: 1 } },
      { text: "5. Intent with Specific Plan (Since Last Visit): Have you started to work out or worked out the details of how to kill yourself?", dependsOn: { question: 1, value: 1 } },
      { text: "6. Actual Attempt Since Last Visit: Have you made a suicide attempt since your last visit?" },
      { text: "7. Interrupted Attempt Since Last Visit: Has anyone stopped you when you were about to end your life since last visit?" },
      { text: "8. Aborted Attempt Since Last Visit: Have you stopped yourself from a suicide attempt since last visit?" },
      { text: "9. Preparatory Acts Since Last Visit: Have you taken any steps or prepared to end your life since last visit?" },
      { text: "10. Non-Suicidal Self-Injurious Behavior (NSSI) Since Last Visit: Have you engaged in self-harm without suicidal intent since last visit?" }
    ],
    scoring: {
      type: "cssrs",
      maxScore: 10,
      ranges: [
        { min: 0, max: 0, severity: "No Acute Risk", interpretation: "No suicidal ideation or behavior since last clinical visit." },
        { min: 1, max: 2, severity: "Low Acute Risk", interpretation: "Passive suicidal ideation since last visit. Re-evaluate outpatient safety plan." },
        { min: 3, max: 5, severity: "Moderate Acute Risk", interpretation: "Active suicidal ideation since last visit. Immediate psychiatric consultation and line-of-sight observation." },
        { min: 6, max: 10, severity: "High Acute Risk - Emergency", interpretation: "Acute suicidal behavior or intent with plan since last visit. Immediate emergency room / 1-on-1 constant observation and emergency admission." }
      ]
    }
  },
  {
    id: "gad7",
    name: "GAD-7",
    fullName: "Generalized Anxiety Disorder (7-Item)",
    category: "anxiety",
    description: "7-item self-report questionnaire for screening and assessing severity of generalized anxiety disorder.",
    estimatedTime: "2-3 min",
    options: [
      { label: "0 - Not at all - Experienced 0 to 1 day over the past 2 weeks." },
      { label: "1 - Several days - Experienced 2 to 6 days over the past 2 weeks." },
      { label: "2 - More than half the days - Experienced 7 to 11 days over the past 2 weeks." },
      { label: "3 - Nearly every day - Experienced 12 to 14 days over the past 2 weeks." }
    ],
    questions: [
      "1. Feeling nervous, anxious, or on edge",
      "2. Not being able to stop or control worrying",
      "3. Worrying too much about different things",
      "4. Trouble relaxing",
      "5. Being so restless that it is hard to sit still",
      "6. Becoming easily annoyed or irritable",
      "7. Feeling afraid, as if something awful might happen"
    ],
    scoring: {
      type: "total",
      maxScore: 21,
      ranges: [
        { min: 0, max: 4, severity: "Minimal Anxiety", interpretation: "Score 0-4: Minimal anxiety. No active treatment indicated." },
        { min: 5, max: 9, severity: "Mild Anxiety", interpretation: "Score 5-9: Mild anxiety. Psychoeducation and watchful waiting." },
        { min: 10, max: 14, severity: "Moderate Anxiety", interpretation: "Score 10-14: Moderate anxiety. Consider CBT and/or SSRI/SNRI medication." },
        { min: 15, max: 21, severity: "Severe Anxiety", interpretation: "Score 15-21: Severe anxiety. Initiate pharmacotherapy and psychotherapy." }
      ]
    }
  },
  {
    id: "aims",
    name: "AIMS",
    fullName: "Abnormal Involuntary Movement Scale",
    category: "catatonia",
    description: "12-item clinician-rated scale to assess severity of tardive dyskinesia and extrapyramidal involuntary movements.",
    estimatedTime: "5-10 min",
    options: [
      { label: "0 - None - No involuntary movements observed." },
      { label: "1 - Minimal / Normal - Minimal or questionable involuntary movements; may be within normal physiological variation." },
      { label: "2 - Mild - Distinct involuntary movements present in 1 body area or mild in 2 areas." },
      { label: "3 - Moderate - Moderate involuntary movements causing noticeable motor disturbance." },
      { label: "4 - Severe - Severe, persistent involuntary movements causing significant disability." }
    ],
    questions: [
      "1. Facial and Oral Movements: Muscles of facial expression (e.g., brow, eyes, cheeks)",
      "2. Facial and Oral Movements: Lips and perioral area (e.g., puckering, pouting, smacking)",
      "3. Facial and Oral Movements: Jaw (e.g., biting, clenching, chewing, lateral movement)",
      "4. Facial and Oral Movements: Tongue (e.g., darting, tremor, protrusion)",
      "5. Extremity Movements: Upper extremities (arms, hands, fingers)",
      "6. Extremity Movements: Lower extremities (legs, feet, toes)",
      "7. Trunk Movements: Neck, shoulders, hips (e.g., rocking, twisting, pelvic gyrations)",
      "8. Global Judgment: Severity of abnormal movements overall",
      "9. Global Judgment: Incapacity due to abnormal movements",
      "10. Global Judgment: Patient's awareness of movements and distress",
      "11. Dental Status: Current dental condition / dentures",
      "12. Dental Status: Does patient usually wear dentures?"
    ],
    scoring: {
      type: "total",
      maxScore: 48,
      ranges: [
        { min: 0, max: 1, severity: "No Tardive Dyskinesia", interpretation: "Score 0-1: No evidence of tardive dyskinesia." },
        { min: 2, max: 7, severity: "Mild Tardive Dyskinesia", interpretation: "Score 2-7: Mild abnormal movements in 2 areas or moderate in 1 area. Monitor closely, evaluate VMAT2 inhibitor (Valbenazine/Deutetrabenazine)." },
        { min: 8, max: 15, severity: "Moderate Tardive Dyskinesia", interpretation: "Score 8-15: Moderate tardive dyskinesia. Reduce or switch offending antipsychotic; initiate VMAT2 inhibitor." },
        { min: 16, max: 48, severity: "Severe Tardive Dyskinesia", interpretation: "Score 16+: Severe tardive dyskinesia. Urgent neurological/psychiatric review, VMAT2 inhibitor therapy." }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = scales;
}

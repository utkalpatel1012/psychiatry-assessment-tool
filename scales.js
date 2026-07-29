const scales = [
  {
    id: "hama",
    name: "HAM-A",
    fullName: "Hamilton Anxiety Rating Scale",
    category: "anxiety",
    description: "14-item clinician-rated scale to evaluate severity of anxiety symptoms, distinguishing psychic and somatic anxiety.",
    estimatedTime: "5-10 min",
    options: [
      { label: "0 - Not present", score: 0 },
      { label: "1 - Mild", score: 1 },
      { label: "2 - Moderate", score: 2 },
      { label: "3 - Severe", score: 3 },
      { label: "4 - Very severe / Incapacitating", score: 4 }
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
    description: "24-item clinician-rated instrument assessing overall psychotic, affective, and behavioral symptoms (Overall & Gorham / Lukoff et al.).",
    estimatedTime: "10-15 min",
    options: [
      { label: "1 - Not Present", score: 1 },
      { label: "2 - Very Mild", score: 2 },
      { label: "3 - Mild", score: 3 },
      { label: "4 - Moderate", score: 4 },
      { label: "5 - Moderately Severe", score: 5 },
      { label: "6 - Severe", score: 6 },
      { label: "7 - Extremely Severe", score: 7 }
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
    id: "moca",
    name: "MoCA",
    fullName: "Montreal Cognitive Assessment",
    category: "cognitive",
    description: "30-point screening tool for Mild Cognitive Impairment (MCI) and early dementia across 8 cognitive domains (Nasreddine, 2005).",
    estimatedTime: "10 min",
    options: [
      { label: "0 - Incorrect / Absent", score: 0 },
      { label: "1 - Correct / Present", score: 1 }
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
      "16. Attention - Serial 7 Subtraction 5 (72 - 7 = 65)",
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
      { label: "1 - Rarely / Never (< 20%)", score: 1 },
      { label: "2 - Sometimes (21-40%)", score: 2 },
      { label: "3 - Frequently (41-60%)", score: 3 },
      { label: "4 - Mostly (61-80%)", score: 4 },
      { label: "5 - Always (81-100%)", score: 5 }
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
          { label: "0 - Never", score: 0 },
          { label: "1 - Monthly or less", score: 1 },
          { label: "2 - 2 to 4 times a month", score: 2 },
          { label: "3 - 2 to 3 times a week", score: 3 },
          { label: "4 - 4 or more times a week", score: 4 }
        ]
      },
      {
        text: "2. How many drinks containing alcohol do you have on a typical day when drinking?",
        options: [
          { label: "0 - 1 or 2", score: 0 },
          { label: "1 - 3 or 4", score: 1 },
          { label: "2 - 5 or 6", score: 2 },
          { label: "3 - 7 to 9", score: 3 },
          { label: "4 - 10 or more", score: 4 }
        ]
      },
      {
        text: "3. How often do you have 6 or more drinks on one occasion?",
        options: [
          { label: "0 - Never", score: 0 },
          { label: "1 - Less than monthly", score: 1 },
          { label: "2 - Monthly", score: 2 },
          { label: "3 - Weekly", score: 3 },
          { label: "4 - Daily or almost daily", score: 4 }
        ]
      },
      {
        text: "4. How often during the last year have you found that you were not able to stop drinking once you had started?",
        options: [
          { label: "0 - Never", score: 0 },
          { label: "1 - Less than monthly", score: 1 },
          { label: "2 - Monthly", score: 2 },
          { label: "3 - Weekly", score: 3 },
          { label: "4 - Daily or almost daily", score: 4 }
        ]
      },
      {
        text: "5. How often during the last year have you failed to do what was normally expected of you because of drinking?",
        options: [
          { label: "0 - Never", score: 0 },
          { label: "1 - Less than monthly", score: 1 },
          { label: "2 - Monthly", score: 2 },
          { label: "3 - Weekly", score: 3 },
          { label: "4 - Daily or almost daily", score: 4 }
        ]
      },
      {
        text: "6. How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
        options: [
          { label: "0 - Never", score: 0 },
          { label: "1 - Less than monthly", score: 1 },
          { label: "2 - Monthly", score: 2 },
          { label: "3 - Weekly", score: 3 },
          { label: "4 - Daily or almost daily", score: 4 }
        ]
      },
      {
        text: "7. How often during the last year have you had a feeling of guilt or remorse after drinking?",
        options: [
          { label: "0 - Never", score: 0 },
          { label: "1 - Less than monthly", score: 1 },
          { label: "2 - Monthly", score: 2 },
          { label: "3 - Weekly", score: 3 },
          { label: "4 - Daily or almost daily", score: 4 }
        ]
      },
      {
        text: "8. How often during the last year have you been unable to remember what happened the night before because of your drinking?",
        options: [
          { label: "0 - Never", score: 0 },
          { label: "1 - Less than monthly", score: 1 },
          { label: "2 - Monthly", score: 2 },
          { label: "3 - Weekly", score: 3 },
          { label: "4 - Daily or almost daily", score: 4 }
        ]
      },
      {
        text: "9. Have you or someone else been injured as a result of your drinking?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "2 - Yes, but not in the last year", score: 2 },
          { label: "4 - Yes, during the last year", score: 4 }
        ]
      },
      {
        text: "10. Has a relative, friend, doctor, or health worker been concerned about your drinking or suggested you cut down?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "2 - Yes, but not in the last year", score: 2 },
          { label: "4 - Yes, during the last year", score: 4 }
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
    description: "11-item validated self-report screening tool for common clinical sleep disorders (Roth et al., 2002).",
    estimatedTime: "4-6 min",
    options: [
      { label: "0 - Never (0 days/week)", score: 0 },
      { label: "1 - Sometimes (1-2 days/week)", score: 1 },
      { label: "2 - Usually (3-4 days/week)", score: 2 },
      { label: "3 - Always (5-7 days/week)", score: 3 }
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
    description: "21-item quantitative self-report measure of emotional states across Depression, Anxiety, and Stress (Lovibond & Lovibond, 1995).",
    estimatedTime: "5-7 min",
    options: [
      { label: "0 - Did not apply to me at all", score: 0 },
      { label: "1 - Applied to me to some degree / some of the time", score: 1 },
      { label: "2 - Applied to me to a considerable degree / good part of time", score: 2 },
      { label: "3 - Applied to me very much / most of the time", score: 3 }
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
    description: "4-item rating scale for drug-induced akathisia (motor restlessness) assessing objective and subjective components (Barnes, 1989).",
    estimatedTime: "3-5 min",
    questions: [
      {
        text: "1. Objective Akathisia (Observed motor restlessness while seated/standing)",
        options: [
          { label: "0 - Normal, no restless movements", score: 0 },
          { label: "1 - Mild restlessness, characteristic movements of legs/feet < half the time", score: 1 },
          { label: "2 - Moderate restlessness, characteristic movements > half the time", score: 2 },
          { label: "3 - Severe constant pacing or inability to remain seated", score: 3 }
        ]
      },
      {
        text: "2. Subjective Awareness of Restlessness (Patient's internal feeling)",
        options: [
          { label: "0 - Absence of inner restlessness", score: 0 },
          { label: "1 - Non-specific sense of inner restlessness", score: 1 },
          { label: "2 - Awareness of inability to keep legs still", score: 2 },
          { label: "3 - Intense compulsion to move legs continuously", score: 3 }
        ]
      },
      {
        text: "3. Subjective Distress Related to Restlessness",
        options: [
          { label: "0 - No distress", score: 0 },
          { label: "1 - Mild distress", score: 1 },
          { label: "2 - Moderate distress", score: 2 },
          { label: "3 - Severe distress / agony", score: 3 }
        ]
      },
      {
        text: "4. Global Clinical Impression of Akathisia",
        options: [
          { label: "0 - Akathisia absent", score: 0 },
          { label: "1 - Questionable akathisia", score: 1 },
          { label: "2 - Mild akathisia (Awareness + mild distress)", score: 2 },
          { label: "3 - Moderate akathisia", score: 3 },
          { label: "4 - Marked akathisia", score: 4 },
          { label: "5 - Severe akathisia (Constant pacing + severe agony)", score: 5 }
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
    description: "9-item self-report scale based on DSM-5 major depressive episode criteria for screening and measuring depression severity.",
    estimatedTime: "3 min",
    options: [
      { label: "0 - Not at all", score: 0 },
      { label: "1 - Several days", score: 1 },
      { label: "2 - More than half the days", score: 2 },
      { label: "3 - Nearly every day", score: 3 }
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
    description: "10-item clinician-rated scale sensitive to change in depression severity over treatment (Montgomery & Asberg, 1979).",
    estimatedTime: "5-8 min",
    options: [
      { label: "0 - Normal mood", score: 0 },
      { label: "1 - Slight", score: 1 },
      { label: "2 - Sad but brightens up", score: 2 },
      { label: "3 - Moderate", score: 3 },
      { label: "4 - Pervasive sadness; gloomy most of time", score: 4 },
      { label: "5 - Severe", score: 5 },
      { label: "6 - Extreme continuous misery", score: 6 }
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
        text: "8. Visual Disturbances\nAsk: 'Is the light too bright? Do you see things that aren't there?'",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Very mild sensitivity to light", score: 1 },
          { label: "2 - Mild sensitivity", score: 2 },
          { label: "3 - Moderate sensitivity", score: 3 },
          { label: "4 - Moderately severe visual hallucinations", score: 4 },
          { label: "5 - Severe visual hallucinations", score: 5 },
          { label: "6 - Extremely severe visual hallucinations", score: 6 },
          { label: "7 - Continuous visual hallucinations", score: 7 }
        ]
      },
      {
        text: "9. Headache, Fullness in Head\nAsk: 'Does your head feel different? Does it feel like a tight band around your head?'",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Very mild headache", score: 1 },
          { label: "2 - Mild headache", score: 2 },
          { label: "3 - Moderate headache", score: 3 },
          { label: "4 - Moderately severe headache", score: 4 },
          { label: "5 - Severe headache", score: 5 },
          { label: "6 - Very severe headache", score: 6 },
          { label: "7 - Extremely severe headache", score: 7 }
        ]
      },
      {
        text: "10. Orientation and Clouding of Sensorium\nAsk: 'What day is it? Where are you? Who am I?'",
        options: [
          { label: "0 - Oriented and can do serial additions", score: 0 },
          { label: "1 - Cannot do serial additions or uncertain of date", score: 1 },
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
          { label: "0 - Pulse rate 80 or below", score: 0 },
          { label: "1 - Pulse rate 81-100", score: 1 },
          { label: "2 - Pulse rate 101-120", score: 2 },
          { label: "4 - Pulse rate greater than 120", score: 4 }
        ]
      },
      {
        text: "2. Sweating (Over past 1/2 hour not related to room temperature)",
        options: [
          { label: "0 - No report of chills or flushing", score: 0 },
          { label: "1 - Subjective report of chills or flushing", score: 1 },
          { label: "2 - Flushed or observable moistness on face", score: 2 },
          { label: "3 - Beads of sweat on brow or face", score: 3 },
          { label: "4 - Sweat streaming off face", score: 4 }
        ]
      },
      {
        text: "3. Restlessness (Observed during interview)",
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
        text: "5. Bone or Joint Aches (If patient had pain previously, score only additional pain)",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Mild diffuse bone or joint aches", score: 1 },
          { label: "2 - Patient reports severe diffuse aching of joints/muscles", score: 2 },
          { label: "4 - Patient is rubbing joints and unable to sit still because of pain", score: 4 }
        ]
      },
      {
        text: "6. Runny Nose or Tearing (Not accounted for by cold or allergies)",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Nasal stuffiness or unusually moist eyes", score: 1 },
          { label: "2 - Nose running or tearing present", score: 2 },
          { label: "4 - Nose constantly running or tears streaming down cheeks", score: 4 }
        ]
      },
      {
        text: "7. GI Upset (Over past 1/2 hour)",
        options: [
          { label: "0 - No GI symptoms", score: 0 },
          { label: "1 - Stomach cramps", score: 1 },
          { label: "2 - Nausea or loose stool", score: 2 },
          { label: "3 - Vomiting or diarrhea", score: 3 },
          { label: "5 - Multiple episodes of diarrhea or vomiting", score: 5 }
        ]
      },
      {
        text: "8. Tremor (Observation of outstretched hands)",
        options: [
          { label: "0 - No tremor", score: 0 },
          { label: "1 - Tremor can be felt, but not seen", score: 1 },
          { label: "2 - Slight tremor observable", score: 2 },
          { label: "4 - Gross tremor or muscle twitching", score: 4 }
        ]
      },
      {
        text: "9. Yawning (Observed during interview)",
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
          { label: "2 - Patient is obviously irritable or anxious", score: 2 },
          { label: "4 - Patient shows severe anxiety, participating in interview with difficulty", score: 4 }
        ]
      },
      {
        text: "11. Gooseflesh Skin (Goosebumps)",
        options: [
          { label: "0 - Skin is smooth", score: 0 },
          { label: "3 - Piloerection felt or visible on arms/torso", score: 3 },
          { label: "5 - Prominent piloerection (goosebumps)", score: 5 }
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
    description: "10-item clinician-rated gold standard scale assessing severity of obsessive and compulsive symptoms (Goodman et al., 1989).",
    estimatedTime: "10-15 min",
    options: [
      { label: "0 - None", score: 0 },
      { label: "1 - Mild (less than 1 hr/day)", score: 1 },
      { label: "2 - Moderate (1 to 3 hrs/day)", score: 2 },
      { label: "3 - Severe (3 to 8 hrs/day)", score: 3 },
      { label: "4 - Extreme (greater than 8 hrs/day)", score: 4 }
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
      { label: "0 - Absent", score: 0 },
      { label: "1 - Mild / Present occasionally", score: 1 },
      { label: "2 - Moderate / Present frequently", score: 2 },
      { label: "3 - Severe / Present continuously", score: 3 }
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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = scales;
}

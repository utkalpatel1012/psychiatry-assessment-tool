const scales = [
  {
    id: "panss",
    name: "PANSS",
    fullName: "Positive and Negative Syndrome Scale",
    category: "psychosis",
    description: "30-item operationalized gold-standard scale for evaluating positive, negative, and general psychopathology in schizophrenia and psychotic disorders.",
    estimatedTime: "30-45 min",
    options: [
      { label: "1 - Absent - Definition does not apply; symptom is completely absent.", score: 1 },
      { label: "2 - Minimal - Questionable or subtle pathology; at upper limit of normal behavior.", score: 2 },
      { label: "3 - Mild - Symptom is present and causes mild distress, but no social/occupational impairment.", score: 3 },
      { label: "4 - Moderate - Symptom is clearly present and causes noticeable disruption in daily functioning.", score: 4 },
      { label: "5 - Moderate Severe - Serious disruption of functioning; requires close clinical supervision.", score: 5 },
      { label: "6 - Severe - Symptom dominates patient's life, severely limits functioning; inpatient care needed.", score: 6 },
      { label: "7 - Extreme - Grossly severe manifestation; patient is incapacitated or requires emergency containment.", score: 7 }
    ],
    subscales: [
      { id: "positive", name: "Positive Scale (P1-P7)", min: 7, max: 49 },
      { id: "negative", name: "Negative Scale (N1-N7)", min: 7, max: 49 },
      { id: "general", name: "General Psychopathology (G1-G16)", min: 16, max: 112 }
    ],
    questions: [
      { text: "P1. Delusions\n💡 Beginner Tip: Ask 'Do you feel people are watching you, talking about you, or trying to harm you?' Believing ungrounded thoughts impervious to logic.\n• 1: Absent\n• 3: Mild (1-2 unformed beliefs, does not affect behavior)\n• 5: Moderate Severe (Multiple fixed delusions, affects behavior)\n• 7: Extreme (Systematized bizarre delusions, completely dictates actions)", subscale: "positive" },
      { text: "P2. Conceptual Disorganization\n💡 Beginner Tip: Observe speech structure during conversation. Look for loose associations, tangentiality, or goal loss.\n• 1: Absent\n• 3: Mild (Occasional circumstantiality or tangentiality)\n• 5: Moderate Severe (Frequent loose associations, hard to follow)\n• 7: Extreme (Incoherent speech, word salad)", subscale: "positive" },
      { text: "P3. Hallucinatory Behavior\n💡 Beginner Tip: Ask 'Do you hear voices or see things others cannot see?' Observe if patient mutters to self or reacts to unseen stimuli.\n• 1: Absent\n• 3: Mild (Occasional non-imperative voices/hallucinations)\n• 5: Moderate Severe (Frequent voices interfering with concentration)\n• 7: Extreme (Continuous hallucinations dictating behavior)", subscale: "positive" },
      { text: "P4. Excitement\n💡 Beginner Tip: Observe motor agitation, hyper-reactivity, or emotional volatility during examination.\n• 1: Absent\n• 3: Mild (Slightly hyper-reactive, restless)\n• 5: Moderate Severe (Noticeable motor agitation, loud speech)\n• 7: Extreme (Frantic excitement, continuous pacing, violent potential)", subscale: "positive" },
      { text: "P5. Grandiosity\n💡 Beginner Tip: Ask 'Do you have special powers, extreme wealth, or a divine mission?'\n• 1: Absent\n• 3: Mild (Exaggerated self-opinion)\n• 5: Moderate Severe (Belief in special powers or connections)\n• 7: Extreme (Delusions of grandeur, claims to be deity or world leader)", subscale: "positive" },
      { text: "P6. Suspiciousness / Persecution\n💡 Beginner Tip: Ask 'Do you feel unsafe or that others harbor bad intentions towards you?'\n• 1: Absent\n• 3: Mild (Guarded, mildly suspicious)\n• 5: Moderate Severe (Frank persecutory beliefs, distrusts clinical staff)\n• 7: Extreme (Massive paranoid delusions, aggressive self-defense)", subscale: "positive" },
      { text: "P7. Hostility\n💡 Beginner Tip: Observe verbal abuse, sarcasm, threats, or physical aggression.\n• 1: Absent\n• 3: Mild (Sarcastic, irritable at times)\n• 5: Moderate Severe (Overtly hostile, shouting, threatening)\n• 7: Extreme (Physical assault, destructive behavior)", subscale: "positive" },
      { text: "N1. Blunted Affect\n💡 Beginner Tip: Observe facial expressiveness, vocal pitch inflection, and hand gestures.\n• 1: Absent (Normal affective range)\n• 3: Mild (Reduced facial expression and voice modulation)\n• 5: Moderate Severe (Flat affect, monotone voice, unresponsive)\n• 7: Extreme (Complete absence of emotional expression)", subscale: "negative" },
      { text: "N2. Emotional Withdrawal\n💡 Beginner Tip: Assess patient's emotional involvement and empathy during interaction.\n• 1: Absent\n• 3: Mild (Mildly detached)\n• 5: Moderate Severe (Clear emotional distance, indifferent to examiner)\n• 7: Extreme (Completely unapproachable, severe emotional isolation)", subscale: "negative" },
      { text: "N3. Poor Rapport\n💡 Beginner Tip: Evaluate eye contact, openness, and warmth during interview.\n• 1: Absent\n• 3: Mild (Strained eye contact, guarded)\n• 5: Moderate Severe (Avoids eye contact, lacks empathy/warmth)\n• 7: Extreme (Completely avoids interaction, turning away)", subscale: "negative" },
      { text: "N4. Passive / Apathetic Social Withdrawal\n💡 Beginner Tip: Ask family/caregivers about interest in hobbies, daily activities, and social contacts.\n• 1: Absent\n• 3: Mild (Reduced interest in social activities)\n• 5: Moderate Severe (Spends most of the day isolated in room)\n• 7: Extreme (Complete social withdrawal, ignores basic needs)", subscale: "negative" },
      { text: "N5. Difficulty in Abstract Thinking\n💡 Beginner Tip: Test proverbs (e.g. 'What does a rolling stone gathers no moss mean?') or similarities ('How are an apple and banana alike?').\n• 1: Absent (Abstract interpretation)\n• 3: Mild (Slightly concrete interpretation)\n• 5: Moderate Severe (Strictly concrete answers)\n• 7: Extreme (Unable to comprehend abstract concepts)", subscale: "negative" },
      { text: "N6. Lack of Spontaneity and Flow of Conversation\n💡 Beginner Tip: Observe fluidity of speech. Does patient offer spontaneous information or only brief 1-word answers?\n• 1: Absent\n• 3: Mild (Hesitant speech, brief answers)\n• 5: Moderate Severe (Poverty of speech, long response latency)\n• 7: Extreme (Mute or near-mute communication)", subscale: "negative" },
      { text: "N7. Stereotyped Thinking\n💡 Beginner Tip: Listen for repetitive themes or rigid fixated thoughts during conversation.\n• 1: Absent\n• 3: Mild (Returns to same topic 1-2 times)\n• 5: Moderate Severe (Fixated on narrow set of repetitive ideas)\n• 7: Extreme (Thought content restricted to single perseverative phrase)", subscale: "negative" },
      { text: "G1. Somatic Concern\n💡 Beginner Tip: Ask 'Do you worry about your physical health or bodily organs?'\n• 1: Absent\n• 3: Mild (Mild worry about physical health)\n• 5: Moderate Severe (Preoccupied with somatic complaints or delusion of illness)\n• 7: Extreme (Bizarre somatic delusions, e.g., organs rotting)", subscale: "general" },
      { text: "G2. Anxiety\n💡 Beginner Tip: Assess subjective nervousness, panic, or autonomic arousal.\n• 1: Absent\n• 3: Mild (Occasional worry or apprehension)\n• 5: Moderate Severe (Persistent anxiety, physical restlessness)\n• 7: Extreme (Incapacitating panic, severe anxiety state)", subscale: "general" },
      { text: "G3. Guilt Feelings\n💡 Beginner Tip: Ask 'Do you blame yourself for things that went wrong in the past?'\n• 1: Absent\n• 3: Mild (Mild self-reproach)\n• 5: Moderate Severe (Preoccupied with past minor errors, feels sinful)\n• 7: Extreme (Delusions of guilt, demands punishment)", subscale: "general" },
      { text: "G4. Tension\n💡 Beginner Tip: Observe physical signs of tension: hand tremors, jaw clenching, restless fidgeting.\n• 1: Absent\n• 3: Mild (Mild fidgeting or muscle tension)\n• 5: Moderate Severe (Visible trembling, inability to sit comfortably)\n• 7: Extreme (Severe physical agitation, continuous tremor)", subscale: "general" },
      { text: "G5. Mannerisms and Posturing\n💡 Beginner Tip: Observe odd physical postures, repetitive hand movements, or ritualistic gestures.\n• 1: Absent\n• 3: Mild (Slightly stilted mannerisms)\n• 5: Moderate Severe (Noticeable odd postures or ritualistic movements)\n• 7: Extreme (Bizarre maintained postures for extended time)", subscale: "general" },
      { text: "G6. Depression\n💡 Beginner Tip: Ask 'Do you feel sad, hopeless, or helpless about your life?'\n• 1: Absent\n• 3: Mild (Mild despondency)\n• 5: Moderate Severe (Persistent sadness, tearfulness, worthlessness)\n• 7: Extreme (Profound depression, helpless despair)", subscale: "general" },
      { text: "G7. Motor Retardation\n💡 Beginner Tip: Observe slowness of physical movement, walk, and response rate.\n• 1: Absent\n• 3: Mild (Slightly sluggish movements)\n• 5: Moderate Severe (Noticeable slowness in walking and talking)\n• 7: Extreme (Severe stuporous slowing, minimal movement)", subscale: "general" },
      { text: "G8. Uncooperativeness\n💡 Beginner Tip: Observe willingness to comply with interview, examination, and treatment.\n• 1: Absent\n• 3: Mild (Reluctant to answer certain questions)\n• 5: Moderate Severe (Active refusal to comply with routine procedures)\n• 7: Extreme (Hostile refusal, physically resisting evaluation)", subscale: "general" },
      { text: "G9. Unusual Thought Content\n💡 Beginner Tip: Listen for strange, peculiar, or non-delusional bizarre ideas.\n• 1: Absent\n• 3: Mild (Slightly unorthodox beliefs)\n• 5: Moderate Severe (Prominent unusual or magical thinking)\n• 7: Extreme (Bizarre, grotesque ideas dominating mind)", subscale: "general" },
      { text: "G10. Disorientation\n💡 Beginner Tip: Test orientation to time (date/year), place (hospital/city), and person.\n• 1: Absent (Fully oriented)\n• 3: Mild (Uncertain of exact date by 1-2 days)\n• 5: Moderate Severe (Disoriented to place or year)\n• 7: Extreme (Completely disoriented to time, place, and self)", subscale: "general" },
      { text: "G11. Poor Attention\n💡 Beginner Tip: Observe if patient gets distracted by outside noises or internal thoughts during questions.\n• 1: Absent\n• 3: Mild (Mildly distractible)\n• 5: Moderate Severe (Frequent loss of focus, needs questions repeated)\n• 7: Extreme (Incapable of sustaining attention for 1 minute)", subscale: "general" },
      { text: "G12. Lack of Judgment and Insight\n💡 Beginner Tip: Ask 'Do you believe you have a mental health condition? Do you need treatment?'\n• 1: Absent (Full insight)\n• 3: Mild (Acknowledges stress but minimizes illness)\n• 5: Moderate Severe (Denies mental illness, attributes problems to others)\n• 7: Extreme (Total denial of illness, refuses all treatment)", subscale: "general" },
      { text: "G13. Disturbance of Volition\n💡 Beginner Tip: Assess drive to initiate and complete basic daily goal-directed tasks.\n• 1: Absent\n• 3: Mild (Mild procrastination or hesitation)\n• 5: Moderate Severe (Needs prompting to start daily activities/hygiene)\n• 7: Extreme (Complete apathy, unable to initiate basic self-care)", subscale: "general" },
      { text: "G14. Poor Impulse Control\n💡 Beginner Tip: Ask family/staff about unpredictable, impulsive, or reckless actions.\n• 1: Absent\n• 3: Mild (Mild verbal impulsivity)\n• 5: Moderate Severe (Acts on impulse without considering safety)\n• 7: Extreme (Dangerous physical impulsivity, erratic outbursts)", subscale: "general" },
      { text: "G15. Preoccupation\n💡 Beginner Tip: Observe if patient is absorbed in internal daydreams, fantasies, or worries.\n• 1: Absent\n• 3: Mild (Occasionally preoccupied)\n• 5: Moderate Severe (Absorbed in internal world, ignores examiner)\n• 7: Extreme (Total absorption in internal autistic fantasy)", subscale: "general" },
      { text: "G16. Active Social Avoidance\n💡 Beginner Tip: Ask if patient actively avoids people due to fear, paranoia, or discomfort.\n• 1: Absent\n• 3: Mild (Prefers being alone)\n• 5: Moderate Severe (Actively flees social interactions)\n• 7: Extreme (Refuses all contact, locks self away due to paranoia)", subscale: "general" }
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
        text: "1. Elevated Mood\n💡 Beginner Tip: Assess subjective euphoria and observed mood elevation during interview.",
        options: [
          { label: "0 - Absent - Normal euthymic mood; no elevation or euphoria.", score: 0 },
          { label: "1 - Mild / Possible Elevation - Mildly optimistic or cheerful above baseline on probing.", score: 1 },
          { label: "2 - Definite Elevation - Visibly cheerful, optimistic, self-confident.", score: 2 },
          { label: "3 - Inappropriate Elevation - Excessive laughter, inappropriate humor, grandiose affect.", score: 3 },
          { label: "4 - Euphoric - Extreme elation, singing, inappropriate laughter, completely euphoric.", score: 4 }
        ]
      },
      {
        text: "2. Increased Motor Activity-Energy\n💡 Beginner Tip: Observe physical restlessness, hand gestures, pacing, and energy level.",
        options: [
          { label: "0 - Normal - Normal motor activity and physical energy.", score: 0 },
          { label: "1 - Mild Increase - Subjectively energetic, slightly animated.", score: 1 },
          { label: "2 - Animated - Expressive hand gestures, rapid motor movements.", score: 2 },
          { label: "3 - Excessive Energy - Restless, shifts position frequently, hyperactive at times.", score: 3 },
          { label: "4 - Motor Excitement - Continuous pacing, hyperactive, unable to remain seated.", score: 4 }
        ]
      },
      {
        text: "3. Sexual Interest\n💡 Beginner Tip: Ask about changes in libido, sexual thoughts, or hypersexual behavior.",
        options: [
          { label: "0 - Normal - Normal or unchanged sexual drive.", score: 0 },
          { label: "1 - Mild Increase - Mild increase in sexual interest on questioning.", score: 1 },
          { label: "2 - Definite Increase - Definite subjective increase in sexual thoughts or drive.", score: 2 },
          { label: "3 - Hypersexual - Spontaneously discusses sexual topics; flirtatious conduct.", score: 3 },
          { label: "4 - Overt Hypersexuality - Overt sexual advances, remarks, or inappropriate sexual behavior.", score: 4 }
        ]
      },
      {
        text: "4. Sleep\n💡 Beginner Tip: Ask 'How many hours did you sleep last night? Did you feel rested?'",
        options: [
          { label: "0 - Normal - No decrease in sleep duration.", score: 0 },
          { label: "1 - Slightly Decreased - Sleeping up to 1 hour less than baseline.", score: 1 },
          { label: "2 - Moderately Decreased - Sleeping 1 to 2 hours less than baseline without fatigue.", score: 2 },
          { label: "3 - Markedly Decreased - Sleeping > 2 hours less than baseline without feeling tired.", score: 3 },
          { label: "4 - Denies Need - Denies need for sleep; stays awake all night with high energy.", score: 4 }
        ]
      },
      {
        text: "5. Irritability (Double Weighted)\n💡 Beginner Tip: Evaluate tension, sharp responses, or hostility towards examiner.",
        options: [
          { label: "0 - Absent - Calm, un-irritable affect.", score: 0 },
          { label: "2 - Mild Tension - Mildly tense or irritable at times on probing.", score: 2 },
          { label: "4 - Irritable - Irritable during interview; abrupt answers, easily annoyed.", score: 4 },
          { label: "6 - Frequently Hostile - Frequently hostile, argumentative, or sarcastic.", score: 6 },
          { label: "8 - Uncooperoperative / Hostile - Extremely hostile, aggressive, interview impossible.", score: 8 }
        ]
      },
      {
        text: "6. Speech (Rate and Amount - Double Weighted)\n💡 Beginner Tip: Assess speech velocity, volume, and push of speech.",
        options: [
          { label: "0 - Normal - Normal speech rate, volume, and fluidity.", score: 0 },
          { label: "2 - Talkative - Talkative at times; increased speech rate.", score: 2 },
          { label: "4 - Rapid Speech - Rapid rate; loquacious; difficult to interrupt.", score: 4 },
          { label: "6 - Push of Speech - Continuous push of speech; hard to interrupt.", score: 6 },
          { label: "8 - Pressure of Speech - Extreme pressure of speech; loud, rapid, impossible to interrupt.", score: 8 }
        ]
      },
      {
        text: "7. Language-Thought Disorder\n💡 Beginner Tip: Listen for flight of ideas, tangentiality, rhyming, or incoherence.",
        options: [
          { label: "0 - Normal - Coherent, goal-directed thought process.", score: 0 },
          { label: "1 - Circumstantial - Circumstantial; occasionally distractible.", score: 1 },
          { label: "2 - Flight of Ideas - Flight of ideas; tangentiality; punning or rhyming speech.", score: 2 },
          { label: "3 - Incoherent - Incoherent speech; frequent loose associations.", score: 3 },
          { label: "4 - Word Salad - Complete incoherence; neologisms; word salad.", score: 4 }
        ]
      },
      {
        text: "8. Thought Content (Double Weighted)\n💡 Beginner Tip: Assess grandiose plans, special abilities, or delusional ideas.",
        options: [
          { label: "0 - Normal - Realistic, normal thought content.", score: 0 },
          { label: "2 - Special Plans - Grand goals, special plans, or heightened self-importance.", score: 2 },
          { label: "4 - Special Powers - Believes has special powers, connections, or genius intellect.", score: 4 },
          { label: "6 - Delusions of Grandeur - Frank delusions of grandeur, religious or persecutory beliefs.", score: 6 },
          { label: "8 - Delusional Dominance - Delusions dominate; hallucinations or extreme paranoia.", score: 8 }
        ]
      },
      {
        text: "9. Disruptive-Aggressive Behavior (Double Weighted)\n💡 Beginner Tip: Observe vocal volume, argumentativeness, or physical destruction.",
        options: [
          { label: "0 - Absent - Cooperative, peaceful behavior.", score: 0 },
          { label: "2 - Loud - Loud voice at times; slightly disruptive.", score: 2 },
          { label: "4 - Demanding - Demanding, loud, argumentative during interaction.", score: 4 },
          { label: "6 - Threatening - Threatening staff or others; property destruction.", score: 6 },
          { label: "8 - Physical Assault - Physical assault; violent behavior towards staff or self.", score: 8 }
        ]
      },
      {
        text: "10. Appearance\n💡 Beginner Tip: Observe clothing choice, grooming, makeup, and eccentric style.",
        options: [
          { label: "0 - Appropriate - Well-groomed, appropriate dress.", score: 0 },
          { label: "1 - Slightly Unkempt - Slightly unkempt or slightly over-dressed.", score: 1 },
          { label: "2 - Garish / Overdressed - Garish makeup; bright, mismatched or eccentric clothing.", score: 2 },
          { label: "3 - Disheveled - Disheveled; inappropriate clothing for setting/weather.", score: 3 },
          { label: "4 - Bizarre - Extremely unkempt; bizarre decorations, symbols, or nakedness.", score: 4 }
        ]
      },
      {
        text: "11. Insight\n💡 Beginner Tip: Ask 'Do you feel you are currently experiencing a mood episode or illness?'",
        options: [
          { label: "0 - Full Insight - Admits illness and necessity of psychiatric treatment.", score: 0 },
          { label: "1 - Partial Insight - Admits change in mood, but minimizes illness.", score: 1 },
          { label: "2 - External Attribution - Admits symptoms, but blames external stress or others.", score: 2 },
          { label: "3 - Denies Illness - Admits change in behavior, but denies mental illness.", score: 3 },
          { label: "4 - Total Denial - Total denial of any illness; refuses evaluation/treatment.", score: 4 }
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
    description: "Standard 17-item clinician-rated instrument for assessing depression severity in adults with explicit item-by-item response anchors.",
    estimatedTime: "15-20 min",
    questions: [
      {
        text: "1. Depressed Mood (Sadness, hopelessness, helplessness, worthlessness)\n💡 Beginner Tip: Ask 'How have you been feeling emotionally over the past week?'",
        options: [
          { label: "0 - Absent - Mood is normal; no sadness reported.", score: 0 },
          { label: "1 - Mild - Expresses feelings only on questioning.", score: 1 },
          { label: "2 - Moderate - Spontaneously reports feeling sad, gloomy, or hopeless.", score: 2 },
          { label: "3 - Severe - Non-verbal signs of depression (facial expression, posture, weeping).", score: 3 },
          { label: "4 - Very Severe - Patient reports virtually only these feelings in verbal & non-verbal communication.", score: 4 }
        ]
      },
      {
        text: "2. Feelings of Guilt\n💡 Beginner Tip: Ask 'Do you feel you have let people down or done something wrong?'",
        options: [
          { label: "0 - Absent - No guilt or self-reproach.", score: 0 },
          { label: "1 - Mild - Self-reproach, feels he/she has let people down.", score: 1 },
          { label: "2 - Moderate - Preoccupied with guilt or past errors.", score: 2 },
          { label: "3 - Severe - Present illness is considered a punishment for past misdeeds.", score: 3 },
          { label: "4 - Very Severe - Hears accusatory or denunciatory voices / delusions of guilt.", score: 4 }
        ]
      },
      {
        text: "3. Suicide\n💡 Beginner Tip: Ask 'Have you felt that life is not worth living or had thoughts of harming yourself?'",
        options: [
          { label: "0 - Absent - No suicidal ideation.", score: 0 },
          { label: "1 - Mild - Feels life is not worth living.", score: 1 },
          { label: "2 - Moderate - Wishes he/she were dead or any thoughts of possible death.", score: 2 },
          { label: "3 - Severe - Suicidal ideas or gestures.", score: 3 },
          { label: "4 - Very Severe - Active suicide attempt.", score: 4 }
        ]
      },
      {
        text: "4. Insomnia - Early (Initial Insomnia)\n💡 Beginner Tip: Ask 'Do you have difficulty falling asleep at night?'",
        options: [
          { label: "0 - Absent - No difficulty falling asleep.", score: 0 },
          { label: "1 - Mild - Complains of occasional difficulty falling asleep (> 30 mins).", score: 1 },
          { label: "2 - Severe - Complains of nightly difficulty falling asleep.", score: 2 }
        ]
      },
      {
        text: "5. Insomnia - Middle\n💡 Beginner Tip: Ask 'Do you wake up during the middle of the night?'",
        options: [
          { label: "0 - Absent - No middle-of-night awakening.", score: 0 },
          { label: "1 - Mild - Complains of being restless and disturbed during the night.", score: 1 },
          { label: "2 - Severe - Waking during the night; any getting out of bed (except to void).", score: 2 }
        ]
      },
      {
        text: "6. Insomnia - Late (Terminal Insomnia)\n💡 Beginner Tip: Ask 'Do you wake up early in the morning and cannot fall back asleep?'",
        options: [
          { label: "0 - Absent - No early morning awakening.", score: 0 },
          { label: "1 - Mild - Waking in early hours of morning but goes back to sleep.", score: 1 },
          { label: "2 - Severe - Unable to fall asleep again if gets out of bed.", score: 2 }
        ]
      },
      {
        text: "7. Work and Activities\n💡 Beginner Tip: Ask 'How has your drive and pleasure in work or hobbies been?'",
        options: [
          { label: "0 - Normal - No difficulty or reduction in activities.", score: 0 },
          { label: "1 - Mild - Feelings of incapacity, fatigue or weakness related to activities.", score: 1 },
          { label: "2 - Moderate - Loss of interest in activity, hobbies or work (reported or observed).", score: 2 },
          { label: "3 - Severe - Decrease in actual time spent in activity or decrease in productivity.", score: 3 },
          { label: "4 - Very Severe - Stopped work because of present illness; complete inactivity.", score: 4 }
        ]
      },
      {
        text: "8. Retardation (Slowness of thought and speech)\n💡 Beginner Tip: Observe slowness of thought, speech, and movement during interview.",
        options: [
          { label: "0 - Normal - Normal speed of thought and speech.", score: 0 },
          { label: "1 - Mild - Slight retardation at interview.", score: 1 },
          { label: "2 - Moderate - Obvious retardation at interview.", score: 2 },
          { label: "3 - Severe - Interview difficult; long delays in answering.", score: 3 },
          { label: "4 - Very Severe - Complete stupor.", score: 4 }
        ]
      },
      {
        text: "9. Agitation\n💡 Beginner Tip: Observe motor restlessness, hand-wringing, pacing during examination.",
        options: [
          { label: "0 - None - Calm, no agitation.", score: 0 },
          { label: "1 - Mild - Fidgetiness, shifting in seat.", score: 1 },
          { label: "2 - Moderate - Playing with hands, hair, or clothes.", score: 2 },
          { label: "3 - Severe - Moving about, cannot sit still.", score: 3 },
          { label: "4 - Very Severe - Hand-wringing, nail biting, hair pulling, pacing.", score: 4 }
        ]
      },
      {
        text: "10. Anxiety - Psychic\n💡 Beginner Tip: Ask 'Do you feel tense, irritable, or worried about minor things?'",
        options: [
          { label: "0 - Absent - No psychic anxiety.", score: 0 },
          { label: "1 - Mild - Subjective tension and irritability.", score: 1 },
          { label: "2 - Moderate - Worrying about minor matters.", score: 2 },
          { label: "3 - Severe - Apprehensive attitude apparent in face or speech.", score: 3 },
          { label: "4 - Very Severe - Fears expressed without prompting.", score: 4 }
        ]
      },
      {
        text: "11. Anxiety - Somatic\n💡 Beginner Tip: Ask about physical signs: dry mouth, gas, indigestion, palpitations, hyperventilation.",
        options: [
          { label: "0 - Absent - No somatic anxiety.", score: 0 },
          { label: "1 - Mild - Mild somatic symptoms.", score: 1 },
          { label: "2 - Moderate - Moderate somatic symptoms.", score: 2 },
          { label: "3 - Severe - Severe somatic symptoms.", score: 3 },
          { label: "4 - Incapacitating - Incapacitating somatic anxiety.", score: 4 }
        ]
      },
      {
        text: "12. Somatic Symptoms - Gastrointestinal\n💡 Beginner Tip: Ask 'How is your appetite? Do you have heavy feelings in stomach?'",
        options: [
          { label: "0 - None - Normal appetite and GI function.", score: 0 },
          { label: "1 - Mild - Loss of appetite but eats without encouragement.", score: 1 },
          { label: "2 - Severe - Difficulty eating without urging; heavy feeling in abdomen.", score: 2 }
        ]
      },
      {
        text: "13. Somatic Symptoms - General\n💡 Beginner Tip: Ask 'Do you have heaviness in limbs, backaches, or muscle fatigability?'",
        options: [
          { label: "0 - None - No general physical heaviness or pain.", score: 0 },
          { label: "1 - Mild - Heaviness in limbs, back or head; muscle aches, loss of energy.", score: 1 },
          { label: "2 - Severe - Any clear symptom rated as severe.", score: 2 }
        ]
      },
      {
        text: "14. Genital Symptoms\n💡 Beginner Tip: Ask 'Have you noticed any change in sexual interest or menstrual function?'",
        options: [
          { label: "0 - Absent - Normal libido and sexual function.", score: 0 },
          { label: "1 - Mild - Mild reduction in sexual interest.", score: 1 },
          { label: "2 - Severe - Severe loss of libido / menstrual disturbance.", score: 2 }
        ]
      },
      {
        text: "15. Hypochondriasis\n💡 Beginner Tip: Ask 'Are you excessively worried about your physical health?'",
        options: [
          { label: "0 - Not Present - No hypochondriacal thoughts.", score: 0 },
          { label: "1 - Mild - Self-absorption in physical symptoms.", score: 1 },
          { label: "2 - Moderate - Preoccupation with physical health.", score: 2 },
          { label: "3 - Severe - Strong convictions of physical illness.", score: 3 },
          { label: "4 - Very Severe - Hypochondriacal delusions.", score: 4 }
        ]
      },
      {
        text: "16. Loss of Weight\n💡 Beginner Tip: Rate by history or actual recorded weight loss.",
        options: [
          { label: "0 - No Weight Loss - No weight loss reported.", score: 0 },
          { label: "1 - Slight Weight Loss - Probable weight loss associated with present illness (< 1 kg/wk).", score: 1 },
          { label: "2 - Definite Weight Loss - Definite weight loss (> 1 kg/wk).", score: 2 }
        ]
      },
      {
        text: "17. Insight\n💡 Beginner Tip: Ask 'Do you realize that you are experiencing depression/illness?'",
        options: [
          { label: "0 - Full Insight - Acknowledges being depressed and ill.", score: 0 },
          { label: "1 - Partial Insight - Acknowledges illness but attributes to bad food, climate, overwork, etc.", score: 1 },
          { label: "2 - Total Denial - Denies being ill at all.", score: 2 }
        ]
      }
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
      { label: "0 - Not Present - Symptom is completely absent.", score: 0 },
      { label: "1 - Mild - Occasional or mild intensity; minor tension or worry without daily dysfunction.", score: 1 },
      { label: "2 - Moderate - Symptom occurs frequently; produces noticeable distress and mild interference with work or social activities.", score: 2 },
      { label: "3 - Severe - Symptom is continuous or high-intensity; causes marked distress and significant functional impairment.", score: 3 },
      { label: "4 - Very Severe / Incapacitating - Extreme, continuous, or overwhelming manifestation; incapacitates daily functioning.", score: 4 }
    ],
    subscales: [
      { id: "psychic", name: "Psychic Anxiety", min: 0, max: 28 },
      { id: "somatic", name: "Somatic Anxiety", min: 0, max: 28 }
    ],
    questions: [
      { text: "1. Anxious Mood\n💡 Beginner Tip: Ask 'Do you worry a lot or feel that something terrible is about to happen?'\nIncludes: Worries, anticipation of worst, fearful anticipation, irritability.", subscale: "psychic" },
      { text: "2. Tension\n💡 Beginner Tip: Observe startle response, trembling, or moved to tears easily.\nIncludes: Feelings of tension, fatigability, startle response, moved to tears easily, trembling, restlessness.", subscale: "psychic" },
      { text: "3. Fears\n💡 Beginner Tip: Ask about phobic fears: dark, strangers, crowds, left alone, traffic.", subscale: "psychic" },
      { text: "4. Insomnia\n💡 Beginner Tip: Ask 'Do you have trouble sleeping or wake up feeling unrefreshed?'\nIncludes: Difficulty falling asleep, broken sleep, nightmares, fatigue on waking.", subscale: "psychic" },
      { text: "5. Intellectual (Cognitive)\n💡 Beginner Tip: Ask 'Is it hard to concentrate or remember things?'\nIncludes: Difficulty in concentration, poor memory.", subscale: "psychic" },
      { text: "6. Depressed Mood\n💡 Beginner Tip: Ask 'Have you lost interest in activities you usually enjoy?'\nIncludes: Loss of interest, lack of pleasure, diurnal swing, early waking.", subscale: "psychic" },
      { text: "7. Somatic (Muscular)\n💡 Beginner Tip: Ask 'Do you get muscle aches, jaw clenching, or muscle twitches?'\nIncludes: Muscle aches, stiffness, myoclonic jerks, teeth grinding, unsteady voice.", subscale: "somatic" },
      { text: "8. Somatic (Sensory)\n💡 Beginner Tip: Ask about ringing ears, blurred vision, hot/cold flushes, skin pricking sensations.", subscale: "somatic" },
      { text: "9. Cardiovascular Symptoms\n💡 Beginner Tip: Ask 'Do you feel your heart racing, pounding, or chest pain when anxious?'\nIncludes: Tachycardia, palpitations, chest pain, throbbing vessels, fainting feelings.", subscale: "somatic" },
      { text: "10. Respiratory Symptoms\n💡 Beginner Tip: Ask 'Do you feel a tight chest, choking sensation, or shortness of breath?'\nIncludes: Pressure in chest, choking feelings, sighing, dyspnea.", subscale: "somatic" },
      { text: "11. Gastrointestinal Symptoms\n💡 Beginner Tip: Ask about stomach burning, nausea, loose bowels, or swallowing difficulty.", subscale: "somatic" },
      { text: "12. Genitourinary Symptoms\n💡 Beginner Tip: Ask about urinary frequency, urgency, or loss of sexual drive.", subscale: "somatic" },
      { text: "13. Autonomic Symptoms\n💡 Beginner Tip: Observe dry mouth, flushing, cold sweats, goosebumps, tension headaches.", subscale: "somatic" },
      { text: "14. Behavior at Interview\n💡 Beginner Tip: Observe examiner-rated signs: hand tremors, fidgeting, furrowed brow, strained voice.", subscale: "psychic" }
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
      { label: "1 - Not Present - Symptom is completely absent or normal baseline.", score: 1 },
      { label: "2 - Very Mild - Questionable or subtle pathology; barely perceptible.", score: 2 },
      { label: "3 - Mild - Present but causes minimal distress or impairment.", score: 3 },
      { label: "4 - Moderate - Clearly present; causes moderate distress or noticeable functional interference.", score: 4 },
      { label: "5 - Moderately Severe - Prominent symptom; noticeable disruption of social or occupational roles.", score: 5 },
      { label: "6 - Severe - Severe symptom expression; requires close psychiatric supervision.", score: 6 },
      { label: "7 - Extremely Severe - Incapacitating severity; requires emergency containment or intensive inpatient care.", score: 7 }
    ],
    questions: [
      "1. Somatic Concern: Excessive concern over bodily health, fears of physical illness.\n💡 Beginner Tip: Rated from patient self-report of bodily worries.",
      "2. Anxiety: Worry, apprehension, or fearful anticipation concerning present or future.\n💡 Beginner Tip: Rated from patient report of tension and worry.",
      "3. Depression: Subjective report of sadness, despondency, or feelings of hopelessness.\n💡 Beginner Tip: Rated from patient report of despondency.",
      "4. Suicidality: Expressed suicidal thoughts, preoccupation, or self-harming behavior.\n💡 Beginner Tip: Rated from direct questioning about self-harm.",
      "5. Guilt Feelings: Over-concern or remorse for past actions; self-blame.\n💡 Beginner Tip: Rated from patient report of remorse or sinfulness.",
      "6. Hostility: Animosity, contempt, belligerence, or verbal abuse.\n💡 Beginner Tip: Rated from observed anger or verbal hostility during interview.",
      "7. Elated Mood: Excessive optimism, euphoria, or inflated self-esteem.\n💡 Beginner Tip: Rated from observed affect and speech tone.",
      "8. Grandiosity: Exaggerated opinion of abilities, power, wealth, or station.\n💡 Beginner Tip: Rated from claims of extraordinary talents or status.",
      "9. Suspiciousness: Belief that others harbor malicious or discriminatory intentions.\n💡 Beginner Tip: Rated from patient report of paranoid distrust.",
      "10. Hallucinations: Perceptual experiences without external stimuli (auditory, visual, tactile).\n💡 Beginner Tip: Rated from patient report of voices or visions.",
      "11. Unusual Thought Content: Unorthodox, bizarre, or delusional beliefs.\n💡 Beginner Tip: Rated from strange or delusional beliefs expressed.",
      "12. Bizarre Behavior: Eccentric, odd, or inappropriate motor/social conduct.\n💡 Beginner Tip: Rated from observed oddities in behavior.",
      "13. Self-Neglect: Hygiene, grooming, or personal care deficits.\n💡 Beginner Tip: Rated from observed unkemptness and hygiene.",
      "14. Disorientation: Confusion or lack of awareness of time, place, or person.\n💡 Beginner Tip: Rated from direct orientation testing.",
      "15. Conceptual Disorganization: Thought disorder; tangentiality, neologisms, incoherence.\n💡 Beginner Tip: Rated from observed speech disorganization.",
      "16. Blunted Affect: Diminished emotional responsiveness, flat affect, reduced facial expressiveness.\n💡 Beginner Tip: Rated from observed facial flatness.",
      "17. Emotional Withdrawal: Lack of spontaneous interaction, apathy, detachment.\n💡 Beginner Tip: Rated from observed lack of interpersonal engagement.",
      "18. Motor Retardation: Slowed movement, speech, or motor reactivity.\n💡 Beginner Tip: Rated from observed physical slowness.",
      "19. Tension: Observable physical signs of nervousness, motor tension, or trembling.\n💡 Beginner Tip: Rated from observed motor fidgeting/tremors.",
      "20. Uncooperativeness: Resistance, unfriendliness, or refusal to comply with interview.\n💡 Beginner Tip: Rated from patient compliance during evaluation.",
      "21. Excitement: Heightened emotional tone, hyper-reactivity, or agitation.\n💡 Beginner Tip: Rated from observed motor arousal.",
      "22. Mannerisms and Posturing: Odd, unnatural motor postures or stilted mannerisms.\n💡 Beginner Tip: Rated from observed odd postures.",
      "23. Distractibility: Inability to sustain attention due to internal/external stimuli.\n💡 Beginner Tip: Rated from observed focus during questions.",
      "24. Hyperactivity: Excessive motor activity, pacing, or inability to sit still.\n💡 Beginner Tip: Rated from observed pacing or motor energy."
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
    description: "30-point standardized clinician tool to screen for cognitive impairment and dementia with explicit test scripts.",
    estimatedTime: "10 min",
    options: [
      { label: "0 - Incorrect / Failed - Patient failed task or gave incorrect response.", score: 0 },
      { label: "1 - Correct / Passed - Patient successfully executed task without assistance.", score: 1 }
    ],
    questions: [
      "1. Orientation - Year (Ask 'What year is this?')",
      "2. Orientation - Season (Ask 'What season is it?')",
      "3. Orientation - Date (Ask 'What is today's date?')",
      "4. Orientation - Day of week (Ask 'What day of the week is it?')",
      "5. Orientation - Month (Ask 'What month is it?')",
      "6. Orientation - State / Region (Ask 'What state/province are we in?')",
      "7. Orientation - Country (Ask 'What country are we in?')",
      "8. Orientation - Town / City (Ask 'What town/city are we in?')",
      "9. Orientation - Hospital / Clinic (Ask 'What building/hospital is this?')",
      "10. Orientation - Floor / Ward (Ask 'What floor are we on?')",
      "11. Registration - Word 1 ('Apple' - Say 3 words clearly, 1 sec each, then ask patient to repeat)",
      "12. Registration - Word 2 ('Penny')",
      "13. Registration - Word 3 ('Table')",
      "14. Attention/Calculation - Serial 7s (Ask 'Subtract 7 from 100 [93]')",
      "15. Attention/Calculation - Serial 7s ('Subtract 7 from 93 [86]')",
      "16. Attention/Calculation - Serial 7s ('Subtract 7 from 86 [79]')",
      "17. Attention/Calculation - Serial 7s ('Subtract 7 from 79 [72]')",
      "18. Attention/Calculation - Serial 7s ('Subtract 7 from 72 [65]')",
      "19. Recall - Word 1 (Ask 'What were the 3 words I asked you to remember?' ['Apple'])",
      "20. Recall - Word 2 ('Penny')",
      "21. Recall - Word 3 ('Table')",
      "22. Language - Name object 1 (Point to a Pencil and ask 'What is this?')",
      "23. Language - Name object 2 (Point to a Wristwatch and ask 'What is this?')",
      "24. Language - Repeat phrase (Ask patient to repeat 'No ifs, ands, or buts')",
      "25. Language - Follow 3-stage command ('Take paper in your right hand')",
      "26. Language - Follow 3-stage command ('Fold paper in half')",
      "27. Language - Follow 3-stage command ('Put paper on the floor')",
      "28. Language - Read and obey (Show written sign 'CLOSE YOUR EYES')",
      "29. Language - Write a sentence (Ask patient to write a sensible sentence with subject & verb)",
      "30. Language - Copy design (Ask patient to copy 2 overlapping pentagons accurately)"
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
    description: "30-point validated screening tool for Mild Cognitive Impairment (MCI) across 8 cognitive domains.",
    estimatedTime: "10 min",
    options: [
      { label: "0 - Incorrect / Failed - Patient failed task or gave incorrect response.", score: 0 },
      { label: "1 - Correct / Passed - Patient successfully executed task without assistance.", score: 1 }
    ],
    questions: [
      "1. Visuospatial - Alternating Trail Making B (Draw line from 1 -> A -> 2 -> B -> 3 -> C -> 4 -> D -> 5 -> E without crossing lines)",
      "2. Visuospatial - Copy 3D Cube (Draws cube accurately with all 12 lines parallel)",
      "3. Visuospatial - Clock Contour (Draws complete closed circle)",
      "4. Visuospatial - Clock Numbers (All 12 numbers in correct positions & order)",
      "5. Visuospatial - Clock Hands (Hands point to 11:10 accurately, hour hand shorter)",
      "6. Naming - Animal 1 (Identify Lion correctly)",
      "7. Naming - Animal 2 (Identify Rhinoceros correctly)",
      "8. Naming - Animal 3 (Identify Camel correctly)",
      "9. Attention - Forward Digit Span (Repeat 2-1-8-5-4 correctly in order)",
      "10. Attention - Backward Digit Span (Repeat 7-4-2 backwards as 2-4-7)",
      "11. Attention - Vigilance Letter A Tapping (Taps desk when letter 'A' is read; <= 1 error)",
      "12. Attention - Serial 7 Subtraction 1 (100 - 7 = 93)",
      "13. Attention - Serial 7 Subtraction 2 (93 - 7 = 86)",
      "14. Attention - Serial 7 Subtraction 3 (86 - 7 = 79)",
      "15. Attention - Serial 7 Subtraction 4 (79 - 7 = 72)",
      "16. Attention - Serial 7 Subtraction 5 (65)",
      "17. Language - Sentence Repetition 1 ('I only know that John is the one to help today.')",
      "18. Language - Sentence Repetition 2 ('The cat always hid under the couch when dogs were in the room.')",
      "19. Language - Verbal Fluency (Generates 11 or more words starting with letter 'F' in 1 min)",
      "20. Abstraction - Similarity 1 (Category for Banana & Orange -> 'Fruit')",
      "21. Abstraction - Similarity 2 (Category for Train & Bicycle -> 'Transport / Vehicle')",
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
      { label: "1 - Rarely / Never (< 20% of time) - Behavior is absent or observed less than 20% of the time.", score: 1 },
      { label: "2 - Sometimes (21–40% of time) - Behavior occurs occasionally, between 21% and 40% of observation period.", score: 2 },
      { label: "3 - Frequently (41–60% of time) - Behavior occurs regularly, between 41% and 60% of observation period.", score: 3 },
      { label: "4 - Mostly (61–80% of time) - Behavior is present during most activities, between 61% and 80% of the time.", score: 4 },
      { label: "5 - Always (81–100% of time) - Behavior is persistent, occurring between 81% and 100% of the observation period.", score: 5 }
    ],
    questions: [
      "1. Has poor eye contact\n💡 Beginner Tip: Observe eye contact during natural conversation and play.",
      "2. Lacks social smile\n💡 Beginner Tip: Observe facial response when smiled at by caregiver or examiner.",
      "3. Remains aloof / avoids peer interaction",
      "4. Does not reach out to parent / caregiver",
      "5. Lacks joint attention\n💡 Beginner Tip: Check if child follows examiner's point or points to share interest.",
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
        text: "1. How often do you have a drink containing alcohol?\n💡 Beginner Tip: A standard drink = 1 glass of beer (350ml), 1 glass of wine (150ml), or 1 shot of spirits (45ml).",
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
      { label: "0 - Never (0 days/week) - Symptom never occurs or applies 0 days per week.", score: 0 },
      { label: "1 - Sometimes (1-2 days/week) - Occurs occasionally, 1 to 2 days per week.", score: 1 },
      { label: "2 - Usually (3-4 days/week) - Occurs frequently, 3 to 4 days per week.", score: 2 },
      { label: "3 - Always (5-7 days/week) - Occurs persistently, 5 to 7 days per week.", score: 3 }
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
      { label: "0 - Did not apply to me at all - Never or rarely experienced over the past week.", score: 0 },
      { label: "1 - Applied to me to some degree - Experienced occasionally or to a mild degree over the past week.", score: 1 },
      { label: "2 - Applied to me to a considerable degree - Experienced frequently or to a moderate-to-severe degree over the past week.", score: 2 },
      { label: "3 - Applied to me very much - Experienced almost constantly or to an extreme degree over the past week.", score: 3 }
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
        text: "1. Objective Akathisia\n💡 Beginner Tip: Observe patient sitting for 2 minutes and standing for 2 minutes. Watch for leg swinging, foot tapping, or shifting weight.",
        options: [
          { label: "0 - Normal - No restless movements observed.", score: 0 },
          { label: "1 - Mild Restlessness - Characteristic movements of legs/feet present < 50% of examination time.", score: 1 },
          { label: "2 - Moderate Restlessness - Characteristic movements of legs/feet present > 50% of examination time.", score: 2 },
          { label: "3 - Severe Akathisia - Severe constant pacing or inability to remain seated during examination.", score: 3 }
        ]
      },
      {
        text: "2. Subjective Awareness of Restlessness\n💡 Beginner Tip: Ask 'Do you feel an inner urge to keep moving your legs or body?'",
        options: [
          { label: "0 - None - Absence of inner restlessness.", score: 0 },
          { label: "1 - Non-Specific - Non-specific sense of inner restlessness.", score: 1 },
          { label: "2 - Awareness of Motor Urge - Awareness of inability to keep legs still.", score: 2 },
          { label: "3 - Intense Compulsion - Intense compulsion to move legs continuously.", score: 3 }
        ]
      },
      {
        text: "3. Subjective Distress Related to Restlessness\n💡 Beginner Tip: Ask 'How distressing or agonizing is this restless feeling for you?'",
        options: [
          { label: "0 - No Distress - No distress experienced.", score: 0 },
          { label: "1 - Mild Distress - Mild subjective discomfort.", score: 1 },
          { label: "2 - Moderate Distress - Moderate subjective distress.", score: 2 },
          { label: "3 - Severe Distress - Severe distress or emotional agony.", score: 3 }
        ]
      },
      {
        text: "4. Global Clinical Impression of Akathisia\n💡 Beginner Tip: Clinician's overall diagnostic impression combining objective restlessness and subjective distress.",
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
      { label: "0 - Not at all - Experienced 0 to 1 day over the past 2 weeks.", score: 0 },
      { label: "1 - Several days - Experienced 2 to 6 days over the past 2 weeks.", score: 1 },
      { label: "2 - More than half the days - Experienced 7 to 11 days over the past 2 weeks.", score: 2 },
      { label: "3 - Nearly every day - Experienced 12 to 14 days over the past 2 weeks.", score: 3 }
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
    description: "10-item clinician-rated scale sensitive to change in depression severity over treatment with explicit item-specific 0-6 score anchors.",
    estimatedTime: "5-8 min",
    questions: [
      {
        text: "1. Apparent Sadness\n💡 Beginner Tip: Rated on observed despondency, gloom, and facial expression during interview.",
        options: [
          { label: "0 - Normal - No sadness observed; affect brightens appropriately.", score: 0 },
          { label: "1 - Slight Sadness - Slight despondency at times.", score: 1 },
          { label: "2 - Looks Sad - Looks sad but can brighten up on interaction.", score: 2 },
          { label: "3 - Moderately Sad - Moderately sad affect most of interview.", score: 3 },
          { label: "4 - Pervasive Sadness - Looks sad and miserable constantly.", score: 4 },
          { label: "5 - Severe Sadness - Severe despondency non-responsive to interaction.", score: 5 },
          { label: "6 - Extreme Misery - Looks extremely miserable, despondent, and weeping.", score: 6 }
        ]
      },
      {
        text: "2. Reported Sadness\n💡 Beginner Tip: Ask 'How has your mood been feeling over the past week?'",
        options: [
          { label: "0 - Normal - Occasional sadness in keeping with circumstances.", score: 0 },
          { label: "1 - Slight Sadness - Slightly downhearted at times.", score: 1 },
          { label: "2 - Sad - Reports feeling sad or despondent.", score: 2 },
          { label: "3 - Moderate Sadness - Reports feeling gloomy most of the day.", score: 3 },
          { label: "4 - Pervasive Sadness - Reports continuous gloom and sadness.", score: 4 },
          { label: "5 - Severe Sadness - Severe continuous depression.", score: 5 },
          { label: "6 - Extreme Misery - Extreme continuous misery and despair.", score: 6 }
        ]
      },
      {
        text: "3. Inner Tension\n💡 Beginner Tip: Ask 'Do you feel internal jitteriness, turmoil, or panic?'",
        options: [
          { label: "0 - Peaceful - Placid, calm inner state.", score: 0 },
          { label: "1 - Slight Tension - Slight occasional inner tension.", score: 1 },
          { label: "2 - Tense - Reports occasional inner edginess.", score: 2 },
          { label: "3 - Moderate Tension - Moderate persistent inner turmoil.", score: 3 },
          { label: "4 - Severe Tension - Continuous inner dread or panic.", score: 4 },
          { label: "5 - Very Severe Tension - Extremely uncomfortable inner panic.", score: 5 },
          { label: "6 - Unbearable Agony - Unbearable inner dread and panic.", score: 6 }
        ]
      },
      {
        text: "4. Reduced Sleep\n💡 Beginner Tip: Ask 'How many hours of sleep have you lost compared to your normal baseline?'",
        options: [
          { label: "0 - Normal - Normal sleep pattern.", score: 0 },
          { label: "1 - Slight Reduction - Slightly reduced sleep.", score: 1 },
          { label: "2 - Mild Reduction - Sleep reduced by up to 2 hours.", score: 2 },
          { label: "3 - Moderate Reduction - Sleep reduced by 2 to 3 hours.", score: 3 },
          { label: "4 - Severe Reduction - Sleep reduced by 3 to 4 hours.", score: 4 },
          { label: "5 - Very Severe Reduction - Sleep reduced by > 4 hours.", score: 5 },
          { label: "6 - Severe Insomnia - Less than 2 hours of sleep per night.", score: 6 }
        ]
      },
      {
        text: "5. Reduced Appetite\n💡 Beginner Tip: Ask 'Have you lost your desire to eat or lost weight?'",
        options: [
          { label: "0 - Normal - Normal or increased appetite.", score: 0 },
          { label: "1 - Slightly Reduced - Slightly reduced appetite.", score: 1 },
          { label: "2 - Reduced Appetite - Food tastes bland; eats less.", score: 2 },
          { label: "3 - Moderate Loss - Needs encouragement to eat.", score: 3 },
          { label: "4 - Severe Loss - Eats only with persistent urging.", score: 4 },
          { label: "5 - Very Severe Loss - Refuses food frequently.", score: 5 },
          { label: "6 - Complete Anorexia - Total loss of appetite; refuses all food.", score: 6 }
        ]
      },
      {
        text: "6. Concentration Difficulties\n💡 Beginner Tip: Ask 'Is it hard to focus when reading a book or watching TV?'",
        options: [
          { label: "0 - Normal - Clear, effective concentration.", score: 0 },
          { label: "1 - Slight Difficulty - Occasional difficulty organizing thoughts.", score: 1 },
          { label: "2 - Mild Difficulty - Difficulty concentrating on reading or TV.", score: 2 },
          { label: "3 - Moderate Difficulty - Noticeable difficulty holding train of thought.", score: 3 },
          { label: "4 - Severe Difficulty - Unable to read or converse without effort.", score: 4 },
          { label: "5 - Very Severe Difficulty - Great difficulty reading a short paragraph.", score: 5 },
          { label: "6 - Incapacitating - Completely unable to read or sustain conversation.", score: 6 }
        ]
      },
      {
        text: "7. Lassitude (Loss of Energy & Initiative)\n💡 Beginner Tip: Ask 'Do you struggle to initiate or complete routine daily chores?'",
        options: [
          { label: "0 - Normal - No difficulty initiating tasks.", score: 0 },
          { label: "1 - Slight Lassitude - Slight hesitation starting tasks.", score: 1 },
          { label: "2 - Mild Lassitude - Sluggishness starting routine activities.", score: 2 },
          { label: "3 - Moderate Lassitude - Starts simple tasks with effort.", score: 3 },
          { label: "4 - Severe Lassitude - Great difficulty initiating routine self-care.", score: 4 },
          { label: "5 - Very Severe Lassitude - Unable to start basic tasks without help.", score: 5 },
          { label: "6 - Complete Avolition - Completely bedridden or immobile from lack of energy.", score: 6 }
        ]
      },
      {
        text: "8. Inability to Feel (Emotional Numbness)\n💡 Beginner Tip: Ask 'Do you feel emotionally numb or unable to feel affection for loved ones?'",
        options: [
          { label: "0 - Normal - Normal emotional warmth and interest.", score: 0 },
          { label: "1 - Slightly Reduced - Slightly reduced emotional reactivity.", score: 1 },
          { label: "2 - Mild Numbness - Reduced interest in friends or hobbies.", score: 2 },
          { label: "3 - Moderate Numbness - Reduced emotional capacity for loved ones.", score: 3 },
          { label: "4 - Severe Numbness - Unable to experience pleasure or sadness.", score: 4 },
          { label: "5 - Very Severe Numbness - Profound emotional emptiness.", score: 5 },
          { label: "6 - Complete Emotional Paralysis - Complete inability to feel any emotion or empathy.", score: 6 }
        ]
      },
      {
        text: "9. Pessimistic Thoughts\n💡 Beginner Tip: Ask 'Do you feel guilty about past mistakes or pessimistic about the future?'",
        options: [
          { label: "0 - None - Realistic, balanced outlook.", score: 0 },
          { label: "1 - Slight Pessimism - Slight self-reproach at times.", score: 1 },
          { label: "2 - Mild Guilt - Ideas of inferiority or mild guilt.", score: 2 },
          { label: "3 - Moderate Guilt - Frequent thoughts of guilt or self-blame.", score: 3 },
          { label: "4 - Severe Guilt - Firm guilt, feelings of ruin or failure.", score: 4 },
          { label: "5 - Very Severe Guilt - Severe guilt feelings, believes he/she deserves punishment.", score: 5 },
          { label: "6 - Delusions of Ruin - Delusions of guilt, sinfulness, or economic ruin.", score: 6 }
        ]
      },
      {
        text: "10. Suicidal Thoughts\n💡 Beginner Tip: Ask 'Do you feel life is not worth living or have thoughts of ending your life?'",
        options: [
          { label: "0 - None - Enjoys life or accepts it as it is.", score: 0 },
          { label: "1 - Slight - Weary of life; occasional passive thoughts.", score: 1 },
          { label: "2 - Passive Ideation - Wishes he/she were dead; passive suicidal ideation.", score: 2 },
          { label: "3 - Active Ideation - Active suicidal thoughts, no plan.", score: 3 },
          { label: "4 - Formulating Plan - Contemplating suicide method/plan.", score: 4 },
          { label: "5 - Explicit Plan - Explicit suicidal preparations.", score: 5 },
          { label: "6 - Active Attempt - Active suicidal attempt or gesture.", score: 6 }
        ]
      }
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
        text: "1. Nausea and Vomiting\n💡 Beginner Tip: Ask 'Do you feel sick to your stomach? Have you vomited?' Observe patient.",
        options: [
          { label: "0 - None - No nausea and no vomiting.", score: 0 },
          { label: "1 - Mild Nausea - Mild nausea with no vomiting.", score: 1 },
          { label: "2 - Mild Nausea - Mild persistent nausea.", score: 2 },
          { label: "3 - Mild Nausea - Noticeable nausea.", score: 3 },
          { label: "4 - Intermittent Nausea - Intermittent nausea with dry heaves.", score: 4 },
          { label: "5 - Frequent Dry Heaves - Frequent dry heaves.", score: 5 },
          { label: "6 - Severe Dry Heaves - Severe dry heaves.", score: 6 },
          { label: "7 - Severe Vomiting - Constant nausea, frequent dry heaves and vomiting.", score: 7 }
        ]
      },
      {
        text: "2. Tremor\n💡 Beginner Tip: Ask patient to extend arms and spread fingers. Observe.",
        options: [
          { label: "0 - No Tremor - No tremor present.", score: 0 },
          { label: "1 - Felt Only - Tremor not visible, but felt fingertip to fingertip.", score: 1 },
          { label: "2 - Mild Tremor - Mild tremor visible on arms extended.", score: 2 },
          { label: "3 - Mild Tremor - Mild continuous tremor.", score: 3 },
          { label: "4 - Moderate Tremor - Moderate tremor with patient's arms extended.", score: 4 },
          { label: "5 - Moderate Tremor - Moderate continuous tremor.", score: 5 },
          { label: "6 - Prominent Tremor - Prominent tremor.", score: 6 },
          { label: "7 - Severe Tremor - Severe tremor, even with arms not extended.", score: 7 }
        ]
      },
      {
        text: "3. Paroxysmal Sweats\n💡 Beginner Tip: Observe patient's forehead and body for diaphoresis.",
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
        text: "4. Anxiety\n💡 Beginner Tip: Ask 'Do you feel nervous or edgy?' Observe patient.",
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
        text: "5. Agitation\n💡 Beginner Tip: Observe motor activity during interview.",
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
        text: "6. Tactile Disturbances\n💡 Beginner Tip: Ask 'Do you have itching, pins/needles, numbness, or feeling bugs crawling on your skin?'",
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
        text: "7. Auditory Disturbances\n💡 Beginner Tip: Ask 'Are you more aware of harsh sounds? Do sounds hurt your ears? Do you hear things that aren't there?'",
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
        text: "8. Visual Disturbances\n💡 Beginner Tip: Ask 'Is the light too bright? Do you see things that aren't there?'",
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
        text: "9. Headache, Fullness in Head\n💡 Beginner Tip: Ask 'Does your head feel different? Does it feel like a tight band around your head?'",
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
        text: "10. Orientation and Clouding of Sensorium\n💡 Beginner Tip: Ask 'What day is it? Where are you? Who am I?'",
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
      { label: "0 - None - No symptoms present; 0 hours per day.", score: 0 },
      { label: "1 - Mild - Less than 1 hour per day; minimal interference and distress.", score: 1 },
      { label: "2 - Moderate - 1 to 3 hours per day; definite interference but manageable.", score: 2 },
      { label: "3 - Severe - 3 to 8 hours per day; substantial impairment in daily functioning.", score: 3 },
      { label: "4 - Extreme - Greater than 8 hours per day; complete incapacitation.", score: 4 }
    ],
    subscales: [
      { id: "obsessions", name: "Obsessions Subscale", min: 0, max: 20 },
      { id: "compulsions", name: "Compulsions Subscale", min: 0, max: 20 }
    ],
    questions: [
      { text: "1. Time Occupied by Obsessive Thoughts\n💡 Beginner Tip: Ask 'How many total hours per day do intrusive thoughts occupy your mind?'", subscale: "obsessions" },
      { text: "2. Interference Due to Obsessive Thoughts\n💡 Beginner Tip: Ask 'How much do these thoughts interfere with work or family life?'", subscale: "obsessions" },
      { text: "3. Distress Associated with Obsessive Thoughts\n💡 Beginner Tip: Ask 'How anxious or upset do these thoughts make you feel?'", subscale: "obsessions" },
      { text: "4. Resistance Against Obsessions\n💡 Beginner Tip: Ask 'How hard do you try to resist or push away these thoughts?'", subscale: "obsessions" },
      { text: "5. Degree of Control Over Obsessive Thoughts\n💡 Beginner Tip: Ask 'How successful are you in stopping the thoughts when you try?'", subscale: "obsessions" },
      { text: "6. Time Spent Performing Compulsive Behaviors\n💡 Beginner Tip: Ask 'How many total hours per day do you spend doing rituals or washing/checking?'", subscale: "compulsions" },
      { text: "7. Interference Due to Compulsive Behaviors\n💡 Beginner Tip: Ask 'How much do compulsive rituals disrupt your routine?'", subscale: "compulsions" },
      { text: "8. Distress Associated with Compulsive Behaviors\n💡 Beginner Tip: Ask 'How would you feel if prevented from completing your rituals?'", subscale: "compulsions" },
      { text: "9. Resistance Against Compulsions\n💡 Beginner Tip: Ask 'How hard do you try to resist doing the rituals?'", subscale: "compulsions" },
      { text: "10. Degree of Control Over Compulsive Behavior\n💡 Beginner Tip: Ask 'How much control do you have over stopping the rituals?'", subscale: "compulsions" }
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
    description: "23-item standardized clinician rating scale with beginner examination protocols for screening (items 1-14) and quantifying catatonia severity.",
    estimatedTime: "10 min",
    questions: [
      {
        text: "1. Excitement\n💡 Beginner Tip: Observe motor activity. Is patient hyper-reactive, pacing, or thrashing without goal?",
        options: [
          { label: "0 - Absent - Normal motor activity level.", score: 0 },
          { label: "1 - Mild - Excessive motor activity, hyper-reactive, pacing < 50% of observation.", score: 1 },
          { label: "2 - Moderate - Constant motor restlessness, pacing > 50% of observation, hard to redirect.", score: 2 },
          { label: "3 - Severe - Continuous frantic motor excitement, violent thrashing, requires restraint.", score: 3 }
        ]
      },
      {
        text: "2. Immobility / Stupor\n💡 Beginner Tip: Observe alertness and physical movement. Does patient sit motionless?",
        options: [
          { label: "0 - Absent - Normal motor responsiveness and alertness.", score: 0 },
          { label: "1 - Mild - Hypoactive, sits motionless for long periods, but responds to verbal prompts.", score: 1 },
          { label: "2 - Moderate - Extreme hypoactivity, minimally responsive to light tactile/verbal stimuli.", score: 2 },
          { label: "3 - Severe - Complete stupor, unresponsive to painful stimuli, mute and immobile.", score: 3 }
        ]
      },
      {
        text: "3. Mutism\n💡 Beginner Tip: Ask patient open-ended questions. Listen for speech production.",
        options: [
          { label: "0 - Absent - Normal verbal communication.", score: 0 },
          { label: "1 - Mild - Speaks in short, brief 1-2 word sentences, delayed speech latency.", score: 1 },
          { label: "2 - Moderate - Speaks only a few unintelligible words per day.", score: 2 },
          { label: "3 - Severe - Completely mute, produces no vocal sounds despite stimulation.", score: 3 }
        ]
      },
      {
        text: "4. Staring\n💡 Beginner Tip: Observe eye contact and blink rate during conversation.",
        options: [
          { label: "0 - Absent - Normal eye contact and blinking rate.", score: 0 },
          { label: "1 - Mild - Fixed gaze with decreased blinking (< 5 blinks/min) for 1-2 minutes.", score: 1 },
          { label: "2 - Moderate - Fixed unblinking stare lasting 2-10 minutes.", score: 2 },
          { label: "3 - Severe - Fixed unblinking stare > 10 minutes, ignores visual stimuli.", score: 3 }
        ]
      },
      {
        text: "5. Posturing / Catalepsy\n💡 Beginner Tip: Observe if patient spontaneously maintains odd physical postures.",
        options: [
          { label: "0 - Absent - No spontaneous bizarre posturing.", score: 0 },
          { label: "1 - Mild - Spontaneously maintains odd posture for < 1 minute.", score: 1 },
          { label: "2 - Moderate - Spontaneously maintains odd posture for 1 to 15 minutes.", score: 2 },
          { label: "3 - Severe - Spontaneously maintains bizarre posture for > 15 minutes.", score: 3 }
        ]
      },
      {
        text: "6. Grimacing\n💡 Beginner Tip: Observe facial expressions for odd maintained contractions (e.g., puffed cheeks, sneers).",
        options: [
          { label: "0 - Absent - Normal facial expression.", score: 0 },
          { label: "1 - Mild - Occasional odd facial distortion (< 1 min).", score: 1 },
          { label: "2 - Moderate - Maintains odd facial expression for 1-5 minutes.", score: 2 },
          { label: "3 - Severe - Continuous bizarre facial contortions / grimacing (> 5 minutes).", score: 3 }
        ]
      },
      {
        text: "7. Echopraxia / Echolalia\n💡 Beginner Tip: Observe if patient mimics examiner's hand gestures (echopraxia) or repeats examiner's words (echolalia).",
        options: [
          { label: "0 - Absent - No mimicking behavior.", score: 0 },
          { label: "1 - Mild - Occasional repetition of words or movements of examiner.", score: 1 },
          { label: "2 - Moderate - Frequently repeats words/actions of examiner throughout interview.", score: 2 },
          { label: "3 - Severe - Continuously and compulsively echoes examiner's speech/movements.", score: 3 }
        ]
      },
      {
        text: "8. Stereotypy\n💡 Beginner Tip: Check for non-goal-directed repetitive motor actions (e.g. body rocking, hand waving).",
        options: [
          { label: "0 - Absent - No repetitive non-goal-directed movements.", score: 0 },
          { label: "1 - Mild - Occasional repetitive movements < 1 min.", score: 1 },
          { label: "2 - Moderate - Frequent repetitive movements lasting 1-5 minutes.", score: 2 },
          { label: "3 - Severe - Continuous non-stop motor stereotypies dominating behavior (> 5 min).", score: 3 }
        ]
      },
      {
        text: "9. Mannerisms\n💡 Beginner Tip: Observe odd, stilted variations of purposeful movements (e.g. theatrical handshakes).",
        options: [
          { label: "0 - Absent - Normal purposeful movements.", score: 0 },
          { label: "1 - Mild - Slightly exaggerated or stilted movements.", score: 1 },
          { label: "2 - Moderate - Prominent odd mannerisms that disrupt normal task execution.", score: 2 },
          { label: "3 - Severe - Bizarre, ritualistic mannerisms continuously executed.", score: 3 }
        ]
      },
      {
        text: "10. Verbigeration\n💡 Beginner Tip: Listen for continuous repetition of senseless words or phrases.",
        options: [
          { label: "0 - Absent - Normal speech content.", score: 0 },
          { label: "1 - Mild - Repeats a word or phrase 2-3 times during interview.", score: 1 },
          { label: "2 - Moderate - Frequently repeats meaningless words or phrases throughout interview.", score: 2 },
          { label: "3 - Severe - Continuous repetition of senseless words/phrases.", score: 3 }
        ]
      },
      {
        text: "11. Rigidity\n💡 Beginner Tip: Passively flex/extend patient's elbow or knee. Check for lead-pipe resistance.",
        options: [
          { label: "0 - Absent - Normal muscle tone on passive movement.", score: 0 },
          { label: "1 - Mild - Mild resistance to passive limb movement by examiner.", score: 1 },
          { label: "2 - Moderate - Moderate rigid resistance; patient can be moved with firm pressure.", score: 2 },
          { label: "3 - Severe - Severe lead-pipe or plastic rigidity; cannot be moved.", score: 3 }
        ]
      },
      {
        text: "12. Negativism\n💡 Beginner Tip: Give simple commands ('Open your mouth', 'Raise your arm'). Check for active resistance or doing opposite.",
        options: [
          { label: "0 - Absent - Cooperates with instructions.", score: 0 },
          { label: "1 - Mild - Mild hesitant resistance to instructions or physical manipulation.", score: 1 },
          { label: "2 - Moderate - Definite resistance to instructions; does opposite of command.", score: 2 },
          { label: "3 - Severe - Severe active resistance; rigid opposition to physical contact.", score: 3 }
        ]
      },
      {
        text: "13. Waxy Flexibility\n💡 Beginner Tip: Move patient's arm into an unusual position and release. Does patient hold it like wax?",
        options: [
          { label: "0 - Absent - Limb returns to resting position immediately when released.", score: 0 },
          { label: "1 - Mild - Holds repositioned limb for 10-30 seconds like a wax figure.", score: 1 },
          { label: "2 - Moderate - Holds repositioned limb for 30 seconds to 2 minutes.", score: 2 },
          { label: "3 - Severe - Holds repositioned limb in awkward position for > 2 minutes.", score: 3 }
        ]
      },
      {
        text: "14. Withdrawal\n💡 Beginner Tip: Check if patient turns away, avoids eye contact, or refuses food/water.",
        options: [
          { label: "0 - Absent - Normal engagement and eye contact.", score: 0 },
          { label: "1 - Mild - Avoids eye contact, minimally interacts with environment.", score: 1 },
          { label: "2 - Moderate - Refuses food, water, or social contact for < 24 hours.", score: 2 },
          { label: "3 - Severe - Completely withdrawn; refuses all food, fluids, and interaction for > 24 hours.", score: 3 }
        ]
      },
      {
        text: "15. Impulsivity\n💡 Beginner Tip: Watch for sudden, unexpected motor actions without warning.",
        options: [
          { label: "0 - Absent - Controlled, goal-directed behavior.", score: 0 },
          { label: "1 - Mild - Occasional sudden, unexpected actions without apparent motive.", score: 1 },
          { label: "2 - Moderate - Frequent sudden impulsive behaviors (e.g. running out of room).", score: 2 },
          { label: "3 - Severe - Violent or highly dangerous sudden actions threatening self/staff.", score: 3 }
        ]
      },
      {
        text: "16. Automatic Obedience\n💡 Beginner Tip: Instruct 'Do not stick out your tongue' while holding a pin near patient's face. Does patient obey automatically?",
        options: [
          { label: "0 - Absent - Responds normally to requests.", score: 0 },
          { label: "1 - Mild - Hesitantly obeys exaggerated requests.", score: 1 },
          { label: "2 - Moderate - Mechanically obeys commands without hesitation.", score: 2 },
          { label: "3 - Severe - Robot-like immediate execution of harmful or absurd commands.", score: 3 }
        ]
      },
      {
        text: "17. Mitgehen (Passive Obedience)\n💡 Beginner Tip: Instruct 'Do not let me move your arm'. Apply light 1-finger pressure. Does limb yield easily?",
        options: [
          { label: "0 - Absent - Arm stays still when light pressure applied.", score: 0 },
          { label: "1 - Mild - Yields to light fingertip pressure despite instruction to resist.", score: 1 },
          { label: "2 - Moderate - Limb moves easily with minimal pressure ('angle-poise lamp' sign).", score: 2 },
          { label: "3 - Severe - Exaggerated movement in direction of lightest touch despite warning.", score: 3 }
        ]
      },
      {
        text: "18. Gegenhalten (Muscle Resistance)\n💡 Beginner Tip: Move patient's limb back and forth. Does muscle resistance increase proportionally to force applied?",
        options: [
          { label: "0 - Absent - Smooth passive movement without resistance.", score: 0 },
          { label: "1 - Mild - Mild proportional resistance matching examiner's force.", score: 1 },
          { label: "2 - Moderate - Increases resistance proportionally to examiner's force ('paratonia').", score: 2 },
          { label: "3 - Severe - Active equal and opposite resistance preventing joint movement.", score: 3 }
        ]
      },
      {
        text: "19. Ambitendency\n💡 Beginner Tip: Offer your hand to shake. Does patient freeze in motor indecision (extending then pulling back)?",
        options: [
          { label: "0 - Absent - Smooth movement execution.", score: 0 },
          { label: "1 - Mild - Slight hesitation before starting requested motor action.", score: 1 },
          { label: "2 - Moderate - Alternates between starting and stopping action (hand shake indecision).", score: 2 },
          { label: "3 - Severe - Completely stuck in motor indecision; unable to complete action.", score: 3 }
        ]
      },
      {
        text: "20. Grasp Reflex\n💡 Beginner Tip: Stroke patient's palm from wrist to fingers with examiner's fingers. Do fingers flex and grasp involuntarily?",
        options: [
          { label: "0 - Absent - No involuntary grasping on palmar stroke.", score: 0 },
          { label: "1 - Mild - Weak involuntary flexion of fingers on palmar stroke.", score: 1 },
          { label: "2 - Moderate - Firm involuntary grasp of examiner's hand when palm stroked.", score: 2 },
          { label: "3 - Severe - Strong compulsive grasp that cannot be voluntarily released.", score: 3 }
        ]
      },
      {
        text: "21. Perseveration\n💡 Beginner Tip: Ask a new question or request a new action. Does patient repeat previous response?",
        options: [
          { label: "0 - Absent - Flexibly switches tasks and answers.", score: 0 },
          { label: "1 - Mild - Repeats previous motor action or verbal response once.", score: 1 },
          { label: "2 - Moderate - Frequently reverts to previous response despite new question.", score: 2 },
          { label: "3 - Severe - Continuously repeats single action/answer for all subsequent tasks.", score: 3 }
        ]
      },
      {
        text: "22. Combativeness\n💡 Beginner Tip: Observe physical aggression or swatting towards examiner.",
        options: [
          { label: "0 - Absent - Non-combative.", score: 0 },
          { label: "1 - Mild - Swats away examiner's hand or verbal aggression.", score: 1 },
          { label: "2 - Moderate - Strikes out at staff or objects without warning.", score: 2 },
          { label: "3 - Severe - Dangerous physical assault against staff requiring restraint.", score: 3 }
        ]
      },
      {
        text: "23. Autonomic Abnormality\n💡 Beginner Tip: Check temperature, BP, HR, diaphoresis. (High fever + autonomic instability = Malignant Catatonia alert!).",
        options: [
          { label: "0 - Absent - Stable vital signs.", score: 0 },
          { label: "1 - Mild - Mild elevation in HR (> 100 bpm) or BP (> 140/90) or fever (< 38°C).", score: 1 },
          { label: "2 - Moderate - Fluctuating HR (100-120 bpm), diaphoresis, or temp 38–38.5°C.", score: 2 },
          { label: "3 - Severe - High fever (> 38.5°C), severe autonomic instability, labile BP/tachycardia.", score: 3 }
        ]
      }
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
        { min: 3, max: 5, severity: "Moderate Acute Risk", interpretation: "Immediate psychiatric consultation and line-of-sight observation." },
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
      { label: "0 - Not at all - Experienced 0 to 1 day over the past 2 weeks.", score: 0 },
      { label: "1 - Several days - Experienced 2 to 6 days over the past 2 weeks.", score: 1 },
      { label: "2 - More than half the days - Experienced 7 to 11 days over the past 2 weeks.", score: 2 },
      { label: "3 - Nearly every day - Experienced 12 to 14 days over the past 2 weeks.", score: 3 }
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
    description: "12-item clinician-rated scale to assess severity of tardive dyskinesia and extrapyramidal involuntary movements with explicit physical examination steps.",
    estimatedTime: "5-10 min",
    options: [
      { label: "0 - None - No involuntary movements observed.", score: 0 },
      { label: "1 - Minimal / Normal - Minimal or questionable involuntary movements; within normal physiological variation.", score: 1 },
      { label: "2 - Mild - Distinct involuntary movements present in 1 body area or mild in 2 areas.", score: 2 },
      { label: "3 - Moderate - Moderate involuntary movements causing noticeable motor disturbance.", score: 3 },
      { label: "4 - Severe - Severe, persistent involuntary movements causing significant disability.", score: 4 }
    ],
    questions: [
      "1. Facial and Oral Movements: Muscles of facial expression\n💡 Beginner Tip: Observe brow, eyes, and cheeks for involuntary twitching, blinking, or grimacing while patient sits quietly.",
      "2. Facial and Oral Movements: Lips and perioral area\n💡 Beginner Tip: Watch for lip puckering, pouting, smacking, or sucking movements.",
      "3. Facial and Oral Movements: Jaw\n💡 Beginner Tip: Watch for involuntary biting, clenching, chewing, or lateral jaw movements.",
      "4. Facial and Oral Movements: Tongue\n💡 Beginner Tip: Ask patient to open mouth and observe tongue at rest. Then ask patient to protrude tongue and observe.",
      "5. Extremity Movements: Upper extremities (arms, hands, fingers)\n💡 Beginner Tip: Ask patient to extend arms out front with palms down. Observe fingers for choreic movements.",
      "6. Extremity Movements: Lower extremities (legs, feet, toes)\n💡 Beginner Tip: Observe feet and toes for tapping, writhing, or inversion while patient sits.",
      "7. Trunk Movements: Neck, shoulders, hips\n💡 Beginner Tip: Watch for shoulder rocking, twisting, neck tics, or pelvic gyrations while patient stands and walks.",
      "8. Global Judgment: Severity of abnormal movements overall\n💡 Beginner Tip: Overall clinician rating of peak severity across all body areas.",
      "9. Global Judgment: Incapacity due to abnormal movements\n💡 Beginner Tip: How much do involuntary movements impair eating, speaking, or walking?",
      "10. Global Judgment: Patient's awareness of movements and distress\n💡 Beginner Tip: Ask 'Are you aware of these movements? How much do they bother you?'",
      "11. Dental Status: Current dental condition / dentures\n💡 Beginner Tip: Check if patient has ill-fitting dentures or missing teeth that may simulate lip/mouth movements.",
      "12. Dental Status: Does patient usually wear dentures?\n💡 Beginner Tip: Confirm if dentures are worn during examination."
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

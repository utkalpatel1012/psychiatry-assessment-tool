const scales = [
  {
    id: "ymrs",
    name: "YMRS",
    fullName: "Young Mania Rating Scale",
    description: "Clinician-rated scale for manic symptom severity (past 48 hours)",
    questions: [
      {
        text: "Elevated Mood",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mildly or possibly increased on questioning", score: 1 },
          { label: "2 - Definite subjective elevation; optimistic, self-confident; cheerful; appropriate to content", score: 2 },
          { label: "3 - Elevated, inappropriate to content; humorous", score: 3 },
          { label: "4 - Euphoric; inappropriate laughter; singing", score: 4 }
        ]
      },
      {
        text: "Increased Motor Activity-Energy",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Subjectively increased", score: 1 },
          { label: "2 - Animated; gestures increased", score: 2 },
          { label: "3 - Excessive energy; hyperactive at times; restless (can be calmed)", score: 3 },
          { label: "4 - Motor excitement; continuous hyperactivity (cannot be calmed)", score: 4 }
        ]
      },
      {
        text: "Sexual Interest",
        options: [
          { label: "0 - Normal; not increased", score: 0 },
          { label: "1 - Mildly or possibly increased", score: 1 },
          { label: "2 - Definite subjective increase on questioning", score: 2 },
          { label: "3 - Spontaneous sexual content; elaborates on sexual matters; hypersexual by self-report", score: 3 },
          { label: "4 - Overt sexual acts (toward patients, staff, or interviewer)", score: 4 }
        ]
      },
      {
        text: "Sleep",
        options: [
          { label: "0 - Reports no decrease in sleep", score: 0 },
          { label: "1 - Sleeping less than normal amount by up to one hour", score: 1 },
          { label: "2 - Sleeping less than normal by more than one hour", score: 2 },
          { label: "3 - Reports decreased need for sleep", score: 3 },
          { label: "4 - Denies need for sleep", score: 4 }
        ]
      },
      {
        text: "Irritability (double-weighted)",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "2 - Subjectively increased", score: 2 },
          { label: "4 - Irritable at times; recent anger episodes on ward", score: 4 },
          { label: "6 - Frequently irritable; short, curt throughout interview", score: 6 },
          { label: "8 - Hostile, uncooperative; interview impossible", score: 8 }
        ]
      },
      {
        text: "Speech (Rate and Amount) (double-weighted)",
        options: [
          { label: "0 - No increase", score: 0 },
          { label: "2 - Feels talkative", score: 2 },
          { label: "4 - Increased rate or amount at times; verbose at times", score: 4 },
          { label: "6 - Push; consistently increased rate and amount; difficult to interrupt", score: 6 },
          { label: "8 - Pressured; uninterruptible; continuous speech", score: 8 }
        ]
      },
      {
        text: "Language-Thought Disorder",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Circumstantial; mild distractibility; quick thoughts", score: 1 },
          { label: "2 - Distractible; loses goal of thought; changes topics frequently; racing thoughts", score: 2 },
          { label: "3 - Flight of ideas; tangentiality; difficult to follow; rhyming, echolalia", score: 3 },
          { label: "4 - Incoherent; communication impossible", score: 4 }
        ]
      },
      {
        text: "Content (double-weighted)",
        options: [
          { label: "0 - Normal", score: 0 },
          { label: "2 - Questionable plans, new interests", score: 2 },
          { label: "4 - Special project(s); hyperreligious", score: 4 },
          { label: "6 - Grandiose or paranoid ideas; ideas of reference", score: 6 },
          { label: "8 - Delusions; hallucinations", score: 8 }
        ]
      },
      {
        text: "Disruptive-Aggressive Behavior (double-weighted)",
        options: [
          { label: "0 - Absent, cooperative", score: 0 },
          { label: "2 - Sarcastic; loud at times, guarded", score: 2 },
          { label: "4 - Demanding; threats on ward", score: 4 },
          { label: "6 - Threatens interviewer; shouting; interview difficult", score: 6 },
          { label: "8 - Assaultive; destructive; interview impossible", score: 8 }
        ]
      },
      {
        text: "Appearance",
        options: [
          { label: "0 - Appropriate dress and grooming", score: 0 },
          { label: "1 - Minimally unkempt", score: 1 },
          { label: "2 - Poorly groomed; moderately disheveled; overdressed", score: 2 },
          { label: "3 - Disheveled; partly clothed; garish make-up", score: 3 },
          { label: "4 - Completely unkempt; decorated; bizarre garb", score: 4 }
        ]
      },
      {
        text: "Insight",
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
        { min: 0, max: 11, severity: "Remission", interpretation: "YMRS score < 12 indicates remission of manic symptoms. Continue maintenance treatment as indicated. Monitor for early signs of relapse." },
        { min: 12, max: 19, severity: "Mild", interpretation: "Mild manic symptoms. Consider outpatient management. Monitor for worsening. May need mood stabilizer dose adjustment." },
        { min: 20, max: 25, severity: "Moderate", interpretation: "Moderate manic symptoms. Consider intensifying pharmacotherapy (mood stabilizers, antipsychotics). Day-hospital or partial hospitalization may be appropriate." },
        { min: 26, max: 60, severity: "Severe", interpretation: "Severe manic symptoms. Indicates need for acute treatment. Consider inpatient hospitalization. Initiate or optimize mood stabilizer and antipsychotic therapy. Ensure safety monitoring." }
      ]
    }
  },
  {
    id: "panss",
    name: "PANSS",
    fullName: "Positive and Negative Syndrome Scale",
    description: "Clinician-rated scale for schizophrenia symptom severity (Kay, Fiszbein & Opler, 1987). 30 items, 7-point scale.",
    subscales: [
      { id: "positive", name: "Positive Symptoms", min: 7, max: 49 },
      { id: "negative", name: "Negative Symptoms", min: 7, max: 49 },
      { id: "general", name: "General Psychopathology", min: 16, max: 112 }
    ],
    questions: [
      {
        text: "P1. Delusions\nBeliefs which are unfounded, unrealistic, and idiosyncratic. Based on thought content expressed in the interview and its influence on social relations and behavior.",
        subscale: "positive",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable pathology; may be at upper extreme of normal", score: 2 },
          { label: "3 - Mild: One or two vague, uncrystallized delusions, not tenaciously held. Does not interfere with thinking or behavior", score: 3 },
          { label: "4 - Moderate: Kaleidoscopic array of poorly formed, unstable delusions or a few well-formed delusions that occasionally interfere with thinking or behavior", score: 4 },
          { label: "5 - Moderate-Severe: Well-formed delusions that persist over time and may occasionally interfere with functioning", score: 5 },
          { label: "6 - Severe: Stable, well-formed delusions that are tenaciously held and significantly interfere with functioning", score: 6 },
          { label: "7 - Extreme: Multiple stable delusions or a single very stable delusion that dominates thinking and behavior", score: 7 }
        ]
      },
      {
        text: "P2. Conceptual Disorganization\nDisorganized thinking characterized by loosening of associations, tangentiality, and circumstantiality. Based on formal thought disorder observed in speech.",
        subscale: "positive",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable pathology", score: 2 },
          { label: "3 - Mild: Slight circumstantiality, tangentiality, or loosening of associations. Thoughts are graspable with some effort", score: 3 },
          { label: "4 - Moderate: Tangential or circumstantial speech at times; ideas may be disconnected. Some difficulty following patient's thoughts", score: 4 },
          { label: "5 - Moderate-Severe: Frequent loose associations or tangentiality. Patient's speech is difficult to follow at times", score: 5 },
          { label: "6 - Severe: Marked disorganization of speech; frequent irrelevancies, neologisms, or thought blocking. Very difficult to follow", score: 6 },
          { label: "7 - Extreme: Incoherent speech; communication impossible due to severe disorganization", score: 7 }
        ]
      },
      {
        text: "P3. Hallucinatory Behavior\nVerbal report or behavior indicating perceptions that are not generated by external stimuli. May occur in any sensory modality.",
        subscale: "positive",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable pathology", score: 2 },
          { label: "3 - Mild: One or two clearly formed but infrequent hallucinations; not preoccupied", score: 3 },
          { label: "4 - Moderate: Frequent hallucinations but patient can still function; may be distracted by them", score: 4 },
          { label: "5 - Moderate-Severe: Very frequent hallucinations; patient may be preoccupied and behavior may be influenced", score: 5 },
          { label: "6 - Severe: Hallucinations dominate patient's thinking and behavior; responds behaviorally to them", score: 6 },
          { label: "7 - Extreme: Continuous hallucinations; patient's life is fully consumed by them; may act out hallucinatory content", score: 7 }
        ]
      },
      {
        text: "P4. Excitement\nHyperactivity, elevated mood, increased energy, and reduced need for sleep. Based on observed behavior during interview and reported activity.",
        subscale: "positive",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable pathology", score: 2 },
          { label: "3 - Mild: Some restlessness or mild elevation of mood; slightly more talkative than usual", score: 3 },
          { label: "4 - Moderate: Pronounced hyperactivity or elevated mood; speaks loudly and rapidly; somewhat impatient", score: 4 },
          { label: "5 - Moderate-Severe: Very excited; loud and pressured speech; may be argumentative or intrusive", score: 5 },
          { label: "6 - Severe: Extremely excited; nearly continuous pressured speech; difficulty being calmed", score: 6 },
          { label: "7 - Extreme: Frenzied excitement; may be dangerous; requires supervision or restraint", score: 7 }
        ]
      },
      {
        text: "P5. Grandiosity\nExaggerated self-opinion, unrealistic beliefs of superiority, special powers, or identity. May involve delusional convictions of fame or special mission.",
        subscale: "positive",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable pathology", score: 2 },
          { label: "3 - Mild: Some exaggeration of abilities or talents; slightly self-important", score: 3 },
          { label: "4 - Moderate: Clearly unrealistic sense of superiority; may claim special abilities or talents", score: 4 },
          { label: "5 - Moderate-Severe: Grandiose delusions (special mission, famous identity); may act on these beliefs", score: 5 },
          { label: "6 - Severe: Intense grandiose delusions that dominate thinking; significantly affects behavior and judgment", score: 6 },
          { label: "7 - Extreme: Bizarre or fixed grandiose delusions; behavior completely influenced by delusions of grandeur", score: 7 }
        ]
      },
      {
        text: "P6. Suspiciousness / Persecution\nUnrealistic or exaggerated distrust, belief that others are harming, cheating, or exploiting the patient. May range from guardedness to persecutory delusions.",
        subscale: "positive",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable pathology", score: 2 },
          { label: "3 - Mild: Guarded or questioning attitude; may be slightly distrustful", score: 3 },
          { label: "4 - Moderate: Clearly distrustful; believes others may have malicious intent but is not certain", score: 4 },
          { label: "5 - Moderate-Severe: Strong persecutory beliefs that may influence behavior at times", score: 5 },
          { label: "6 - Severe: Fixed persecutory delusions that significantly affect behavior and relationships", score: 6 },
          { label: "7 - Extreme: Complex, systematized persecutory delusions; behavior driven by paranoid beliefs", score: 7 }
        ]
      },
      {
        text: "P7. Hostility\nVerbal or physical expressions of anger, resentment, bitterness, or aggression. Includes irritability and belligerence.",
        subscale: "positive",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable pathology", score: 2 },
          { label: "3 - Mild: Somewhat irritable or argumentative but can be calmed", score: 3 },
          { label: "4 - Moderate: Clearly angry or hostile at times; may make threats but no physical aggression", score: 4 },
          { label: "5 - Moderate-Severe: Frequently hostile; may be verbally abusive or threatening", score: 5 },
          { label: "6 - Severe: Very hostile; physically aggressive or destructive; may require restraint", score: 6 },
          { label: "7 - Extreme: Extreme aggression; assaultive or dangerous; requires close supervision or seclusion", score: 7 }
        ]
      },
      {
        text: "N1. Blunted Affect\nDiminished emotional responsiveness characterized by reduced facial expression, affect tone, and gestures.",
        subscale: "negative",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable reduction in emotional expression", score: 2 },
          { label: "3 - Mild: Slightly diminished facial expression or vocal inflection", score: 3 },
          { label: "4 - Moderate: Noticeably flat affect; marked reduction in emotional range", score: 4 },
          { label: "5 - Moderate-Severe: Severely flattened affect; very little emotional expression even with strong stimuli", score: 5 },
          { label: "6 - Severe: Extremely blunted affect; almost no emotional expressiveness at any time", score: 6 },
          { label: "7 - Extreme: Complete absence of affective expression; face immobile; voice monotonous", score: 7 }
        ]
      },
      {
        text: "N2. Emotional Withdrawal\nLack of interest in, engagement with, or involvement with the interviewer and/or interpersonal interactions.",
        subscale: "negative",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable lack of engagement", score: 2 },
          { label: "3 - Mild: Slightly distant or aloof; participates in interview but without warmth", score: 3 },
          { label: "4 - Moderate: Clearly withdrawn; minimal spontaneous interaction; avoids eye contact", score: 4 },
          { label: "5 - Moderate-Severe: Mostly disengaged; responds minimally to direct questions", score: 5 },
          { label: "6 - Severe: Very withdrawn; barely responds; seems isolated even during interview", score: 6 },
          { label: "7 - Extreme: Profoundly withdrawn; no meaningful engagement; may be mute", score: 7 }
        ]
      },
      {
        text: "N3. Poor Rapport\nLack of interpersonal connection, openness, or trust in the interview. Includes defensiveness, evasiveness, and superficial interaction.",
        subscale: "negative",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable difficulty in relating", score: 2 },
          { label: "3 - Mild: Somewhat guarded or evasive; rapport established with effort", score: 3 },
          { label: "4 - Moderate: Clearly defensive or evasive; difficulty establishing any genuine connection", score: 4 },
          { label: "5 - Moderate-Severe: Very guarded; responses are brief and impersonal; rapport is poor", score: 5 },
          { label: "6 - Severe: Hostile or completely avoids connection; interview is very difficult", score: 6 },
          { label: "7 - Extreme: Completely unable to establish rapport; may refuse to communicate", score: 7 }
        ]
      },
      {
        text: "N4. Passive / Apathetic Social Withdrawal\nDiminished social interest and initiative, reduced involvement with others, and neglect of social activities.",
        subscale: "negative",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable reduction in social activity", score: 2 },
          { label: "3 - Mild: Slightly reduced social interest; may participate when prompted", score: 3 },
          { label: "4 - Moderate: Noticeably less social interaction; prefers isolation; needs encouragement to socialize", score: 4 },
          { label: "5 - Moderate-Severe: Minimally involved in social activities; rarely initiates interaction", score: 5 },
          { label: "6 - Severe: Almost completely socially isolated; avoids all social contact", score: 6 },
          { label: "7 - Extreme: Complete social withdrawal; no interest in or tolerance of social interaction", score: 7 }
        ]
      },
      {
        text: "N5. Difficulty in Abstract Thinking\nImpaired ability to think abstractly, use concepts, or understand abstract relationships. Assessed by interpreting proverbs or similarities.",
        subscale: "negative",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable difficulty with abstractions", score: 2 },
          { label: "3 - Mild: Slightly concrete thinking; abstract interpretations given with some difficulty", score: 3 },
          { label: "4 - Moderate: Clearly concrete thinking; struggles with abstract concepts; gives literal interpretations", score: 4 },
          { label: "5 - Moderate-Severe: Highly concrete; can only use simple abstractions with significant prompting", score: 5 },
          { label: "6 - Severe: Unable to abstract at all; responses are entirely concrete or irrelevant", score: 6 },
          { label: "7 - Extreme: Cannot engage in abstract thinking at any level; may not understand the task", score: 7 }
        ]
      },
      {
        text: "N6. Lack of Spontaneity & Flow of Conversation\nReduced normal flow of conversation with diminished initiative, brevity of responses, and failure to elaborate.",
        subscale: "negative",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable reduction in conversational flow", score: 2 },
          { label: "3 - Mild: Slightly terse responses; answers questions but does not elaborate", score: 3 },
          { label: "4 - Moderate: Brief responses with no elaboration; interviewer must prompt frequently", score: 4 },
          { label: "5 - Moderate-Severe: Very limited speech; mostly single words; interview is laborious", score: 5 },
          { label: "6 - Severe: Almost no spontaneous speech; even direct questions get minimal response", score: 6 },
          { label: "7 - Extreme: Mute or near-mute; unable to sustain any conversation", score: 7 }
        ]
      },
      {
        text: "N7. Stereotyped Thinking\nRigid, repetitive, or barren thought content. May include perseveration, fixed ideas, or over-simplified thinking patterns.",
        subscale: "negative",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable rigidity of thinking", score: 2 },
          { label: "3 - Mild: Slightly repetitive or stereotyped themes; some flexibility remains", score: 3 },
          { label: "4 - Moderate: Clearly stereotyped thinking; returns to same themes repeatedly", score: 4 },
          { label: "5 - Moderate-Severe: Very rigid thinking; perseverates on the same ideas; difficult to redirect", score: 5 },
          { label: "6 - Severe: Extremely stereotyped; conversation revolves around a few fixed ideas", score: 6 },
          { label: "7 - Extreme: Completely fixed and repetitive content; cannot discuss any other topics", score: 7 }
        ]
      },
      {
        text: "G1. Somatic Concern\nPhysical complaints or beliefs about bodily illness or dysfunction. May range from vague health worries to somatic delusions.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable concern about physical health", score: 2 },
          { label: "3 - Mild: Some concern about physical health; may report minor symptoms", score: 3 },
          { label: "4 - Moderate: Preoccupied with health or somatic symptoms; may seek medical attention frequently", score: 4 },
          { label: "5 - Moderate-Severe: Strong somatic preoccupation; may have unrealistic health beliefs", score: 5 },
          { label: "6 - Severe: Somatic or hypochondriacal delusions; significantly distressed by physical complaints", score: 6 },
          { label: "7 - Extreme: Bizarre somatic delusions; completely preoccupied with bodily dysfunction", score: 7 }
        ]
      },
      {
        text: "G2. Anxiety\nSubjective experience of nervousness, worry, apprehension, or restlessness. May include autonomic symptoms and fearful anticipation.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable anxiety", score: 2 },
          { label: "3 - Mild: Some worry or nervousness; may express concern about current situation", score: 3 },
          { label: "4 - Moderate: Clearly anxious; appears tense and worried; may have autonomic symptoms", score: 4 },
          { label: "5 - Moderate-Severe: Very anxious; marked autonomic symptoms; difficulty concentrating due to worry", score: 5 },
          { label: "6 - Severe: Extremely anxious; near panic; may have panic attacks; needs reassurance", score: 6 },
          { label: "7 - Extreme: Intense, overwhelming anxiety; may be in a state of panic or terror", score: 7 }
        ]
      },
      {
        text: "G3. Guilt Feelings\nFeelings of remorse, self-blame, or guilt about past or present actions, thoughts, or omissions.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable guilt feelings", score: 2 },
          { label: "3 - Mild: Some self-reproach; believes they have let others down", score: 3 },
          { label: "4 - Moderate: Clearly guilty; expresses remorse out of proportion to actual events", score: 4 },
          { label: "5 - Moderate-Severe: Strong guilt feelings; may ruminate about past mistakes", score: 5 },
          { label: "6 - Severe: Intense guilt; may have delusions of guilt; believes they are unforgivable", score: 6 },
          { label: "7 - Extreme: Crushing guilt; may believe they are evil or have committed unforgivable sins", score: 7 }
        ]
      },
      {
        text: "G4. Tension\nObservable physical manifestations of tension, rigidity, tremor, or nervous motor activity.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable tension or nervousness", score: 2 },
          { label: "3 - Mild: Slightly tense posture or fidgeting; some restlessness", score: 3 },
          { label: "4 - Moderate: Clearly tense; obvious motor tension, fidgeting, or restlessness", score: 4 },
          { label: "5 - Moderate-Severe: Very tense; may tremble, pace, or show marked motor agitation", score: 5 },
          { label: "6 - Severe: Extremely tense; unable to sit still; may be rigid with anxiety", score: 6 },
          { label: "7 - Extreme: Profound tension; may be frozen or in extreme agitation requiring intervention", score: 7 }
        ]
      },
      {
        text: "G5. Mannerisms & Posturing\nUnnatural or bizarre movements, postures, or gestures. Includes stereotypies, rituals, and catatonic features.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable oddities in movement or posture", score: 2 },
          { label: "3 - Mild: Slightly odd or inappropriate gestures or posture", score: 3 },
          { label: "4 - Moderate: Clearly bizarre postures, rituals, or stereotyped movements", score: 4 },
          { label: "5 - Moderate-Severe: Frequent odd mannerisms; may hold unusual postures for extended periods", score: 5 },
          { label: "6 - Severe: Marked catatonic features; posturing, rigidity, or waxy flexibility", score: 6 },
          { label: "7 - Extreme: Severe catatonia; stupor or excited catatonia requiring medical attention", score: 7 }
        ]
      },
      {
        text: "G6. Depression\nFeelings of sadness, discouragement, hopelessness, and pessimism. Includes depressed mood and anhedonia.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable sadness or discouragement", score: 2 },
          { label: "3 - Mild: Some sadness or low mood; may express feeling down", score: 3 },
          { label: "4 - Moderate: Clearly depressed; sad affect; some hopelessness or pessimism", score: 4 },
          { label: "5 - Moderate-Severe: Very depressed; tearful at times; marked hopelessness", score: 5 },
          { label: "6 - Severe: Severe depression with profound hopelessness; may have suicidal ideation", score: 6 },
          { label: "7 - Extreme: Extremely depressed; may be stuporous; high risk of self-harm", score: 7 }
        ]
      },
      {
        text: "G7. Motor Retardation\nSlowing of motor movements, speech, and reactions. Includes reduced body movements and prolonged response latency.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable slowing of movements", score: 2 },
          { label: "3 - Mild: Slightly slowed movements or speech; slight delay in responses", score: 3 },
          { label: "4 - Moderate: Clearly slowed; movements are noticeably reduced; delayed responses", score: 4 },
          { label: "5 - Moderate-Severe: Very slow; minimal spontaneous movement; long pauses before responding", score: 5 },
          { label: "6 - Severe: Extremely slow and limited movement; may need prompting to move or speak", score: 6 },
          { label: "7 - Extreme: Near-stuporous; virtually no movement or speech without intense stimulation", score: 7 }
        ]
      },
      {
        text: "G8. Uncooperativeness\nActive refusal to comply with the requests or directions of the interviewer or staff. Includes resistance, defiance, or outright refusal.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable resistance", score: 2 },
          { label: "3 - Mild: Slightly uncooperative; may express reluctance but ultimately complies", score: 3 },
          { label: "4 - Moderate: Clearly uncooperative at times; resists some requests", score: 4 },
          { label: "5 - Moderate-Severe: Frequently uncooperative; may refuse several requests or directives", score: 5 },
          { label: "6 - Severe: Very defiant; refuses most requests; may be oppositional throughout", score: 6 },
          { label: "7 - Extreme: Complete refusal to comply with any directives; interview may not be possible", score: 7 }
        ]
      },
      {
        text: "G9. Unusual Thought Content\nThinking characterized by strange, fantastic, or bizarre ideas. Includes thought broadcasting, insertion, or withdrawal.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable unusual thoughts", score: 2 },
          { label: "3 - Mild: Some odd or eccentric ideas that do not appear delusional", score: 3 },
          { label: "4 - Moderate: Clearly unusual thoughts; may have ideas of reference or magical thinking", score: 4 },
          { label: "5 - Moderate-Severe: Bizarre or fantastic ideas; may report thought broadcasting or insertion", score: 5 },
          { label: "6 - Severe: Multiple bizarre delusions; thinking is dominated by unusual content", score: 6 },
          { label: "7 - Extreme: Extremely bizarre or pervasive delusional thinking; may be incoherent", score: 7 }
        ]
      },
      {
        text: "G10. Disorientation\nLack of awareness of person, place, or time. Includes confusion about identity, location, date, or situation.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable orientation difficulty", score: 2 },
          { label: "3 - Mild: Slightly confused about date or time; oriented to person and place", score: 3 },
          { label: "4 - Moderate: Disoriented to time (off by more than 2 days) or marginally oriented to place", score: 4 },
          { label: "5 - Moderate-Severe: Disoriented to both time and place; but knows own identity", score: 5 },
          { label: "6 - Severe: Disoriented to person as well; may not know own identity or age", score: 6 },
          { label: "7 - Extreme: Complete disorientation; no awareness of person, place, or time", score: 7 }
        ]
      },
      {
        text: "G11. Poor Attention\nDifficulty focusing, sustaining, or shifting attention. Includes distractibility and reduced concentration.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable attention difficulty", score: 2 },
          { label: "3 - Mild: Some difficulty concentrating; may be slightly distracted", score: 3 },
          { label: "4 - Moderate: Clearly distracted; attention wanders; needs repetition of questions", score: 4 },
          { label: "5 - Moderate-Severe: Very poor concentration; easily distracted by trivial stimuli", score: 5 },
          { label: "6 - Severe: Severe attention deficit; can only focus briefly; interview is very difficult", score: 6 },
          { label: "7 - Extreme: Cannot sustain attention at all; unable to engage in the interview process", score: 7 }
        ]
      },
      {
        text: "G12. Lack of Judgment & Insight\nImpaired awareness or understanding of one's own psychiatric condition, symptoms, or need for treatment.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable lack of insight", score: 2 },
          { label: "3 - Mild: Some awareness of being ill but minimizes its significance", score: 3 },
          { label: "4 - Moderate: Acknowledges symptoms but blames them on external factors; denies need for treatment", score: 4 },
          { label: "5 - Moderate-Severe: Admits behavior change but denies psychiatric illness; may accept treatment reluctantly", score: 5 },
          { label: "6 - Severe: Denies any psychiatric condition; refuses treatment completely", score: 6 },
          { label: "7 - Extreme: Not only denies illness but may claim others are deceived or conspiring", score: 7 }
        ]
      },
      {
        text: "G13. Disturbance of Volition\nImpaired ability to initiate, sustain, or control goal-directed activities. Includes avolition and abulia.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable reduction in goal-directed activity", score: 2 },
          { label: "3 - Mild: Some lack of initiative; needs occasional prompting to start activities", score: 3 },
          { label: "4 - Moderate: Clearly lacks initiative; requires prompting for most activities", score: 4 },
          { label: "5 - Moderate-Severe: Severely apathetic; rarely initiates any goal-directed behavior", score: 5 },
          { label: "6 - Severe: Almost completely passive; must be directed for all daily activities", score: 6 },
          { label: "7 - Extreme: No spontaneous activity; completely dependent on others for all care", score: 7 }
        ]
      },
      {
        text: "G14. Poor Impulse Control\nDifficulty regulating impulses and delayed gratification. Includes acting on urges without consideration of consequences.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable impulse control difficulty", score: 2 },
          { label: "3 - Mild: Slight difficulty tolerating frustration or delaying gratification", score: 3 },
          { label: "4 - Moderate: Clearly impulsive at times; may act on inappropriate urges without thinking", score: 4 },
          { label: "5 - Moderate-Severe: Frequently impulsive; may engage in reckless behavior without regard for consequences", score: 5 },
          { label: "6 - Severe: Very poor impulse control; may be dangerous to self or others due to impulsive actions", score: 6 },
          { label: "7 - Extreme: Completely unable to control impulses; requires constant supervision for safety", score: 7 }
        ]
      },
      {
        text: "G15. Preoccupation\nExcessive focus on internal thoughts, experiences, or sensations, with reduced awareness of the external environment.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable preoccupation", score: 2 },
          { label: "3 - Mild: Somewhat self-absorbed; may appear lost in thought at times", score: 3 },
          { label: "4 - Moderate: Clearly preoccupied; often appears to be focusing on internal experiences", score: 4 },
          { label: "5 - Moderate-Severe: Very preoccupied; frequently loses contact with the interview environment", score: 5 },
          { label: "6 - Severe: Extremely preoccupied; most of the time is absorbed in internal experiences", score: 6 },
          { label: "7 - Extreme: Completely absorbed in internal world; no awareness of external environment", score: 7 }
        ]
      },
      {
        text: "G16. Active Social Avoidance\nActive efforts to avoid social contact or situations due to suspiciousness, anxiety, or discomfort. Includes social withdrawal driven by fear.",
        subscale: "general",
        options: [
          { label: "1 - Absent: Definition does not apply", score: 1 },
          { label: "2 - Minimal: Questionable social avoidance", score: 2 },
          { label: "3 - Mild: Some avoidance of social situations; may feel uncomfortable but participates when needed", score: 3 },
          { label: "4 - Moderate: Clearly avoids many social situations; becomes anxious in social settings", score: 4 },
          { label: "5 - Moderate-Severe: Avoids most social contact; may isolate in room; very limited interaction", score: 5 },
          { label: "6 - Severe: Actively avoids all social contact; may leave or refuse to enter social settings", score: 6 },
          { label: "7 - Extreme: Completely avoids all social interaction; may barricade or refuse to leave room", score: 7 }
        ]
      }
    ],
    scoring: {
      type: "subscale",
      totalRange: { min: 30, max: 210 },
      ranges: [
        { min: 30, max: 57, severity: "Mild", interpretation: "Mild overall symptomatology (CGI equivalent: mildly ill). Continue maintenance treatment. Monitor for exacerbation." },
        { min: 58, max: 74, severity: "Mild to Moderate", interpretation: "Mild to moderate symptomatology (CGI equivalent: mildly to moderately ill). Consider optimizing pharmacotherapy. Assess adherence." },
        { min: 75, max: 94, severity: "Moderate", interpretation: "Moderate symptomatology (CGI equivalent: moderately ill). May require medication adjustment or augmentation. Consider psychosocial interventions." },
        { min: 95, max: 115, severity: "Marked", interpretation: "Marked symptomatology (CGI equivalent: markedly ill). Consider inpatient care if not already admitted. Initiate or optimize antipsychotic therapy." },
        { min: 116, max: 210, severity: "Severe", interpretation: "Severe symptomatology (CGI equivalent: severely ill). Intensive inpatient treatment indicated. Consider clozapine if treatment-resistant. Ensure safety monitoring." }
      ]
    }
  },
  {
    id: "hamd17",
    name: "HAM-D (17)",
    fullName: "Hamilton Depression Rating Scale (17-Item)",
    description: "Clinician-rated scale for depression severity. Most widely used depression rating scale (Hamilton, 1960).",
    questions: [
      {
        text: "1. Depressed Mood\nGloomy attitude, pessimism, hopelessness, worthlessness.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Sad, gloomy, or hopeless; expressed only on questioning", score: 1 },
          { label: "2 - Spontaneously reports depressed mood", score: 2 },
          { label: "3 - Communicates depressed mood nonverbally (posture, facial expression, crying)", score: 3 },
          { label: "4 - Almost exclusively communicates depressed mood; overwhelming despair", score: 4 }
        ]
      },
      {
        text: "2. Feelings of Guilt",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Self-reproach; feels has let people down", score: 1 },
          { label: "2 - Ideas of guilt or rumination over past errors or sinful deeds", score: 2 },
          { label: "3 - Present illness is a punishment; delusions of guilt", score: 3 },
          { label: "4 - Hears accusatory or denunciatory voices and/or threatening visual hallucinations", score: 4 }
        ]
      },
      {
        text: "3. Suicide",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Feels life is not worth living", score: 1 },
          { label: "2 - Wishes they were dead or any thoughts of possible death to self", score: 2 },
          { label: "3 - Suicidal ideas or gestures", score: 3 },
          { label: "4 - Attempts at suicide (any serious attempt rates 4)", score: 4 }
        ]
      },
      {
        text: "4. Insomnia — Early\nDifficulty falling asleep.",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Complains of occasional difficulty falling asleep (more than 30 min)", score: 1 },
          { label: "2 - Complains of nightly difficulty falling asleep", score: 2 }
        ]
      },
      {
        text: "5. Insomnia — Middle\nWaking during the night, restless sleep.",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Complains of restlessness or waking during the night", score: 1 },
          { label: "2 - Waking during the night; any getting out of bed rates 2", score: 2 }
        ]
      },
      {
        text: "6. Insomnia — Late\nEarly morning awakening (earlier than usual).",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Waking in early hours but able to fall asleep again", score: 1 },
          { label: "2 - Unable to fall asleep again if gets out of bed", score: 2 }
        ]
      },
      {
        text: "7. Work and Activities\nLoss of interest in work, hobbies, social activities.",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Thoughts and feelings of incapacity; fatigue related to work or activities", score: 1 },
          { label: "2 - Loss of interest in activity; hobbies or social activities dropped", score: 2 },
          { label: "3 - Reduction in actual time spent on activities or decreased productivity", score: 3 },
          { label: "4 - Stopped working due to current illness; unable to work", score: 4 }
        ]
      },
      {
        text: "8. Retardation\nSlowness of thought, speech, and movement.",
        options: [
          { label: "0 - Normal speech and thought", score: 0 },
          { label: "1 - Slight retardation at interview", score: 1 },
          { label: "2 - Obvious retardation at interview", score: 2 },
          { label: "3 - Interview difficult due to marked retardation", score: 3 },
          { label: "4 - Complete stupor; unable to participate in interview", score: 4 }
        ]
      },
      {
        text: "9. Agitation\nRestlessness, fidgeting, inability to sit still.",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Fidgetiness", score: 1 },
          { label: "2 - Playing with hands, hair, etc.", score: 2 },
          { label: "3 - Moving about; cannot sit still", score: 3 },
          { label: "4 - Hand wringing, nail biting, hair pulling, biting of lips", score: 4 }
        ]
      },
      {
        text: "10. Anxiety — Psychic\nTension, worry, apprehension, irritability.",
        options: [
          { label: "0 - No difficulty", score: 0 },
          { label: "1 - Subjective tension and irritability", score: 1 },
          { label: "2 - Worrying about minor matters", score: 2 },
          { label: "3 - Apprehensive attitude; expressed fears without questioning", score: 3 },
          { label: "4 - Fears expressed without any questioning; overwhelming panic", score: 4 }
        ]
      },
      {
        text: "11. Anxiety — Somatic\nAutonomic symptoms: dry mouth, GI upset, palpitations, headache, sweating, urinary frequency.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild physical symptoms", score: 1 },
          { label: "2 - Moderate symptoms", score: 2 },
          { label: "3 - Severe symptoms", score: 3 },
          { label: "4 - Incapacitating symptoms", score: 4 }
        ]
      },
      {
        text: "12. Somatic Symptoms — Gastrointestinal\nLoss of appetite, heavy feeling in abdomen, constipation.",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Loss of appetite but eating without encouragement; heavy feeling in abdomen", score: 1 },
          { label: "2 - Difficulty eating without persuasion; requests or requires laxatives for constipation", score: 2 }
        ]
      },
      {
        text: "13. General Somatic Symptoms\nHeaviness in limbs, back or head; diffuse backache, headache, muscle aches; loss of energy and fatigability.",
        options: [
          { label: "0 - None", score: 0 },
          { label: "1 - Mild symptoms", score: 1 },
          { label: "2 - Severe or definite symptoms", score: 2 }
        ]
      },
      {
        text: "14. Genital Symptoms\nLoss of libido, menstrual disturbances.",
        options: [
          { label: "0 - Absent", score: 0 },
          { label: "1 - Mild or loss of sexual interest", score: 1 },
          { label: "2 - Severe or complete loss of libido", score: 2 }
        ]
      },
      {
        text: "15. Hypochondriasis\nExcessive concern with bodily functions, health, or physical symptoms.",
        options: [
          { label: "0 - Not present", score: 0 },
          { label: "1 - Self-absorption (bodily)", score: 1 },
          { label: "2 - Preoccupation with health", score: 2 },
          { label: "3 - Frequent complaints, requests for help, etc.", score: 3 },
          { label: "4 - Hypochondriacal delusions", score: 4 }
        ]
      },
      {
        text: "16. Loss of Weight",
        options: [
          { label: "0 - No weight loss", score: 0 },
          { label: "1 - Probable weight loss due to current illness", score: 1 },
          { label: "2 - Definite (by patient report) weight loss", score: 2 }
        ]
      },
      {
        text: "17. Insight\nAwareness of illness and its causes.",
        options: [
          { label: "0 - Acknowledges being depressed and ill", score: 0 },
          { label: "1 - Acknowledges illness but attributes it to bad food, climate, overwork, virus, need for rest, etc.", score: 1 },
          { label: "2 - Denies being ill at all", score: 2 }
        ]
      }
    ],
    scoring: {
      type: "total",
      maxScore: 52,
      ranges: [
        { min: 0, max: 7, severity: "Normal", interpretation: "No depression. No treatment indicated." },
        { min: 8, max: 13, severity: "Mild", interpretation: "Mild depression. Consider watchful waiting; may benefit from psychotherapy or monitoring." },
        { min: 14, max: 18, severity: "Moderate", interpretation: "Moderate depression. Initiate pharmacotherapy (SSRI/SNRI) and/or psychotherapy. Monitor for suicidality." },
        { min: 19, max: 22, severity: "Severe", interpretation: "Severe depression. Initiate or optimize antidepressant therapy. Consider augmentation or combination strategies. Assess need for hospitalization if suicidal." },
        { min: 23, max: 52, severity: "Very Severe", interpretation: "Very severe depression. Aggressive pharmacotherapy indicated. Consider ECT if no response to adequate medication trials or if psychotic features present. Assess for inpatient care." }
      ]
    }
  },
  {
    id: "hama",
    name: "HAM-A",
    fullName: "Hamilton Anxiety Rating Scale",
    description: "Clinician-rated scale for anxiety severity (Hamilton, 1959). 14 items, 0–4 scale.",
    options: [
      { label: "0 - Not present", score: 0 },
      { label: "1 - Mild", score: 1 },
      { label: "2 - Moderate", score: 2 },
      { label: "3 - Severe", score: 3 },
      { label: "4 - Very severe / incapacitating", score: 4 }
    ],
    questions: [
      "1. Anxious Mood: Worry, anticipation of worst, fearful anticipation, irritability",
      "2. Tension: Feelings of tension, fatigability, startle response, moved to tears easily, trembling, feelings of restlessness, inability to relax",
      "3. Fears: Of dark, of strangers, of being left alone, of animals, of traffic, of crowds",
      "4. Insomnia: Difficulty falling asleep, broken sleep, unsatisfying sleep and fatigue on waking, dreams, nightmares, night terrors",
      "5. Intellectual (Cognitive): Difficulty in concentration, poor memory",
      "6. Depressed Mood: Loss of interest, lack of pleasure in hobbies, depression, early waking, diurnal swing",
      "7. Somatic (Muscular): Pains and aches, twitching, stiffness, myoclonic jerks, grinding of teeth, unsteady voice, increased muscular tone",
      "8. Somatic (Sensory): Tinnitus, blurring of vision, hot and cold flushes, feelings of weakness, pricking sensation",
      "9. Cardiovascular Symptoms: Tachycardia, palpitations, pain in chest, throbbing of vessels, sighing, fainting feelings, missed beats",
      "10. Respiratory Symptoms: Pressure or constriction in chest, choking feelings, air hunger, sighing, dyspnea",
      "11. Gastrointestinal Symptoms: Difficulty swallowing, wind, abdominal pain, burning sensations, abdominal fullness, nausea, vomiting, borborygmi, looseness of bowels, loss of weight, constipation",
      "12. Genitourinary Symptoms: Frequency of micturition, urgency of micturition, amenorrhea, menorrhagia, frigidity, premature ejaculation, loss of libido, impotence",
      "13. Autonomic Symptoms: Dry mouth, flushing, pallor, tendency to sweat, giddiness, tension headache, raising of hair",
      "14. Behavior at Interview: Fidgeting, restlessness or pacing, tremor of hands, furrowed brow, strained face, sighing or rapid respiration, facial pallor, swallowing, belching, brisk tendon jerks, dilated pupils, exophthalmos"
    ],
    scoring: {
      type: "total",
      maxScore: 56,
      ranges: [
        { min: 0, max: 17, severity: "Mild", interpretation: "Mild anxiety. May not require pharmacotherapy. Consider psychoeducation and relaxation techniques." },
        { min: 18, max: 24, severity: "Moderate", interpretation: "Moderate anxiety. Consider pharmacotherapy (SSRI/SNRI, buspirone) and/or psychotherapy (CBT)." },
        { min: 25, max: 56, severity: "Severe", interpretation: "Severe anxiety. Initiate pharmacotherapy. Consider benzodiazepines for short-term relief while waiting for SSRI/SNRI onset. Refer to mental health specialist." }
      ]
    }
  },
  {
    id: "madrs",
    name: "MADRS",
    fullName: "Montgomery-Asberg Depression Rating Scale",
    description: "Clinician-rated scale for depression severity; sensitive to change with treatment (Montgomery & Asberg, 1979). 10 items, 0–6 scale.",
    options: [
      { label: "0 - Normal mood", score: 0 },
      { label: "1 - Slight", score: 1 },
      { label: "2 - Sad but brightens up", score: 2 },
      { label: "3 - Moderate", score: 3 },
      { label: "4 - Pervasive sadness; gloomy most of the time", score: 4 },
      { label: "5 - Severe", score: 5 },
      { label: "6 - Extreme; continuous feelings of misery or despondency", score: 6 }
    ],
    questions: [
      "1. Apparent Sadness: Despondency, gloom and despair (more than just ordinary transient low mood) — rated on observed affect",
      "2. Reported Sadness: Subjective reports of depressed mood, regardless of observable affect",
      "3. Inner Tension: Feelings of ill-defined discomfort, edginess, inner turmoil, mental tension, panic (not muscular tension)",
      "4. Reduced Sleep: Reduced duration or depth of sleep compared to patient's baseline",
      "5. Reduced Appetite: Reduced desire to eat or loss of interest in food compared to baseline",
      "6. Concentration Difficulties: Difficulty in collecting thoughts, inability to concentrate, easily distractible",
      "7. Lassitude: Difficulty in starting or performing routine activities; reduced energy",
      "8. Inability to Feel: Reduced interest in surroundings or activities; reduced ability to enjoy usual interests; emotional detachment",
      "9. Pessimistic Thoughts: Guilt, inferiority, self-reproach, ideas of ruin and bankruptcy",
      "10. Suicidal Thoughts: Thoughts that life is not worth living, natural death would be welcome, or active suicidal ideation or plans"
    ],
    scoring: {
      type: "total",
      maxScore: 60,
      ranges: [
        { min: 0, max: 6, severity: "Normal", interpretation: "No depression. No treatment indicated." },
        { min: 7, max: 19, severity: "Mild", interpretation: "Mild depression. Consider watchful waiting or psychotherapy. Antidepressants may be considered based on patient preference and clinical course." },
        { min: 20, max: 34, severity: "Moderate", interpretation: "Moderate depression. Initiate pharmacotherapy (SSRI/SNRI) and/or psychotherapy. Monitor for response and suicidality." },
        { min: 35, max: 60, severity: "Severe", interpretation: "Severe depression. Aggressive pharmacotherapy indicated. Consider combination or augmentation strategies. ECT may be indicated for treatment-resistant cases or if psychotic features present. Assess for hospitalization." }
      ]
    }
  },
  {
    id: "bprs",
    name: "BPRS",
    fullName: "Brief Psychiatric Rating Scale (18-Item)",
    description: "Clinician-rated scale for general psychopathology severity (Overall & Gorham, 1962). 18 items, 1–7 scale.",
    options: [
      { label: "1 - Not present", score: 1 },
      { label: "2 - Very mild", score: 2 },
      { label: "3 - Mild", score: 3 },
      { label: "4 - Moderate", score: 4 },
      { label: "5 - Moderate-severe", score: 5 },
      { label: "6 - Severe", score: 6 },
      { label: "7 - Extremely severe", score: 7 }
    ],
    questions: [
      "1. Somatic Concern: Preoccupation with physical health, fear of disease, hypochondriasis",
      "2. Anxiety: Worry, fear, apprehension, panic (rated on verbal report and observed affect)",
      "3. Emotional Withdrawal: Lack of emotional involvement, aloofness, isolation",
      "4. Conceptual Disorganization: Disorganized, disconnected, or incoherent thought processes",
      "5. Guilt Feelings: Self-blame, remorse, guilt for past actions or omissions",
      "6. Tension: Observable motor tension, rigidity, nervousness, agitation",
      "7. Mannerisms & Posturing: Unusual or bizarre movements, postures, stereotypies",
      "8. Grandiosity: Exaggerated self-opinion, arrogance, conviction of unusual abilities or powers",
      "9. Depressive Mood: Subjective report of sadness, low mood, hopelessness",
      "10. Hostility: Verbal or physical aggression, anger, resentment, belligerence",
      "11. Suspiciousness: Distrust, guardedness, paranoid beliefs or delusions",
      "12. Hallucinatory Behavior: Perceptions without external stimuli (any sensory modality)",
      "13. Motor Retardation: Slowing of speech, movement, and reactions",
      "14. Uncooperativeness: Resistance, defiance, refusal to comply with instructions",
      "15. Unusual Thought Content: Bizarre, fantastic, or strange delusional thinking",
      "16. Blunted Affect: Reduced emotional range, flatness, diminished expressiveness",
      "17. Excitement: Elevated mood, hyperactivity, excessive energy, reduced need for sleep",
      "18. Disorientation: Confusion about person, place, or time; poor awareness of environment"
    ],
    scoring: {
      type: "total",
      maxScore: 126,
      ranges: [
        { min: 18, max: 30, severity: "Normal/Mild", interpretation: "Minimal psychopathology. Continue maintenance treatment if indicated. Monitor." },
        { min: 31, max: 40, severity: "Mild", interpretation: "Mild psychopathology. May need outpatient follow-up. Assess stressors and adherence." },
        { min: 41, max: 52, severity: "Moderate", interpretation: "Moderate psychopathology. Consider treatment adjustment. May need more intensive outpatient care." },
        { min: 53, max: 64, severity: "Moderately Severe", interpretation: "Marked psychopathology. Likely requires medication optimization. Consider partial hospitalization." },
        { min: 65, max: 80, severity: "Severe", interpretation: "Severe psychopathology. Consider inpatient admission. Initiate or optimize pharmacotherapy." },
        { min: 81, max: 126, severity: "Extremely Severe", interpretation: "Extremely severe psychopathology. Inpatient treatment indicated. Ensure safety monitoring. Consider clozapine if treatment-resistant." }
      ]
    }
  },
  {
    id: "audit",
    name: "AUDIT",
    fullName: "Alcohol Use Disorders Identification Test",
    description: "Self-report or clinician-administered screening for hazardous and harmful alcohol consumption (WHO, 2001). 10 items.",
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
        text: "2. How many drinks containing alcohol do you have on a typical day when you are drinking?",
        options: [
          { label: "0 - 1 or 2", score: 0 },
          { label: "1 - 3 or 4", score: 1 },
          { label: "2 - 5 or 6", score: 2 },
          { label: "3 - 7, 8, or 9", score: 3 },
          { label: "4 - 10 or more", score: 4 }
        ]
      },
      {
        text: "3. How often do you have six or more drinks on one occasion?",
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
        text: "10. Has a relative or friend or a doctor or other health worker been concerned about your drinking or suggested you cut down?",
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
        { min: 0, max: 7, severity: "Low Risk", interpretation: "Low-risk alcohol consumption. Provide brief advice about recommended limits. No intervention needed." },
        { min: 8, max: 15, severity: "Hazardous", interpretation: "Hazardous alcohol use. Provide brief intervention: feedback on risks, advice to reduce drinking. Set reduction goals. Follow up." },
        { min: 16, max: 19, severity: "Harmful", interpretation: "Harmful alcohol use. Provide brief intervention plus continued monitoring. Consider referral to specialized addiction services. Offer detoxification if withdrawal symptoms present." },
        { min: 20, max: 40, severity: "Dependence", interpretation: "Possible alcohol dependence. Diagnostic assessment indicated. Refer to specialist addiction services. Consider medically supervised detoxification. Assess for withdrawal complications (DTs, seizures). Plan long-term management including relapse prevention." }
      ]
    }
  },
  {
    id: "mmse",
    name: "MMSE",
    fullName: "Mini-Mental State Examination",
    description: "Clinician-administered cognitive screening test assessing orientation, registration, attention, recall, language, and visuospatial function. 11 items, 0–30 points (Folstein, Folstein & McHugh, 1975).",
    questions: [
      {
        text: "1. Orientation to Time\nAsk: 'What is the year? season? month? day of the week? date?' Score 1 for each correct answer.",
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
        text: "2. Orientation to Place\nAsk: 'What country? state? city? hospital/building? floor/room?' Score 1 for each correct answer.",
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
        text: "3. Registration\nName 3 objects (e.g., apple, table, penny). Ask patient to repeat them. Score 1 for each correctly repeated.",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 },
          { label: "3 correct", score: 3 }
        ]
      },
      {
        text: "4. Attention & Calculation\nAsk patient to subtract 7 from 100, then 7 from 93, etc. (5 serial subtractions). Score 1 for each correct subtraction. Alternative: spell WORLD backwards.",
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
        text: "5. Recall\nAsk patient to repeat the 3 objects from Question 3. Score 1 for each correctly recalled.",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 },
          { label: "3 correct", score: 3 }
        ]
      },
      {
        text: "6. Naming\nShow a pencil and a watch. Ask patient to name each. Score 1 for each correct.",
        options: [
          { label: "0 correct", score: 0 },
          { label: "1 correct", score: 1 },
          { label: "2 correct", score: 2 }
        ]
      },
      {
        text: "7. Repetition\nAsk patient to repeat 'No ifs, ands, or buts.' Score 1 if correctly repeated on first try.",
        options: [
          { label: "0 - Incorrect", score: 0 },
          { label: "1 - Correct", score: 1 }
        ]
      },
      {
        text: "8. 3-Stage Command\nAsk patient: 'Take this paper in your right hand, fold it in half, and place it on the floor.' Score 1 for each step correctly performed in order.",
        options: [
          { label: "0 steps correct", score: 0 },
          { label: "1 step correct", score: 1 },
          { label: "2 steps correct", score: 2 },
          { label: "3 steps correct", score: 3 }
        ]
      },
      {
        text: "9. Reading\nShow a sign that says 'Close your eyes.' Ask patient to read and obey. Score 1 if they close their eyes.",
        options: [
          { label: "0 - Does not obey", score: 0 },
          { label: "1 - Closes eyes", score: 1 }
        ]
      },
      {
        text: "10. Writing\nAsk patient to write a complete sentence (must have subject, verb, and be sensible). Score 1 if meaningful.",
        options: [
          { label: "0 - No meaningful sentence", score: 0 },
          { label: "1 - Writes a meaningful sentence", score: 1 }
        ]
      },
      {
        text: "11. Visuospatial / Copying\nShow intersecting pentagons and ask patient to copy them exactly. Score 1 if all 10 angles are preserved and figures overlap.",
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
        { min: 24, max: 30, severity: "Normal", interpretation: "Normal cognition. No cognitive impairment detected." },
        { min: 18, max: 23, severity: "Mild", interpretation: "Mild cognitive impairment. Consider further neuropsychological evaluation. Screen for dementia. Assess functional impact. May need follow-up in 6 months." },
        { min: 10, max: 17, severity: "Moderate", interpretation: "Moderate cognitive impairment. Likely dementia. Refer for comprehensive dementia workup (neuroimaging, labs). Assess safety (driving, medication management, finances). Consider caregiver support." },
        { min: 0, max: 9, severity: "Severe", interpretation: "Severe cognitive impairment. Consistent with moderate-severe dementia. Refer to neurologist or geriatric psychiatrist. Ensure caregiver supervision. Consider institutional care if home safety is compromised." }
      ]
    }
  },
  {
    id: "cssrs",
    name: "C-SSRS",
    fullName: "Columbia-Suicide Severity Rating Scale",
    description: "Clinician-administered scale for assessing suicidal ideation and behavior. Uses branching logic (Posner et al., 2011).",
    questions: [
      {
        text: "1. Wish to be Dead\nHas the patient wished they were dead or wished they could go to sleep and not wake up?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "2. Non-Specific Active Suicidal Thoughts\nHas the patient had any thoughts of killing themselves?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "3. Active Suicidal Ideation with Methods\nHas the patient thought about ways they might kill themselves? (Shown only if Q2 = Yes)",
        dependsOn: { question: 1, value: 1 },
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "4. Active Suicidal Ideation with Some Intent\nHas the patient had any thoughts of killing themselves and had some intent to act on these thoughts? (Shown only if Q2 = Yes)",
        dependsOn: { question: 1, value: 1 },
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "5. Active Suicidal Ideation with Specific Plan\nHas the patient thought about a specific plan, method, or intent to kill themselves? (Shown only if Q2 = Yes)",
        dependsOn: { question: 1, value: 1 },
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "Intensity — Frequency\nHow often have these thoughts occurred? (Shown only if any ideation item 1–5 = Yes)",
        dependsOn: {
          any: [
            { question: 0, value: 1 },
            { question: 1, value: 1 },
            { question: 2, value: 1 },
            { question: 3, value: 1 },
            { question: 4, value: 1 }
          ]
        },
        options: [
          { label: "0 - Less than once a week", score: 0 },
          { label: "1 - Once a week", score: 1 },
          { label: "2 - 2–3 times a week", score: 2 },
          { label: "3 - Daily", score: 3 },
          { label: "4 - Many times per day / continuously", score: 4 }
        ]
      },
      {
        text: "Intensity — Duration\nHow long do the suicidal thoughts last?",
        dependsOn: {
          any: [
            { question: 0, value: 1 },
            { question: 1, value: 1 },
            { question: 2, value: 1 },
            { question: 3, value: 1 },
            { question: 4, value: 1 }
          ]
        },
        options: [
          { label: "0 - Fleeting / seconds", score: 0 },
          { label: "1 - Brief / minutes", score: 1 },
          { label: "2 - Moderate / extends over hours", score: 2 },
          { label: "3 - Long / persists > half the day", score: 3 },
          { label: "4 - Continuous / cannot stop thinking about it", score: 4 }
        ]
      },
      {
        text: "Intensity — Controllability\nCan the patient control or stop the suicidal thoughts?",
        dependsOn: {
          any: [
            { question: 0, value: 1 },
            { question: 1, value: 1 },
            { question: 2, value: 1 },
            { question: 3, value: 1 },
            { question: 4, value: 1 }
          ]
        },
        options: [
          { label: "0 - Easily controllable", score: 0 },
          { label: "1 - Somewhat controllable", score: 1 },
          { label: "2 - Can control with difficulty", score: 2 },
          { label: "3 - Poorly controlled", score: 3 },
          { label: "4 - Uncontrollable / cannot stop", score: 4 }
        ]
      },
      {
        text: "Intensity — Deterrents\nAre there factors that prevent the patient from acting on suicidal thoughts (family, religion, etc.)?",
        dependsOn: {
          any: [
            { question: 0, value: 1 },
            { question: 1, value: 1 },
            { question: 2, value: 1 },
            { question: 3, value: 1 },
            { question: 4, value: 1 }
          ]
        },
        options: [
          { label: "0 - Strong deterrents clearly prevent attempt", score: 0 },
          { label: "1 - Deterrents present but uncertain", score: 1 },
          { label: "2 - Deterrents do not prevent", score: 2 },
          { label: "3 - Deterrents definitely do not prevent", score: 3 },
          { label: "4 - No deterrents at all", score: 4 }
        ]
      },
      {
        text: "Intensity — Reasons for Attempt\nDoes the patient have reasons to want to kill themselves (pain relief, escape, permanent solution)?",
        dependsOn: {
          any: [
            { question: 0, value: 1 },
            { question: 1, value: 1 },
            { question: 2, value: 1 },
            { question: 3, value: 1 },
            { question: 4, value: 1 }
          ]
        },
        options: [
          { label: "0 - No reasons to attempt", score: 0 },
          { label: "1 - Minimally compelling reasons", score: 1 },
          { label: "2 - Some compelling reasons", score: 2 },
          { label: "3 - Very compelling reasons", score: 3 },
          { label: "4 - Overwhelming / only option", score: 4 }
        ]
      },
      {
        text: "6. Actual Attempt\nHas the patient made an actual attempt at suicide (with at least some intent to die)?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "6a. Actual Lethality — Medical Damage\nRate the actual medical damage caused by the most severe attempt. (Shown only if Q6 = Yes)",
        dependsOn: { question: 10, value: 1 },
        options: [
          { label: "0 - No physical damage or very minor", score: 0 },
          { label: "1 - Minor physical damage (e.g., superficial cuts, mild gastric irritation)", score: 1 },
          { label: "2 - Moderate damage; medical intervention needed (e.g., sutures, activated charcoal)", score: 2 },
          { label: "3 - Moderately severe; hospitalization required (e.g., ICU, severe overdose)", score: 3 },
          { label: "4 - Severe damage; life-threatening (e.g., respiratory failure, major trauma)", score: 4 },
          { label: "5 - Death", score: 5 }
        ]
      },
      {
        text: "6b. Potential Lethality — If medical severity was low, was the method actually lethal? (Shown only if Q6 = Yes)",
        dependsOn: { question: 10, value: 1 },
        options: [
          { label: "0 - Method likely not lethal", score: 0 },
          { label: "1 - Method possibly lethal", score: 1 },
          { label: "2 - Method likely lethal even if medical outcome was minor", score: 2 }
        ]
      },
      {
        text: "6c. Multiple Actual Attempts\nHave there been more than one actual attempt? (Shown only if Q6 = Yes)",
        dependsOn: { question: 10, value: 1 },
        options: [
          { label: "0 - No, single attempt", score: 0 },
          { label: "1 - Yes, multiple attempts", score: 1 }
        ]
      },
      {
        text: "7. Non-Suicidal Self-Injury\nHas the patient engaged in self-injurious behavior without any intent to die?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "8. Interrupted Attempt\nHas the patient started an attempt but was interrupted by an external circumstance before the act could be completed?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "9. Aborted / Self-Interrupted Attempt\nHas the patient started an attempt but stopped themselves before any actual suicidal act occurred?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      },
      {
        text: "10. Preparatory Acts or Behavior\nHas the patient taken any steps toward making a suicide attempt (gathering materials, writing a note, giving away possessions)?",
        options: [
          { label: "0 - No", score: 0 },
          { label: "1 - Yes", score: 1 }
        ]
      }
    ],
    scoring: {
      type: "cssrs",
      ranges: [
        { min: 0, max: 0, severity: "No Suicidal Ideation or Behavior", interpretation: "No suicidal ideation or behavior reported. Continue routine monitoring. Reassess periodically." },
        { min: 1, max: 5, severity: "Suicidal Ideation — Low Risk", interpretation: "Wish to be dead only. No active suicidal thoughts. Provide supportive listening. Reinforce safety plan. No immediate intervention needed unless other risk factors present." },
        { min: 6, max: 49, severity: "Suicidal Ideation — Moderate Risk", interpretation: "Active suicidal ideation present but no behavior. Requires thorough risk assessment. Develop safety plan. Consider outpatient mental health follow-up within 1 week. Remove access to lethal means." },
        { min: 50, max: 99, severity: "Suicidal Behavior — High Risk", interpretation: "Suicidal behavior present. This is a psychiatric emergency. Immediate evaluation for hospitalization required. Ensure constant supervision. Remove all means. Notify family. Consider involuntary hold if patient refuses." }
      ]
    }
  }];

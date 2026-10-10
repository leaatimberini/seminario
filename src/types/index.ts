export type TopicId = 
  | 'MOD-A' 
  | 'MOD-B' 
  | 'MOD-C' 
  | 'MOD-D' 
  | 'MOD-E' 
  | 'MOD-F' 
  | 'MOD-G' 
  | 'MOD-H' 
  | 'MOD-I';

export type SourceStatus = 
  | 'oficial_vigente' 
  | 'oficial_historica' 
  | 'resumen_usuario' 
  | 'externa_verificada' 
  | 'ejemplo_original';

export type ContextType = 
  | 'caso_real_documentado' 
  | 'caso_didactico_simulado' 
  | 'texto_original_practica';

export type QuestionType = 
  | 'multiple_choice' 
  | 'true_false' 
  | 'ordering' 
  | 'matching' 
  | 'fill_blank';

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  topicId: TopicId;
  learningObjective: string;
  type: QuestionType;
  difficulty: 'basico' | 'intermedio' | 'avanzado';
  prompt: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
  distractorExplanations?: Record<string, string>;
  hint?: string;
  sourceStatus: SourceStatus;
  sourceRef: string;
  tags: string[];
  estimatedSeconds: number;
}

export interface Annotation {
  term: string;
  explanation: string;
  highlightClass?: string;
}

export interface WorkedExample {
  id: string;
  title: string;
  contextType: ContextType;
  sourceNote?: string;
  text: string;
  annotations: Annotation[];
  analysisTakeaway: string;
}

export interface CommonMistake {
  mistake: string;
  correction: string;
  whyItHappens: string;
  howToSpotIt: string;
}

export interface Vignette {
  index: number;
  speaker: string;
  dialogue: string;
  sceneDescription: string;
  altText: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
}

export interface DidacticUnit {
  id: string;
  topicId: TopicId;
  order: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  learningObjectives: string[];
  sourceRefs: { text: string; status: SourceStatus; ref: string }[];
  clearDefinition: string;
  everydayExplanation: string;
  analogy: {
    metaphor: string;
    explanation: string;
    caveat: string;
  };
  microStory: {
    title: string;
    vignettes: Vignette[];
  };
  workedExamples: WorkedExample[];
  commonMistakes: CommonMistake[];
  pocketSummary: {
    coreConcept: string;
    quickRecognitionClue: string;
    fatalTrapToAvoid: string;
  };
  flashcards: Flashcard[];
  guidedExerciseId: string;
  independentExerciseId: string;
  activeRecallExerciseId: string;
}

export interface MockExam {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sourceDisclaimer: string;
  durationMinutes: number;
  sourceText: {
    title: string;
    author: string;
    year: string;
    citation: string;
    paragraphs: string[];
  };
  questionIds: string[];
  writtenExercise?: {
    prompt: string;
    guidance: string;
    sampleModelAnswer: string;
    rubric: {
      criterion: string;
      weight: number;
      descriptor: string;
    }[];
  };
}

export interface GlossaryTerm {
  term: string;
  topicId: TopicId;
  definition: string;
  example: string;
  relatedTerms: string[];
  source: string;
}

export interface UserAnswerRecord {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timestamp: number;
  attempts: number;
}

export interface ExamAttemptRecord {
  id: string;
  examId: string;
  timestamp: number;
  score: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  answers: Record<string, string>;
}

export interface UserState {
  version: number;
  completedUnitIds: string[];
  answers: Record<string, UserAnswerRecord>;
  examAttempts: ExamAttemptRecord[];
  notes: Record<string, string>;
  favorites: string[];
  flashcardMastery: Record<string, 'learned' | 'needs_review'>;
  settings: {
    fontSize: 'normal' | 'large' | 'xl';
    theme: 'light' | 'dark';
    reduceMotion: boolean;
    studySessionMinutes: number;
  };
}

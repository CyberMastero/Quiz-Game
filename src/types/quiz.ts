export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  timeLeft: number;
  isActive: boolean;
  isComplete: boolean;
  answers: (number | null)[];
  startTime: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  percentage: number;
  correctAnswers: number[];
}
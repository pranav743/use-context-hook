import type { ReactNode } from 'react';

export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export type QuizContextType = {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  selectedOption: string | null;
  selectOption: (option: string) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
};

export type QuizProviderProps = {
  children: ReactNode;
};

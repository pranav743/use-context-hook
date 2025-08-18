import type { QuizContextType } from '@/types/QuizApp';
import { createContext } from 'react';

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined,
);

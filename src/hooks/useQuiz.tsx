import { QuizContext } from '@/context/QuizContext';
import { useContext } from 'react';

const useQuiz = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }

  return quizContext;
};

export default useQuiz;

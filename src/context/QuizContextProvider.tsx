import type { Question, QuizProviderProps } from '@/types/QuizApp';
import { sampleQuestions, shuffleArray } from '@/utils/constants';
import { useState } from 'react';
import { QuizContext } from '@/context/QuizContext';

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [questions, setQuestions] = useState<Question[]>(() => shuffleArray(sampleQuestions));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const selectOption = (option: string) => {
    setSelectedOption(option);
    console.log(option);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore((currentScore) => currentScore + 1);
    }
    setCurrentQuestionIndex((prev) => prev + 1);
    console.log('NEXT');
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setQuestions(() => shuffleArray(sampleQuestions))
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        score,
        selectedOption,
        selectOption,
        nextQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

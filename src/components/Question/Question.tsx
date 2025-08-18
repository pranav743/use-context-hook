import styles from './Question.module.css';
import useQuiz from '../../hooks/useQuiz';
import Option from '../Option/Option';
import NextButton from '../NextButton/NextButton';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

const QuestionComponent = () => {
  const { questions, currentQuestionIndex } = useQuiz();

  if (currentQuestionIndex >= questions.length) {
    return <ScoreBoard />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div className={styles.question}>Loading question...</div>;
  }

  return (
    <div className={styles.question}>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((name, index) => (
        <Option key={index} name={name} />
      ))}
      <NextButton />
    </div>
  );
};

export default QuestionComponent;

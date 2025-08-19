import styles from './ScoreBoard.module.css';
import useQuiz from '@/hooks/useQuiz';

const ScoreBoard = () => {
  const { score, questions, resetQuiz } = useQuiz();
  return (
    <div className={styles.scoreboard}>
      <h1>{`${score} / ${questions.length}`}</h1>
      <button onClick={resetQuiz}>Restart Quiz</button>
    </div>
  );
};

export default ScoreBoard;

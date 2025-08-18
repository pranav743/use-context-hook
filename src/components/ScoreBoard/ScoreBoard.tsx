import styles from './ScoreBoard.module.css';
import useQuiz from '@/hooks/useQuiz';

const ScoreBoard = () => {
  const { score, questions } = useQuiz();
  return (
    <div className={styles.scoreboard}>
      <h1>{`${score} / ${questions.length}`}</h1>
    </div>
  );
};

export default ScoreBoard;

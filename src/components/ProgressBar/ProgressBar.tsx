import useQuiz from '@/hooks/useQuiz';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  const { questions, currentQuestionIndex } = useQuiz();

  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className={styles.progressText}>
        Question {currentQuestionIndex} of {questions.length}
      </span>
    </div>
  );
};

export default ProgressBar;

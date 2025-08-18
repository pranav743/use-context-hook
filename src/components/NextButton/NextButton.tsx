import useQuiz from '@/hooks/useQuiz';
import styles from './NextButton.module.css';

const NextButton = () => {
  const { nextQuestion } = useQuiz();
  return (
    <div className={styles.nextbutton}>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default NextButton;

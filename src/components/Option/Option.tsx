import useQuiz from '@/hooks/useQuiz';
import styles from './Option.module.css';

const Option = ({ name }: { name: string }) => {
  const { selectOption, selectedOption } = useQuiz();
  return (
    <div
      className={`${styles.option} ${selectedOption === name ? styles.selected : ''}`}
      onClick={() => selectOption(name)}
    >
      <h4>{name}</h4>
    </div>
  );
};

export default Option;

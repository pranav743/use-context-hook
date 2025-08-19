import { QuizProvider } from './context/QuizContextProvider';
import QuestionComponent from './components/Question/Question';
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {
  return (
    <div>
      <QuizProvider>
        <h1>Quiz App</h1>
        <ProgressBar />
        <QuestionComponent />
      </QuizProvider>
    </div>
  );
}

export default App;

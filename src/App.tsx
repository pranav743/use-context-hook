import { QuizProvider } from './context/QuizContextProvider';
import QuestionComponent from './components/Question/Question';

function App() {
  return (
    <div>
      <QuizProvider>
        <h1>My React Template</h1>
        <QuestionComponent />
      </QuizProvider>
    </div>
  );
}

export default App;

import CounterApp from './components/CounterApp';
import LoginFormApp from './components/LoginFormApp';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '40px', borderBottom: '2px solid #ccc', paddingBottom: '20px' }}>
        <CounterApp />
      </div>
      
      <div style={{ marginBottom: '40px', borderBottom: '2px solid #ccc', paddingBottom: '20px' }}>
        <LoginFormApp />
      </div>
      
      <div>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;

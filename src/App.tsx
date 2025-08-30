import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import FeedbackForm from './components/FeedbackForm';
import ImageSlideshow from './components/ImageSlideshow';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/slideshow" element={<ImageSlideshow />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

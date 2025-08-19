import type { Question } from '@/types/QuizApp';

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'Which language is used in React?',
    options: ['Python', 'JavaScript', 'C++', 'Java'],
    answer: 'JavaScript',
  },
  {
    id: 3,
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
  },
  {
    id: 4,
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['William Wordsworth', 'William Shakespeare', 'John Keats', 'Jane Austen'],
    answer: 'William Shakespeare',
  },
  {
    id: 5,
    question: 'Which element has the chemical symbol "O"?',
    options: ['Gold', 'Oxygen', 'Osmium', 'Iron'],
    answer: 'Oxygen',
  },
  {
    id: 6,
    question: 'What does HTTP stand for?',
    options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'Hyperlink Text Transfer Protocol', 'Hyper Transfer Text Process'],
    answer: 'HyperText Transfer Protocol',
  },
  {
    id: 7,
    question: 'In which year did World War II end?',
    options: ['1945', '1939', '1918', '1965'],
    answer: '1945',
  },
  {
    id: 8,
    question: 'Which continent is the Sahara Desert located in?',
    options: ['Asia', 'Africa', 'Australia', 'South America'],
    answer: 'Africa',
  },
  {
    id: 9,
    question: 'What is the boiling point of water at sea level?',
    options: ['100°C', '90°C', '80°C', '120°C'],
    answer: '100°C',
  },
  {
    id: 10,
    question: 'Who is known as the father of computers?',
    options: ['Alan Turing', 'Charles Babbage', 'Bill Gates', 'Steve Jobs'],
    answer: 'Charles Babbage',
  },
];


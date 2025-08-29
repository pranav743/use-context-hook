# Custom Hooks Demo - React TypeScript Project

This project demonstrates custom React hooks in TypeScript.

## 🎯 Custom Hooks

- `useFetch(url)`: Data fetching with loading, error states.
- `useForm(initialValues)`: Form state management.
- `useLocalStorage(key, initialValue)`: Persistent state.
- `useWindowSize()`: Window dimensions tracking.

## 🏗️ Project Structure

```
src/
├── hooks/          # Custom hooks
├── components/     # UI components
├── context/        # Theme context
├── types/          # TypeScript types
└── App.tsx         # Main app
```

## 🚀 Features

- Navigation: Posts, Users, Auth, Window Size pages.
- Theme System: Light/Dark mode with persistence.
- Responsive Design: Mobile and desktop views.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation & Running

1. Install: `npm install`
2. Start JSON Server: `npx json-server db.json --port 3000`
3. Start Dev Server: `npm run dev`
4. Open: `http://localhost:5173`

### Scripts
- `npm run dev` - Development
- `npm run build` - Production build

## 📊 API Endpoints
- `/posts`, `/users`, `/comments`, `/profile`

## 📝 Usage Examples

```typescript
const { data, loading, error } = useFetch<Post[]>('/posts');
const { values, handleChange } = useForm({ email: '', password: '' });
const [theme, setTheme] = useLocalStorage('theme', 'light');
const { width, height } = useWindowSize();
```

# Build a “Personal Task Manager” React Application

Your task is to create a full-fledged Task Manager app where users can perform the following features:

## Authentication & Routing
- Create two routes:
    - `/login` → Login Page
    - `/dashboard` → Protected Dashboard Page (accessible only after login).
- Use React Router for navigation.
- Redirect users to `/login` if they try accessing `/dashboard` without logging in.

## State Management with Redux Toolkit
- Manage authentication state (isLoggedIn, user info) using Redux Toolkit.
- Store and manage tasks (CRUD operations) in Redux as well.

## Tasks Feature
In `/dashboard`, users should be able to:
- Add new tasks (title, description, priority).
- Mark tasks as complete/incomplete.
- Delete tasks.
- Filter tasks (All, Completed, Pending).

## Hooks Usage
- Use `useState` for form inputs.
- Use `useEffect` to load initial tasks from a mock API (e.g., https://jsonplaceholder.typicode.com/todos) and merge them with user-added tasks.

## UI & Styling
- Use Tailwind CSS for layout & styling.
- Use ShadCN UI components (e.g., Button, Card, Dialog, Toaster) for a professional look.

## Bonus (Optional for Extra Points)
- Persist tasks in localStorage so they remain after page reload.
- Show a toast notification when tasks are added/updated/deleted.

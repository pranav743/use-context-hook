# Personal Task Manager

A full-fledged Task Manager application built with React, TypeScript, Redux Toolkit, and ShadCN UI components.

## Features

### 🔐 Authentication & Routing
- **Login Page** (`/login`) - Simple authentication form
- **Protected Dashboard** (`/dashboard`) - Only accessible after login
- **React Router** navigation with protected routes
- **Automatic redirection** - redirects to login if not authenticated

### 🗂️ State Management
- **Redux Toolkit** for state management
- **Authentication state** (isLoggedIn, user info)
- **Task management** with full CRUD operations
- **Persistent storage** in localStorage

### ✅ Task Management Features
- **Add new tasks** with title, description, and priority levels
- **Mark tasks** as complete/incomplete
- **Delete tasks** with confirmation
- **Filter tasks** by status (All, Completed, Pending)
- **Priority levels** (Low, Medium, High) with color coding
- **Task statistics** showing total, completed, and pending counts

### 🎯 Advanced Features
- **Initial data loading** from JSONPlaceholder API
- **Toast notifications** for all user actions
- **Responsive design** that works on all screen sizes
- **LocalStorage persistence** - tasks persist after page reload
- **Real-time statistics** and task counts

### 🎨 UI & Styling
- **Tailwind CSS** for modern, responsive styling
- **ShadCN UI components** for professional appearance
- **Dark/Light theme support** via CSS variables
- **Lucide React icons** for consistent iconography

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd assignment10
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Login
1. Navigate to the login page
2. Enter any email and password (demo authentication)
3. Click "Sign In" to access the dashboard

### Managing Tasks
1. **Add Task**: Click the "Add Task" button to create a new task
2. **Complete Task**: Click the "Complete" button to mark as done
3. **Delete Task**: Click the "Delete" button to remove a task
4. **Filter Tasks**: Use the filter buttons (All, Completed, Pending)

### Logout
Click the "Logout" button in the header to sign out

## Technology Stack

### Core Technologies
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### State Management
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux

### Routing
- **React Router Dom** - Client-side routing

### UI Components
- **ShadCN UI** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Notifications
- **Sonner** - Toast notifications

### API Integration
- **JSONPlaceholder** - Mock API for initial tasks

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   ├── Dashboard.tsx   # Main dashboard page
│   ├── LoginPage.tsx   # Authentication page
│   ├── TaskCard.tsx    # Individual task component
│   ├── TaskForm.tsx    # Add task modal
│   ├── TaskFilter.tsx  # Task filtering component
│   └── ProtectedRoute.tsx # Route protection
├── hooks/              # Custom React hooks
│   └── redux.ts        # Typed Redux hooks
├── store/              # Redux store configuration
│   ├── index.ts        # Store setup
│   └── slices/         # Redux slices
│       ├── authSlice.ts
│       └── taskSlice.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── lib/                # Utility functions
    └── utils.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint


## Demo Information

- **Login**: Use any email and password combination
- **Initial Tasks**: Automatically loads 10 sample tasks from JSONPlaceholder API
- **Persistence**: All tasks and authentication state persist in localStorage

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

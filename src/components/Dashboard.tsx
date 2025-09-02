import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { logout } from '@/store/slices/authSlice';
import { fetchInitialTasks } from '@/store/slices/taskSlice';
import TaskForm from '@/components/TaskForm';
import TaskCard from '@/components/TaskCard';
import TaskFilter from '@/components/TaskFilter';
import { LogOut, User } from 'lucide-react';
import { toast } from 'sonner';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => (state as any).auth.user);
  const tasks = useAppSelector(state => (state as any).tasks.tasks);
  const filter = useAppSelector(state => (state as any).tasks.filter);
  const loading = useAppSelector(state => (state as any).tasks.loading);

  useEffect(() => {
    dispatch(fetchInitialTasks());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'completed':
        return task.completed;
      case 'pending':
        return !task.completed;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-gray-900">Task Manager</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                Welcome, {user?.name}
              </div>
              <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Tasks</h2>
            <p className="text-gray-600">Manage your daily tasks efficiently</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <TaskFilter />
            <TaskForm />
          </div>
        </div>

        
        {loading && (
          <Card className="mb-6">
            <CardContent className="py-8">
              <div className="text-center text-gray-500">Loading initial tasks...</div>
            </CardContent>
          </Card>
        )}

        
        {filteredTasks.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <div className="text-center">
                <div className="text-gray-400 mb-2">No tasks found</div>
                <p className="text-sm text-gray-500">
                  {filter === 'all' 
                    ? "Start by adding your first task!"
                    : `No ${filter} tasks at the moment.`
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}

  <Card className="mt-8">
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{tasks.length}</div>
                <div className="text-sm text-gray-500">Total Tasks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {tasks.filter(t => t.completed).length}
                </div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {tasks.filter(t => !t.completed).length}
                </div>
                <div className="text-sm text-gray-500">Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

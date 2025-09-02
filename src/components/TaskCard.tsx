import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppDispatch } from '@/hooks/redux';
import { deleteTask, toggleTaskComplete } from '@/store/slices/taskSlice';
import { toast } from 'sonner';
import { Trash2, Check, X } from 'lucide-react';
import type { Task } from '@/types';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const dispatch = useAppDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleTaskComplete(task.id));
    toast.success(task.completed ? 'Task marked as pending' : 'Task completed!');
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    toast.success('Task deleted successfully');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <Card className={`transition-all duration-200 ${task.completed ? 'opacity-75 bg-gray-50' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </CardTitle>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className={`text-sm text-gray-600 mb-4 ${task.completed ? 'line-through' : ''}`}>
          {task.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={task.completed ? "outline" : "default"}
              onClick={handleToggleComplete}
              className="flex items-center gap-1"
            >
              {task.completed ? (
                <>
                  <X className="h-3 w-3" />
                  Undo
                </>
              ) : (
                <>
                  <Check className="h-3 w-3" />
                  Complete
                </>
              )}
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={handleDelete}
              className="flex items-center gap-1"
            >
              <Trash2 className="h-3 w-3" />
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

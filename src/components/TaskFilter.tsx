import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setFilter } from '@/store/slices/taskSlice';

export default function TaskFilter() {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(state => (state as any).tasks.filter);
  const tasks = useAppSelector(state => (state as any).tasks.tasks);

  const filters = [
    { key: 'all', label: 'All', count: tasks.length },
    { key: 'pending', label: 'Pending', count: tasks.filter(t => !t.completed).length },
    { key: 'completed', label: 'Completed', count: tasks.filter(t => t.completed).length },
  ] as const;

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map(filter => (
        <Button
          key={filter.key}
          variant={currentFilter === filter.key ? 'default' : 'outline'}
          onClick={() => dispatch(setFilter(filter.key))}
          className="flex items-center gap-2"
        >
          {filter.label}
          <span className="bg-white text-gray-700 px-1.5 py-0.5 rounded-full text-xs">
            {filter.count}
          </span>
        </Button>
      ))}
    </div>
  );
}

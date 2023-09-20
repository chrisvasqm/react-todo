import Task from '../models/Task';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  onChecked: (id: number) => void;
}

function TaskList({ tasks, onChecked }: Props) {
  return (
    <ul>
      {tasks && tasks.map(task => <TaskItem key={task.id} task={task} onChecked={onChecked} />)}
    </ul>
  );
}

export default TaskList;

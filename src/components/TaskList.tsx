import Task from '../models/Task';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
}

function TaskList({ tasks }: Props) {
  return <ul>{tasks && tasks.map(task => <TaskItem key={task.id} task={task} />)}</ul>;
}

export default TaskList;

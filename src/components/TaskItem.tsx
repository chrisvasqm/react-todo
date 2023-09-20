import { Checkbox } from '@chakra-ui/react';
import Task from '../models/Task';

interface Props {
  task: Task;
  onChecked: (id: number) => void;
}

function TaskItem({ task, onChecked }: Props) {
  return (
    <div>
      <Checkbox isChecked={task.isChecked} onChange={() => onChecked(task.id)}>
        {task.name}
      </Checkbox>
    </div>
  );
}

export default TaskItem;

import { Checkbox, Text } from '@chakra-ui/react';
import Task from '../models/Task';

interface Props {
  task: Task;
  onChecked: (id: number) => void;
}

function TaskItem({ task, onChecked }: Props) {
  return (
    <div>
      <Checkbox isChecked={task.isChecked} onChange={() => onChecked(task.id)}>
        <Text as={task.isChecked ? 's' : undefined}>{task.name}</Text>
      </Checkbox>
    </div>
  );
}

export default TaskItem;

import { Checkbox, HStack } from '@chakra-ui/react';
import Task from '../models/Task';

interface Props {
  task: Task;
  onChecked: (id: number) => void;
}

function TaskItem({ task, onChecked }: Props) {
  return (
    <HStack>
      <Checkbox isChecked={task.isChecked} onClick={() => onChecked(task.id)}>
        {task.name}
      </Checkbox>
    </HStack>
  );
}

export default TaskItem;

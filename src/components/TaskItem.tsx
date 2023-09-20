import { Checkbox, HStack, Text } from '@chakra-ui/react';
import Task from '../models/Task';

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  return (
    <HStack>
      <Checkbox isChecked={task.isChecked} />
      <Text>{task.name}</Text>
    </HStack>
  );
}

export default TaskItem;

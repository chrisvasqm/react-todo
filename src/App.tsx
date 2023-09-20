import { useState } from 'react';
import { Container, FormControl, HStack, Heading, Button, Input, Stack } from '@chakra-ui/react';
import TaskList from './components/TaskList';
import Task from './models/Task';

function App() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'Task 1', isChecked: false },
    { id: 2, name: 'Task 2', isChecked: true }
  ]);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (taskName === '') return;

    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      isChecked: false
    };

    setTasks([...tasks, newTask]);
  }

  function handleChecked(id: number) {
    setTasks(previousTask =>
      previousTask.map(task => {
        if (task.id === id) return { ...task, isChecked: !task.isChecked };

        return task;
      })
    );
  }

  return (
    <Container size={['md', 'sm']}>
      <Stack spacing={2}>
        <Heading>ToDo App</Heading>

        <form onSubmit={handleSubmit}>
          <HStack>
            <FormControl onChange={e => setTaskName(e.target.value)}>
              <Input placeholder='Enter task name here' />
            </FormControl>

            <Button colorScheme='blue' type='submit'>
              Add
            </Button>
          </HStack>
        </form>

        <TaskList tasks={tasks} onChecked={handleChecked} />
      </Stack>
    </Container>
  );
}

export default App;

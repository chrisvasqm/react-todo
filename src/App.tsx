import { useState } from 'react';
import { Container, FormControl, HStack, Heading, Button, Input, Stack } from '@chakra-ui/react';
import data from './data/tasks.json';
import TaskList from './components/TaskList';
import Task from './models/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>(data);
  const [taskName, setTaskName] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      isChecked: false
    };

    setTasks([...tasks, newTask]);
  }

  function handleChecked(id: number) {
    console.log(id);
    console.log(taskName);
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

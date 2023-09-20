import { Container, FormControl, HStack, Heading, Button, Input, Stack } from '@chakra-ui/react';
import data from './data/tasks.json';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(data);
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

        <ul>{tasks && tasks.map(task => <li key={task.id}>{task.name}</li>)}</ul>
      </Stack>
    </Container>
  );
}

export default App;

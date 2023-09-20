import { Container, FormControl, HStack, Heading, Button, Input, Stack } from '@chakra-ui/react';
import data from './data/tasks.json';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(data);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('Submit');
  }

  return (
    <Container size={['md', 'sm']}>
      <Stack spacing={2}>
        <Heading>ToDo App</Heading>

        <form onSubmit={handleSubmit}>
          <HStack>
            <FormControl>
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

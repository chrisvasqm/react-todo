import { Heading } from '@chakra-ui/react';

function App() {
  const tasks = [
    { id: 1, name: 'Task 1', isChecked: false },
    { id: 2, name: 'Task 2', isChecked: true }
  ];

  return (
    <>
      <Heading>ToDo App</Heading>

      <ul>{tasks && tasks.map(task => <li key={task.id}>{task.name}</li>)}</ul>
    </>
  );
}

export default App;

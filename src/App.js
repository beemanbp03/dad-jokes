import './App.css';
import Card from './components/UI/Card';

const jokes = [
  {
    id: 1,
    setup: "Why was Cinderella so bad at soccer?",
    punchline: "She kept running away from the ball."
  },
  {
    id: 2,
    setup: 'What do you call a well-balenced horse?',
    punchline: 'Stable.'
  },
  {
    id: 3,
    setup: 'Why do cows wear bells?',
    punchline: 'Because their horns dont work.'
  },
];


function App() {
  const classes = 'app ';

  return (
    <div className='app'>
      <Card jokes={jokes}>
      </Card>
    </div>
  );
}

export default App;

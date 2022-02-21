import './App.css';
import useCounter from './hooks/use-counter';

function App() {
  const plusCounter = useCounter(1,(value) => value + 1);
  const minusCounter = useCounter(1,(value) => value - 1);

  return (
    <div className="App">
      <p>{plusCounter}</p>
      <p>{minusCounter}</p>
    </div>
  );
}

export default App;

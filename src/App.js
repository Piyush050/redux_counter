import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, mulNumber, divNumber } from './actions/index';

function App() {
  const myState = useSelector((state) => state.Counter);
  const myMul = useSelector((state) => state.multiply);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h4>Increment/Decrement</h4>
      <h1>{myState}</h1>
      <div className='button1'>
        <button onClick={() => dispatch(incNumber(10))}>+</button>
        <button onClick={() => dispatch(decNumber(5))}>-</button>
      </div>
      <br />
      <h4>Multiply/Divide</h4>
      <h1>{myMul}</h1>
      <div className='button2'>
        <button onClick={() => dispatch(mulNumber(5))}>×</button>
        <button onClick={() => dispatch(divNumber(5))}>÷</button>
      </div>
    </div>
  );
}

export default App;

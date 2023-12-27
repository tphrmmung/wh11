const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter({ onIncrement, onDecrement, onReset, onRemove, count }) {
    return (
      <div className="counter">
        <button className="btn" onClick={onDecrement}> - </button>
        <h3>{count}</h3>
        <button className="btn" onClick={onIncrement}> + </button>
        <button className="btn" onClick={onReset}> C </button>
        <button className="btn" onClick={onRemove}> X </button>
      </div>
    );
  }
  
  function SumInfo({ color, size, sum }) {
    const stTitle = {
      color,
      fontSize: size === 'big' ? '50px' : '40px',
    };
  
    return (
      <div className='suminfo'>
        <h1 style={stTitle}>Sum = {sum}</h1>
      </div>
    );
  }
  
  function App() {
    const [counters, setCounters] = React.useState([0]);
  
    const addCounter = () => {
      setCounters((prevCounters) => [...prevCounters, 0]);
    };
  
    const updateCounter = (index, value) => {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters[index] = value;
        return newCounters;
      });
    };
  
    const clearCounter = (index) => {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters[index] = 0;
        return newCounters;
      });
    };
  
    const removeCounter = (index) => {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters.splice(index, 1);
        return newCounters;
      });
    };
  
    const getTotalSum = () => {
      return counters.reduce((sum, count) => sum + count, 0);
    };
  
    const clearAllCounters = () => {
      setCounters([0]);
    };
  
    return (
      <>
        <h1 className="text-center">Codecamp Academy 01</h1>
//       <h1 className="text-center">Tarntip prommungkhun snru</h1>
       <button className="btn-center" onClick={addCounter}>Add Counter</button>
        <SumInfo color="black" size="big" sum={getTotalSum()} />
        {counters.map((count, index) => (
          <Counter
            key={index}
            count={count}
            onIncrement={() => updateCounter(index, count + 1)}
            onDecrement={() => updateCounter(index, Math.max(0, count - 1))}
            onReset={() => clearCounter(index)}
            onRemove={() => removeCounter(index)}
          />
        ))}
      </>
    );
  }
  
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);

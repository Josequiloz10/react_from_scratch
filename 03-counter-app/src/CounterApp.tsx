import React, {useState} from 'react';

const CounterApp = ({value = 10} : {value? :number}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1 );
    const handleSubstract = () => setCounter(counter - 1 );
    const handleReset = () => setCounter( value )

    return(
      <>
      <h1>CounterApp</h1>
          <h2>{counter}</h2>
          <button onClick={handleAdd}>+1</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSubstract}>-1</button>
      </>
    );
}

export default CounterApp;
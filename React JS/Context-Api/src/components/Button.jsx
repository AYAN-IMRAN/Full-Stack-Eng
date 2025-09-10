import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function Button() {
    console.log("Button re render")
    const {count ,setCount } = useContext(CounterContext)
  return (
    <button onClick={() => setCount(count + 1)}>
        Increment
    </button>
  );
}

export default Button
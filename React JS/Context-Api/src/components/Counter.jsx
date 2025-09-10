import React from 'react'
import ShowCount from './ShowCount'
import Button from './Button'

function Counter({ count, setCount })
 
{
    console.log("Counter re render")
  return (
    <div>
      <ShowCount  />
      <Button  />
    </div>
  );


}

export default Counter;

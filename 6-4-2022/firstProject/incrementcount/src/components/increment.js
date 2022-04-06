import react,{useState} from 'react'
import Button from '@mui/material/Button'
import React from 'react';
function Increment() {
  const [count,setCount]=useState(0);
  const handleIncrement=()=>{
    setCount(prevCount => prevCount+1)
  }
  const handleDecrement=()=>{
    setCount(prevCount => prevCount-1)
  }
  return (
    <>
    <Button variant='contained' onClick={handleIncrement}>+</Button>
    <Button variant='contained' color='error' onClick={handleDecrement}>-</Button>
    <h5>count is {count}</h5>
    <h1>hello</h1>
    </>
  
    );
}

export default Increment;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {decNumber, incNumber } from './Action/index';

 const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispach = useDispatch();
  return (
    <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
      <h1>Increase and Decrease counter</h1>
      <h4>using react and redux</h4>
      <div>
        <button onClick={() =>dispach(incNumber(5))} >Increase by 5</button>
        <input style={{width:"50px", textAlign: "center"}} type='text'  value={myState} />
        <button onClick={() =>dispach(decNumber(2))} >decrease by 2</button>
      </div>
    </div>
  )
}

export default App
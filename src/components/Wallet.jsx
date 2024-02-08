import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_CASH, GET_CASH } from '../store/cashReducer';

function Wallet() {
  const userInput = useRef();
  const dispath = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  function getCash() {
    // dispath принимает action 
    let value = Number(userInput.current.value); 
    dispath({...GET_CASH, payload: value});
  }
  function addCash() {
    let value = Number(userInput.current.value); 
    dispath({...ADD_CASH, payload: value});
  }

  return (
    <div>
      <h1>Текущий счет: {cash}</h1>
      <input ref={userInput} type='text' placeholder='Кол-во many'/>
      <button onClick={() => getCash()}>Достать бабло</button>
      <button onClick={() => addCash()}>Закинуть бабло</button>
    </div>
  )
}

export default Wallet;
import logo from './logo.svg';
import './App.css';
import {Hello} from './Hello';
import { useForm } from './useForm';
import { useState } from 'react';
function App() {
  const [values, handle] = useForm({email : "", password: ""})

  const [hello, Sethello ] = useState(true)

  return (
    <div className="App">
      {/* onclcik this change the hello variable state from true to false and vice versa */}
      <button onClick={()=>Sethello(!hello)}>toggle</button>
      
      {/* this will show output if hello set is to true */}
      {hello && <Hello/>}

      {/* here onchange will call useform function which will take 2 inputs email and pass as an argument  */}
      <input name="email" values = {values.email} onChange={handle}></input>
      <input type="password" name="password" values = {values.email} onChange={handle}></input>
      
    </div>
  );
}

export default App;

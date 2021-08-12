import logo from './logo.svg';
import './App.css';
import {Hello} from './Hello';
import { useForm } from './useForm';
import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
function App() {
  const [values, handle] = useForm({email : "", password: ""})
  
  
  
  // here use state get the count value from local storage 
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")))
  const [hello, Sethello ] = useState(true)
  
  const {data, loading} = useFetch(`http://numberapi.com/${count}/trivia`)



  // this useEffect will set the count as a string in localstorage
  useEffect(()=>{
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])



  return (
    <div className="App">
      {/* onclcik this change the hello variable state from true to false and vice versa */}

      data: {count}
      <button onClick={()=>setCount(count+1)}>press me</button>
      
      <div>{loading ?  "loading.....": data}</div>
    
      <button onClick={()=>Sethello(!hello)}>toggle</button>
      
      {/* this will show output if hello set is to true */}
      {hello && <Hello/>}

      {/* here onchange will call useform function which will take 2 inputs email and pass as an argument  */}
  
      
    </div>
  );
}

export default App;

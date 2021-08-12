import logo from './logo.svg';
import './App.css';
import { useForm } from './useForm';
function App() {
  const [values, handle] = useForm({email : "", password: ""})

  return (
    <div className="App">

      {/* here onchange will call useform function which will take 2 inputs email and pass as an argument  */}
      <input name="email" values = {values.email} onChange={handle}></input>
      <input type="password" name="password" values = {values.email} onChange={handle}></input>
      
    </div>
  );
}

export default App;

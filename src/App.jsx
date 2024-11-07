import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

function App() {

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);


  return (
    <>
      < Authenticate />
      < SignUpForm />
    </>
  );
}

export default App

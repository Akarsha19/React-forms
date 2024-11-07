import { useState } from "react";


export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    //console.log("HELLO")
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (

    <>

      {error && <p>{error}</p>}

      <h2>Sign Up!</h2>

      <form onSubmit={handleSubmit}>

        <label>
          Username: <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password: <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

        </label>

        <button>Submit</button>
      </form >



    </>
  )
}

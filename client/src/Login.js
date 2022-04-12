import React,{useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

 function Login({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[errors, setErrors] = useState([])

    let navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      fetch("/log_in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username, password }),
    }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
              onLogin(user)
            // useNavigate
            navigate("/user");
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
    }  

   
  return (
    <div>
        <h1 >Log In</h1>
      <form onSubmit={handleSubmit}>
      <h2> Username : </h2>
      <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
              required
              fullWidth
              autoFocus
      />
      <h2> Password : </h2>
      <input 
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <button  className = "button" type = "submit"> Submit </button>
     </form>
    </div>
   
  )
}

export default Login;
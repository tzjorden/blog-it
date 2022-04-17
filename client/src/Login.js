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
            navigate("/user");
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
    }  

   
  return (
    <div>
        {/* <h1>Log In</h1>
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
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <button className="button" type="submit"> 
          Submit 
       </button>
     </form> */}

    <div className="login-box">
     <h1 className = "login-text">Log In</h1>
      <form onSubmit={handleSubmit}>
      <div className="user-box">
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
        <label>Username</label>
      </div>
      <div className="user-box">
      <input 
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Password</label>
      </div>
      <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button className="button" type="submit"> 
          Submit 
       </button>
    </a>
  </form>
</div>
</div>
   
  )
}

export default Login;
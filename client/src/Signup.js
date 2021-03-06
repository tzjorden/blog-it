import React,{useState, useEffect} from 'react'
  
 function Signup({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }
  
  return (
    // <div className = "signup">
    //     <h1>Create an Account</h1>
    //   <form className = "form" onSubmit={handleSubmit}>
    //   <h2>Username:</h2>
    //   <input
    //     type="text"
    //     id="username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <h2>Password:</h2>
    //   <input
    //     type="password"
    //     id="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <h2>Confirm Password:</h2>
    //   <input
    //     type="password"
    //     id="password_confirmation"
    //     value={passwordConfirmation}
    //     onChange={(e) => setPasswordConfirmation(e.target.value)}
    //   />
    //   <button className = "button" type="submit">Submit</button>
    // </form>
    // </div>
    <div className = "login-box">
    <h1 className = "login-text">Create Account</h1>
    <form onSubmit={handleSubmit}>
    <div className="user-box">
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    <label>Username:</label>
    </div>
    <div className="user-box">
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <label>Password:</label>
    </div>
    <div className="user-box">
    <input
      type="password"
      id="password_confirmation"
      value={passwordConfirmation}
      onChange={(e) => setPasswordConfirmation(e.target.value)}
    />
    <label>Confirm Password:</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    <button className="button" type="submit">Submit</button>
    </a>
  </form>
</div>
  )
}

export default Signup;

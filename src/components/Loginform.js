import React, { useState } from "react";
import "../index.css";

function Loginform({ Login, error, Signup }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [logged, setLogged] = useState(false);
  const [newuser, setNewuser] = useState({name: "", email: "", password: ""});

  const submitHandler= e => {
      e.preventDefault();
      Login(details);
  }

  const signsubmitHandler = e => {
    e.preventDefault();
    Signup(newuser);
  }

  const storeName = (e) =>{
    setNewuser({...newuser, name : e.target.value})
  }

  return (
    (logged == false)?(
    <form onSubmit={submitHandler}>
      <div className="login-container">
        <h2>Login</h2>

        {(error != "") ? (<div className="error">{error}</div>) : ""}

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={e=> setDetails({...details, name:e.target.value})} value={details.name}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={e=> setDetails({...details, email:e.target.value})} value={details.email}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={e=> setDetails({...details, password:e.target.value})} value={details.password}/>
        </div>
        <input type="submit" value="Submit" /><button onClick={() => setLogged(true)}>SignUp</button>
      </div>
    </form>
    ) : (

        // SignUp Form

        <form onSubmit={signsubmitHandler}>
      <div className="login-container">
        <h2>Login</h2>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={e=> setNewuser({...newuser, name:e.target.value})} value={newuser.name}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={e=> setNewuser({...newuser, email:e.target.value})} value={newuser.email}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={e=> setNewuser({...newuser, password:e.target.value})} value={newuser.password}/>
        </div>
        <input type="submit" value="Submit" /><button onClick={() => setLogged(false)}>LogIn</button>
      </div>
    </form>
    )
  );
}

export default Loginform;

import React, { useState } from "react";
import Loginform from './components/Loginform.js'

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged In");
      setUser({
        name : details.name,
        email : details.email
      });
      
      setError("");

    }else{
      setError("Details do not match");
    }
  }

  const Logout= () => {
    console.log("Logout");
    setUser({ name: "",email: ""});
  }

  return (
    <>
      <div>
        {(user.email !="")?(
          <div>
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ): (
          <Loginform Login={Login} error={error}/>
        )}
      </div>
    </>
  );
}

export default App;

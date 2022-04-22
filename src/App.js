import React, { useState } from "react";
import Loginform from './components/Loginform.js'

function App() {
  const [adminUser, setAdminUser] = useState([{
    email: "admin@admin.com",
    password: "admin123",
  }]);

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
      setError("No account found. Use right credentials or Signup");
    }
  }

  const Signup = newuser => {
    console.log(newuser);
    setAdminUser([
      ...adminUser, {email: newuser.email, password: newuser.password}
    ]);
    setUser({
      name : newuser.name,
      email : newuser.email
    });
    console.log(adminUser);
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
          <Loginform Login={Login} error={error} Signup={Signup}/>
        )}
      </div>
    </>
  );
}

export default App;

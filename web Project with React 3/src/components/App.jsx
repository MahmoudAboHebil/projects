import React from "react";
import Login from "./login";
const islogin = false;


function App() {
  return (
    <div className="container">
      islogin ? <h1>Hello</h1> : <Login />
    </div>
  );
}

export default App;

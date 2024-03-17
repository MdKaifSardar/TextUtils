// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/about";
import Alert from "./components/alert";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3f3f40";
      showAlert("The mode has been set to dark", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("The mode has been set to light", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <TextForm
            innerTxt="Enter a text here to analyse"
            heading="Text input area"
            mode={mode}
            showalert={showAlert}/>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // Whwther dark is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="My-App" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter The text Analyze Below" mode={mode} />
        <About />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import About from "./components/03-About";
import Navbar from "./components/01-Navbar";
import TextForm from "./components/02-TextForm";
import Alert from "./components/04-Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // 02-TextForm--> Enable Dark mode
  const [mode, setMode] = useState("light"); // Whether dark is enabled or not

  // 04-Alert--> Enable Alert Mess
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="My-App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter The text Analyze Below"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

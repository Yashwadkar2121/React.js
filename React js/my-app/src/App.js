import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="My-App" />
      <div className="container">
        <TextForm heading="Enter The text to analyze" />
      </div>
    </>
  );
}

export default App;

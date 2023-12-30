import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="My-App" />
      <div className="container">
        <TextForm heading="Enter The text :-" />
      </div>
    </>
  );
}

export default App;

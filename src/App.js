
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <h1 className="dictionary">What does it mean??</h1>
      <h4 className="sub-title">Dictionary search</h4>
      <div className="App">
        <Dictionary defaultKeyword="dictionary" />
      </div>
      <div className="github">
        <a
          href="https://github.com/hakther15/dictionary-react-app"
          target="blank">
          Open-source code
        </a>{" "}
        by Sina A
      </div>
    </div>
  );
}

export default App;

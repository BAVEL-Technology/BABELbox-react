import "./App.css";
import Wrapper from "./components/Wrapper";
import BBLogo from "./components/BBLogo";

function App() {
  return (
    <div className="App">
      <Wrapper classes="h-screen w-screen bg-blue-200 flex flex-col justify-center">
        <BBLogo />
      </Wrapper>
    </div>
  );
}

export default App;

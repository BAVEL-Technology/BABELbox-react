import "./App.css";
import Wrapper from "./components/Wrapper";
import BabelboxLogo from "./components/BabelboxLogo";

function App() {
  return (
    <div className="App">
      <Wrapper classes="h-screen w-screen bg-blue-200 flex flex-col justify-center">
        <BabelboxLogo />
      </Wrapper>
    </div>
  );
}

export default App;

import "./App.css";
import Wrapper from "./components/Wrapper";
import BBLogo from "./components/BBLogo";
import GameButton from "./components/GameButton";

function App() {
  return (
    <Router>
      <div>
        <Wrapper classes="h-screen w-screen bg-blue-200 flex flex-col justify-center">
          <Route exact path="/" component={Main} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
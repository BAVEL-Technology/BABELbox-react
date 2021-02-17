import "./App.css";
import Wrapper from "./components/Wrapper";
<<<<<<< HEAD
import BBLogo from "./components/BBLogo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main"

function App() {
  return (
    <div className="App">
      <Router>
        <BBLogo />
          <Wrapper classes="h-screen w-screen bg-blue-200 flex flex-col justify-center">
            {/* route to each page enter path name and component uses imported page name */}
            <Route exact path="/" component={Main} />
          </Wrapper>
      </Router>
    </div>
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
    <Router>
      <div>
        <Wrapper classes="h-screen w-screen bg-blue-200 flex flex-col justify-center">
          <Route exact path="/" component={Main} />
        </Wrapper>
      </div>
    </Router>
>>>>>>> main
  );
}

export default App;

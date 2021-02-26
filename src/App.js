import "./App.css";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import LiarLiar from "./games/LiarLiar";

function App() {
  return (
    <Router>
      <div>
        {/* Wrapper for background and centering things on the page. */}
        <Wrapper classes="min-h-screen h-full bg-blue-200">
          {/* Switch statement for the router. */}
          <Switch>
            {/* Render main page. */}
            <Route exact path="/">
              <Main />

            </Route>
            {/* Render Liar Liar */}
            <Route path="/liarliar">
              <LiarLiar />
            </Route>
            {/* Render About Us page on route. */}
            <Route exact path="/about-us">
              <AboutUs />
            </Route>
            {/* Render this if no other page was found. */}
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

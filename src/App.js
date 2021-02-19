import "./App.css";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <div>
        <Wrapper classes="h-screen w-screen bg-blue-200 flex flex-col items-center">
          {/* Switch statement for the router. */}
          <Switch>
            {/* Render main page. */}
            <Route exact path="/">
              <Main />
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

import "./App.css";
import Wrapper from "./components/Wrapper";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import LiarLiar from "./games/LiarLiar";
import Chat from "./components/Chat";
import NavBar from "./components/Navbar";
import Help from "./pages/Help";

function App() {
  const [messages, setMessages] = useState([]);
  const receivedMessage = (message) => {
    console.log(messages);
    setMessages([...messages, message]);
  };

  return (
    <Router>
      <div>
        {/* Wrapper for background and centering things on the page. */}
        <Wrapper classes="min-h-screen h-full bg-gradient-to-tl from-babelBlue-1000 via-babelBlue-900 to-babelCyan-700">
          {/* Switch statement for the router. */}
          <Switch>
            {/* Render main page. */}
            <Route exact path="/">
              <Main />
            </Route>
            {/* Render Liar Liar */}
            <Route
              exact path={["liarliar/howtoplay", "/liarliar/:code", "/liarliar"]}
            >
              <LiarLiar />
            </Route>
            {/* Render About Us page on route. */}
            <Route exact path="/about-us">
              <AboutUs />
            </Route>
            <Route exact path="/chat">
              <Chat message={receivedMessage} messages={messages} />
            </Route>
            {/* Render Help page on route */}
            <Route exact path="/help">
              <Help />
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

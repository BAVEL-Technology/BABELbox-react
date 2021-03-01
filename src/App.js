import "./App.css";
import Wrapper from "./components/Wrapper";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import LiarLiar from "./games/LiarLiar";
import Chat from "./components/Chat";

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
        <Wrapper classes="min-h-screen h-full bg-blue-200">
          {/* Switch statement for the router. */}
          <Switch>
            {/* Render main page. */}
            <Route exact path="/">
              <Main />
            </Route>
            {/* Render Liar Liar */}
            <Route path={['liarliar/howtoplay','/liarliar/:portalID','/liarliar']}>
              <LiarLiar />
            </Route>
            {/* Render About Us page on route. */}
            <Route exact path="/about-us">
              <AboutUs />
            </Route>
            <Route exact path="/chat">
              <Chat message={receivedMessage} messages={messages} />
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

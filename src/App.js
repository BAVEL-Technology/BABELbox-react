//HEROKU DEPLOYED NOW AS OF 3/5/2021 12:24pm

/* Pull in React and Navi dependencies */
import { Suspense, useEffect, useState } from "react";
import { Router, View, NotFoundBoundary, useLoadingRoute } from "react-navi";

/* Pull in our routes, our auth middleware, and our CSS */
import { routes } from "./routes";
import { auth } from "./utils/auth";
import "./App.css";

function App() {
  /* Set App State, users, to current users stored in localdb cookies 🍪 */
  let [users, setUsers] = useState(() => auth.getUsers());

  let loadingRoute = useLoadingRoute();

  return (
    <Router routes={routes} context={(users, auth)}>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Router>
  );
}

/* Currently not working because no ErrorBounding Component is present */
function renderNotFound() {
  return (
    <div className="App-error">
      <h1>404 - Not Found</h1>
    </div>
  );
}

export default App;

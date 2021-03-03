import React, { Suspense, useEffect, useState } from 'react';
import { Router, Link, View, NotFoundBoundary, useLoadingRoute } from 'react-navi';
import { routes } from "./routes";
import { authService } from "./utils/authService"
import './App.css';

function App() {
  // Use state to store the current user
  let [users, setUsers] =
  useState(() => authService.getUsers())

  // Subscribe that state to the value emitted by the auth service
  useEffect(() => authService.subscribe(setUsers), [])

  let loadingRoute = useLoadingRoute()

  return (
    <Router routes={routes} context={authService, users}>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Router>
  );
}

// Note that create-react-navi-app will always show an error screen when this
// is called. This is because the underlying react-scripts package show
// the error screen when a NotFoundError is thrown, even though it's caught
// by <NotFoundBoundary>. To see the error rendered by this function,
// you'll just need to close the error overlay with the "x" at the top right.
function renderNotFound() {
  return (
    <div className='App-error'>
      <h1>404 - Not Found</h1>
    </div>
  )
}

export default App;

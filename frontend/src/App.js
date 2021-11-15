import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import  Cars  from "./components/CarCards";
import OneCar from "./components/SingleCarPage";
import ProfilePage from "./components/ProfilePage";
import NewListing from "./components/NewListing";
import HomePage from "./components/HomePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/listings'>
            <Cars />
          </Route>
          <Route path='/cars/:id'>
            <OneCar />
          </Route>
          <Route path='/profile/:id'>
            <ProfilePage />
          </Route>
          <Route path='/new-listing'>
            <NewListing/>
          </Route>
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

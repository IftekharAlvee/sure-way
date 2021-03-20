import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Destination from "../Destination/Destination";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import WrongUrl from "../WrongUrl/WrongUrl";

export const UserContext = createContext();

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Landing></Landing>
            </Route>
            <Route exact path="/home">
              <Landing></Landing>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            {/* <Route path="/destination">
                            <Destination></Destination>
                        </Route> */}
            <PrivateRoute path="/destination/:id">
              <Destination></Destination>
            </PrivateRoute>
            <Route path="*">
              <WrongUrl></WrongUrl>
            </Route>

          </Switch>
        </Router>
      </UserContext.Provider>
    
  );
};

export default Home;

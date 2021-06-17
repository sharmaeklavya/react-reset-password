import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import ForgotPass from "./components/ForgotPass";
import ResetPassword from "./components/ResetPass";
import RegisterUser from "./components/Register";
import UserLogin from "./components/UserLogin";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="container px-0">
          <Switch>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/forgotpassword" component={ForgotPass}></Route>
            <Route exact path="/reset/:id" component={ResetPassword}></Route>
            <Route exact path="/register" component={RegisterUser}></Route>
            <Route exact path="/" component={UserLogin}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;

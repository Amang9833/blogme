import Home from "./component/pages/Home/Home";
import Login from "./component/pages/login/Login";
import Register from "./component/pages/register/Register";
import Setting from "./component/pages/setting/Setting";
import Single from "./component/pages/single/Single";
import Write from "./component/pages/write/Write";
import Topbar from "./component/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./component/context/Context";

function App() {
  // const user = true;
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Setting /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

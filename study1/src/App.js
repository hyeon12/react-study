import { Route, Switch } from "react-router";
import Header from "./Header/Header";
import Join from "./Join/Join";
import Login from "./Login/Login";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
      </Switch>
    </div>
  );
}

export default App;

/*
C:\Users\admin\OneDrive\문서\GitHub\react-study\study1\src\Login\Login.js
src\Login\Login.js
*/
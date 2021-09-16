// import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

function App() {
  // const [user, setUser] = useState(""); instead of doing this we are gonna check if we have user or not through useSelector

  const userData = useSelector((state) => state.user);

  return (
    <div className="App">
      {!userData ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/" exact>
                {/* <Chat /> */}
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;

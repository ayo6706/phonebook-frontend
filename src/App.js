// import logo from './logo.svg';
// import './App.css';
//bootstrap styles

import {
  BrowserRouter as 
  Router,
  Route,
  Switch,
  // Link,
  
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
// import Login from './pages/auth/Login'
import Profile from './pages/auth/Profile'
// import useToken from './pages/auth/Login';

function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Signin setToken={setToken} />
  // }
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>    
            <Route path="/login" exact>
              <Signin />     
            </Route>

            <Route path="/register">
              <Signup />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            {/* <Route path="/testing">
              <Test />
            </Route> */}
          </Switch>
        

        </Router>

      </header>
    </div>
  );
}

export default App;

import React, { useEffect, createContext, useReducer, useContext } from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { reducer, initialState } from "./reducers/useReducer";

// auth related pages
import SignIn from "./pages/auth/Login";
import SignUp from "./pages/auth/Register";
import Reset from "./pages/auth/ResetPassword";
import NewPassword from "./pages/auth/NewPassword";

//layout pages
import NavBar from './pages/layout/Navbar';
import Home from "./../src/pages/Homepage";
import AddRecipe from './pages/dashboard/Recipe';
import Dashboard from './pages/dashboard/Dashboard';

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
    } else {
      if (!history.location.pathname.startsWith('/reset'))
        history.push('/signin')
    }
  }, [])
  return (
    <Switch>
      {/* Home route */}
      <Route exact path="/" ><Home /></Route>

      {/* SignIn route */}
      <Route path="/signin"><SignIn /></Route>

      {/* SignUp route */}
      <Route path="/signup"><SignUp /></Route>

      {/* Reseting Password Route */}
      <Route exact path="/reset"><Reset /></Route>

      {/* Route for generating new Password */}
      <Route path="/reset/:token"><NewPassword /></Route>

      {/* Add Recipe  */}
      <Route exact path="/add"><AddRecipe /></Route>

      {/* profile Page */}
      <Route exact path="/myrecipes"><Dashboard /></Route>

    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

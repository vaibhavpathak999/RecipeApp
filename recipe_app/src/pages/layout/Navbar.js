import React, { useContext, useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../App';
import "../css/navbar.css";
// import logo from "../../images/recipeLogo.png";

const NavBar = () => {
  const [userDetails, setUserDetails] = useState([])
  const { state, dispatch } = useContext(UserContext)
  const history = useHistory()
  useEffect(() => {

  }, [])
  const renderList = () => {
    if (state) {
      return [
        <li key="2"><Link to="/myrecipes" className="navbar-ul">My Recipes</Link></li>,
        <li key="3"><Link to="/add" className="navbar-ul">Add Recipe</Link></li>,
        <li key="5">
          <button className="btn btn-primary #fafafa grey lighten-5"
            style={{ margin: " auto 12px auto 2px", color:"#424242" }}
            onClick={() => {
              localStorage.clear()
              dispatch({ type: "CLEAR" })
              history.push('/signin')
            }}
          >
            Logout
          </button>
        </li>


      ]
    } else {
      return [
        <li key="6"><Link to="/signin" className="navbar-ul">SignIn</Link></li>,
        <li key="7"><Link to="/signup" className="navbar-ul">SignUp</Link></li>

      ]
    }
  }

  return (
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: "#2A2A2C" }}>
        <Link to="/" className="brand-logo left" style={{ marginLeft: "4.2%", textDecoration: "none", display:"inline" }} ><span className ={"navbar-title"} style={{ color: "white" }}>MyRecipe Diary</span></Link>
        {/* <img scr ={logo} alt="website logo image" className={"logo"} /> */}
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>


  )
}


export default NavBar;
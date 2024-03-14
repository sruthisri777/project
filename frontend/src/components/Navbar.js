import { Link } from "react-router-dom"
import "./navbar.css";
export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark justify-content-center ">
        <div class="container-fluid">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Home</p></Link>
              </li>
            </ul>
            {/*<ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Profile" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Profile page</p></Link>
              </li>
    </ul>*/}
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/About" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>About</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Help" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Help</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Register" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Register</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Login" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Login</p></Link>
              </li>
            </ul>

           {/* <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Alumini" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Alumini</p></Link>
              </li>
  </ul>*/}

            {/*<ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Admin" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Admin</p></Link>
              </li>
</ul>*/}

            {/*<ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/AluminiData" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>see our alumini</p></Link>
              </li>
</ul>*/}

            {/*<ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/TodoList" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>todo list</p></Link>
              </li>
</ul>*/}
        </div>
        
        </nav>
        </>
    )
}

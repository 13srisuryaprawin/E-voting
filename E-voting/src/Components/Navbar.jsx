import{Link} from "react-router-dom"
import logo from "../assets/images/logo.png"
import { useNavigate } from "react-router-dom"


function Navbar() {
  const navigate=useNavigate()
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-dark text-white">
  <div className="container-fluid mx-5">
    <img src={logo } style={{width:"68px",height:"60px",borderRadius:"60%"}} alt="" className="img-fluid" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2  mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link text-white ps-5 pe-5" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/login"} className="nav-link text-white ps-5 pe-5">Login</Link>
        </li>
       
        <li className="nav-item">
          <Link to={"/results"} className="nav-link text-white ps-5 pe-5" >Results</Link>
        </li>
      </ul>
      <ul className="d-flex list-unstyled mt-2">
        <li><button onClick={()=>navigate("./register")}>Register</button></li>
       
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
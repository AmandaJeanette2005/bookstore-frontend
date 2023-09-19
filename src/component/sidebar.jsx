import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SideBar() {

  let navigate = useNavigate()

      const handleLogOut = async() =>{
        await signOut(auth)
          navigate('/login')
           
      }
      

  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        style={{ height: "100vh", position: "fixed"}}
      >
        <div className="position-sticky">
          <ul className="nav flex-column">
            <br />
            <h3 style={{ fontFamily: "serif" }}>Dashboard</h3>

            <li style={{padding:'1rem'}}>
              <a
                data-bs-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
               style={{color:"black"}}>
                Products
              </a>

              <div className="collapse" id="collapseExample1">
              <Link
                to="product-fantasi"
                className="nav-link active"
                aria-current="page"
                style={{ color: "black" }}
              >
                - Fantasi
              </Link>
              <Link
                to="product-romance"
                className="nav-link active"
                aria-current="page"
                style={{ color: "black" }}
              >
                - Romance
              </Link>
              <Link
                to="product-selfdev"
                className="nav-link active"
                aria-current="page"
                style={{ color: "black" }}
              >
                - Self Development
              </Link>
              </div>
            </li>

            <li style={{padding:'1rem'}}>
              <Link
              to=""
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
               style={{color:"black"}}>
                Order
              </Link>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger" onClick={handleLogOut}>Log Out</button>
      </nav>
    </>
  );
}

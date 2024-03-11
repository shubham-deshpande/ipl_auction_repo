import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    // const[isClicked, setClicked] = useState(false);

    // const getClicked = (event) => {
    //     setClicked(true);
    // }


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" id='name' to="/ipl_auction_repo/">{props.name}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link id='navb' to="/ipl_auction_repo/Teams">{props.t}</Link>
                </li>
                <li className="nav-item">
                <Link id='navb' to="/ipl_auction_repo/Players">{props.p}</Link>
                </li>
            </ul>
      </div>
    </nav>
        {/* {isClicked ? <About/> : null} */}
    </>
  )
}
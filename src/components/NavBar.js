import React from 'react'
import { Link } from "react-router-dom";

 const NavBar = ()=> {

    return (
      <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FizzNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Fizz_news_app/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Fizz_news_app/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fizz_news_app/entertainment">Entertainment</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
               </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Fizz_news_app/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fizz_news_app/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fizz_news_app/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fizz_news_app/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )

}

export default NavBar
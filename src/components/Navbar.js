import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid navBox1">
      <a className="navbar-brand" href="#">TextUtils</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="checkBox">
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"></input>
        <label className={`form-check-label text-${props.mode === 'light'?'dark': 'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'?'dark':'light'} Mode</label>
      </div>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
// Navbar.defaultProps = {
//     title: 'title here',
//     aboutText: 'about stuffs here'
// };

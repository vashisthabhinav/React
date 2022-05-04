import React from 'react'
import PropTypes from 'prop-types';

export default function Header(props) {
    // Props is a JavScript object which we are passing from our parent component(App.js) to child component(Header.js)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            {props.searchBar? <form className="d-flex">
                {/* It is a ternary operator */}
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : "" }
            {/* If props.searchBar is true then the searchbar will be seen otherwise No searchBar will be visible(or whatever you wanna show). */}
          </div>
        </div>
      </nav>
  )
}

// Props And Default Props

Header.defaultProps = {
    title : "Your title here"
    // This is the default title, if the main titile is not written, this title will be seen in the website
    ,// ',' is important
    searchBar : true
}

Header.propTypes = {
    title : PropTypes.string,    // It is helpful because it says that expected title should be a string and if any number is passed in the title, an error will be shown in the console and from where we can check our bugs at the time of production.
    searchBar : PropTypes.bool.isRequired
    // isrequired means that the searchBr will be necessary. If it is not present in the Header or App files, an error will be shown.
}



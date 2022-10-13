import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 

const Navbar = () => {

    return(
       <div>       
          <nav className="navbar bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="../img/logo.png">REACT AND MORTY APP</a>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
         </nav>
       
      </div>   
      
         );
    }


export default Navbar;

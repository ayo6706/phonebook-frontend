// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Navbar() {
  return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Goesupstrong</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0 ml-auto">
                            
                            
                            
                        </ul>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                                <a className="nav-link"   aria-current="page" to="#why_join_us">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"   href="#hire_us">Tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"   href="#about_us">Who We Are</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"   href="#workshops">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"   href="#partners">More</a>
                            </li>
                            <li className="nav-item">
            
                                <a className="nav-link btn btn-lg btn-warning"   to="/team">Private Sale Whitelist</a>
                            </li>
                            
                        </ul>
                    </div>
                
                </div>
            </nav>

        </>
          );
    }

export default Navbar ;

import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">My App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link active">Dashboard</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="/shoppingcart" className="nav-link active">Shopping Cart</Link>
                                </li>
                        
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
};

export default Navbar
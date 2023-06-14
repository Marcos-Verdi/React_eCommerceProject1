import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginForm from "./LoginForm.jsx"
import Navbar from "./Navbar.jsx"
import Dashboard from "./Dashboard.jsx"
import ShoppingCart from "./ShoppingCart.jsx"
// import CustomersInfo from "./CustomersInfo.jsx"
import NotMatch from "./NotMatch.jsx"
import "./index.css"

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container-fluid">
                    <Routes>
                        <Route exact path="/" element={<LoginForm />} />
                        <Route exact path="/dashboard" element={<Dashboard />} />
                        <Route exact path="/shoppingcart" element={<ShoppingCart />} />
                        <Route path="*" element={<NotMatch />} />
                    </Routes>
                </div>
            </>
        )
    }
}

export default App
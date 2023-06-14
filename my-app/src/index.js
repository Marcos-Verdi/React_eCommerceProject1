import React from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import"./index.css"
import "jquery"
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"

ReactDOM.render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>, document.getElementById("root")) 
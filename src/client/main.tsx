import ReactDOM from "react-dom/client"
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.scss"

import MainWindow from "./MainWindow"

import {createStore} from "redux"

// Setting up global variables

const container = document.getElementById("react-container");
const root = ReactDOM.createRoot(container);

root.render(<MainWindow />)

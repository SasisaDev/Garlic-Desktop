import ReactDOM from "react-dom/client"
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.scss"

import MainWindow from "./MainWindow"
import Guild from "./API/Guild";

// Setting up global variables
(window as any).FriendsGuild = new Guild("Friends", false);

(window as any).Account = null;

(window as any).HandleControl = (control: number) =>
{
    if(control === 0) {
        (window as any).electron.closeApp()
    } else if(control === 1) {
        (window as any).electron.minmaxApp()
    } else if(control === 2) {
        (window as any).electron.minimizeApp()
    }
}

const container = document.getElementById("react-container");
const root = ReactDOM.createRoot(container);

root.render(<MainWindow />)

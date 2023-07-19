import React from 'react'
import "./TopBar.css"

export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-tiktok"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">LOGIN</li>
                </ul>
            </div>
            <div className="topRight"><i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i></div>
        </div>
    )
}
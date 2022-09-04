
import React, {useState} from "react";
import "./tab-nav.css"
export default function Tab_nav(){

    return(
        <div className="main-part">
            <ul>
                <li className="nav-main"><p className="font-test">TEAMS</p></li>
                <li className="nav-main"><p>COMPANY</p></li>
                <li className="nav-main"><p>PARTNERS</p></li>
                <li className="nav-main"><p>CONTACT</p></li>
                <li className="nav-main"><p>SOCIAL</p></li>
                <li className="nav-shop-btn"><p>SHOP</p></li>
            </ul>
        </div>
    )
}
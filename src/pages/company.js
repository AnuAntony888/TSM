import React, {useState} from "react"
import "./style.css"
import { Link } from "react-router-dom"
export default function Company(){
    return(
        <div className="company-items">
            <div className="company-item">
                <p>NEWS</p>
            </div>
            <div className="company-item">
                <p>ABOUT</p>
            </div>
            <div className="company-item">
                <p>FACILITY</p>
            </div>
            <div className="company-item">
                <p>TSMU</p>
            </div>
            <div className="company-item">
                <p>CAREERS</p>
            </div>
            <div className="company-item">
                <p>BRANDING ASSETS</p>
            </div>
        </div>
    )
}

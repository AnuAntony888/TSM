import React, {useState} from "react"
import Bvideo from "./Bvideo.mp4"
import "./style.css"
import { Link } from "react-router-dom"
import Teams from "./pages/teams"
import Company from "./pages/company"
import Partners from "./pages/partners"
import Social from "./pages/social"
import Tab_nav from "./tab-nav"
export default function Navbar(){
    const [dropdown, setDropdown] = useState(false);
    const togglenav = () =>{
        setDropdown(!dropdown);
     }
    const[team,setTeam] = useState(false)
    const toggleteam =() =>{
        setTeam(!team);
    }
    const[company,setCompany] = useState(false);
    const togglecompany = () =>{
        setCompany(!company)
    }
    const[partner,setPartner] = useState(false);
    const togglepartner = () =>{
        setPartner(!partner)
    }
    const[social,setSocial] = useState(false);
    const togglesocial = () =>{
        setSocial(!social)
    }
    const [ham,setHam] = useState(false);
    const toggleham = () =>{
        setHam(!ham)
    }
     
    return (
     <div className="page-1">
          <div className="B-video">
                <video autoPlay loop muted>
                <source src={Bvideo}/>

                </video>
            </div>
      
    <nav className={dropdown ? 'nav nav-black ':'nav '} onClick={togglenav}>
        <Link to="/" className="logo">
          <div className="nav-logo">
            <svg width="205" height="288" viewBox="0 0 1205 288" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_107_14)">
<path d="M172.239 250.043V39.2787C215.176 50.7749 242.657 77.36 254.925 119.273C260.076 139.631 261.548 173.401 237.994 206.692C237.994 175.078 237.994 151.846 237.994 137.236C234.56 122.866 230.143 111.37 224.745 102.747V221.781C218.121 228.008 211.741 233.037 205.117 236.87C205.117 232.799 205.117 180.586 205.117 79.9944C200.946 76.4019 196.529 73.0488 191.868 70.1747V243.816C183.526 246.929 177.146 249.084 172.239 250.043V250.043ZM172.239 284.771V262.976C228.916 251.481 271.607 202.381 271.607 143.703C271.607 80.2341 221.801 28.0219 158.254 22.5134V287.166H135.436V22.2739C71.8891 27.7825 22.082 79.9944 22.082 143.463C22.082 202.381 64.7739 251.24 121.451 262.735V284.53C52.506 272.795 0 214.117 0 143.463C0 68.0193 59.6213 6.2271 135.436 0.479001C140.589 0.239498 144.514 0 146.722 0C149.421 0 153.102 0.239498 158.009 0.479001C233.823 6.2271 293.445 68.0193 293.445 143.463C293.691 214.356 241.183 273.035 172.239 284.771V284.771ZM98.6327 104.903C98.6327 99.1548 98.6327 88.1375 98.6327 71.6118C78.5136 84.545 65.7552 103.226 60.1119 127.177H121.451V249.324C97.8968 242.857 79.495 232.318 66.0006 217.709C52.506 202.86 43.6731 187.532 39.5022 171.485H63.3017C71.3983 191.843 83.1754 206.692 98.6327 216.033V149.211H36.0673C35.3311 121.189 43.1826 96.9993 59.6213 76.8808C76.3055 56.7625 96.9154 44.0688 121.696 38.3208V104.903H98.6327Z" fill="white"/>
<path d="M327.039 98.9199H373.295V218.912H406.581V98.9199H452.837V68.5027H327.039V98.9199Z" fill="white"/>
<path d="M718.87 68.5027L678.978 131.971L639.086 68.5027H603.109V218.912H635.904V121.194L671.637 175.082H685.587L721.809 120.715V218.912H754.849V68.5027H718.87Z" fill="white"/>
<path d="M570.802 144.665C566.642 141.073 561.502 138.199 555.628 135.564C549.51 133.169 542.901 130.774 535.069 128.858C528.462 127.182 523.077 125.744 518.917 124.307C514.755 123.11 511.33 121.673 508.883 120.236C506.436 118.799 504.721 117.122 503.743 115.446C502.763 113.769 502.274 111.614 502.274 109.219V108.74C502.274 104.908 503.987 101.794 507.168 99.399C510.35 97.0039 515.246 95.5668 521.853 95.5668C528.462 95.5668 534.825 97.0039 541.432 99.6385C548.041 102.273 554.65 105.866 561.502 110.416L578.88 85.5077C571.047 79.2805 562.48 74.7299 553.181 71.3769C543.881 68.0238 533.602 66.3473 522.588 66.3473C514.755 66.3473 507.66 67.3054 501.051 69.4609C494.442 71.6166 489.059 74.7299 484.164 78.8016C479.514 82.873 475.843 87.6631 473.15 93.1719C470.458 98.6804 469.234 104.908 469.234 111.853V112.332C469.234 119.757 470.458 125.984 472.905 131.013C475.352 136.043 478.533 140.115 482.941 143.468C487.346 146.821 492.486 149.695 498.849 151.85C504.967 154.245 512.065 156.161 519.652 158.078C526.015 159.754 531.155 161.191 535.069 162.628C538.985 164.065 542.167 165.502 544.37 166.939C546.572 168.376 548.041 169.813 549.021 171.49C549.753 173.166 550.245 175.082 550.245 177.238V177.717C550.245 182.268 548.287 185.621 544.614 188.015C540.7 190.411 535.314 191.847 528.462 191.847C519.895 191.847 511.819 190.171 504.478 186.818C497.134 183.465 490.036 179.154 483.184 173.406L463.36 196.877C472.416 205.02 482.695 211.008 493.709 215.08C504.967 218.912 516.224 221.067 527.727 221.067C536.049 221.067 543.39 220.109 550.245 217.953C557.097 215.798 562.971 212.924 567.866 208.852C572.76 205.02 576.676 199.991 579.369 194.243C582.061 188.494 583.528 181.788 583.528 174.364V173.885C583.528 167.179 582.55 161.67 580.347 156.88C577.9 152.329 574.963 148.018 570.802 144.665V144.665Z" fill="white"/>
<path d="M779.213 68.2551V218.903H821.798V167.17H888.368V134.119H821.798V101.067H897.424V68.2551H779.213Z" fill="#09B3C8"/>
<path d="M912.839 68.2556V102.025H959.094V218.904H1001.68V102.025H1047.69V68.2556H912.839Z" fill="#09B3C8"/>
<path d="M1160.52 68.2556L1130.66 111.606L1100.56 68.2556H1052.59L1105.21 142.741L1050.38 218.904H1098.84L1129.68 172.2L1160.76 218.904H1209.96L1153.91 140.825L1206.53 68.2556H1160.52Z" fill="#09B3C8"/>
</g>
<defs>
<clipPath id="clip0_107_14">
<rect width="1205" height="288" fill="white"/>
</clipPath>
</defs>
            </svg>
          </div>
        </Link>
        <ul>
            <li className="nav-list" onClick={toggleteam}>
                <Link className="nav-link" to="">TEAMS</Link>
            </li>
            <li className="nav-list" onClick={togglecompany}>
                <Link className="nav-link" to="/">COMPANY</Link>
            </li>
            <li className="nav-list" onClick={togglepartner}>
                <Link className="nav-link" to="/">PARTNERS</Link>
            </li >
            <li className="nav-list">
                <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-list" onClick={togglesocial}>
                <Link className="nav-link" to="/">SOCIAL</Link>
            </li>
            <li className="shop-link">
                <Link className="shop" to="/">SHOP</Link>
            </li>
           
        </ul>
       <div className="ham" onClick={toggleham}>
       <div className="ham-menu-1"></div>
        <div className="ham-menu-2"></div>
       </div>
        </nav>
        {ham && <Tab_nav/>}
        {team && <Teams/>}
        {company && <Company/>}
        {partner && <Partners/>}
        {social && <Social/>}
        
        <div className="desc">
        <p className="desc-h1">
            TSM FTX ARE RAINBOW 6 SIEGE WORLD CHAMPIONS
        </p>
        <button className="desc-btn">WATCH MORE</button>
        </div>
    </div>
    )
}
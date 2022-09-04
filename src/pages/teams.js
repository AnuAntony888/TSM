import React, {useState} from "react"
import "./style.css"
import { Link } from "react-router-dom"
export default function Teams(){
  const [teamstate,setTeamrstate] = useState(1);
  const toggleteams = (index) =>{
    setTeamrstate(index);
     console.log(index)
     
  }
  return(
      <div className="teams-h1">
        <ul>
          <li onClick={() =>toggleteams(1)} className="team-link-1">
            <Link to="/" className="team-link">MOBAS</Link>
          </li>
        
          <li onClick={() =>toggleteams(2)} className="team-link-1">
            <Link to="/" className="team-link">MOBILE GAMES</Link>
          </li>
          <li onClick={() =>toggleteams(3)} className="team-link-1">
            <Link to="/" className="team-link">FPS/TPS</Link>
          </li>
          <li onClick={() =>toggleteams(4)} className="team-link-1">
            <Link to="/" className="team-link">STRATEGY & FIGHTERS</Link>
          </li>
          <li onClick={() =>toggleteams(5)} className="team-link-1">
            <Link to="/" className="team-link">CONTENT CREATORS</Link>
          </li>
           
        </ul>

        <div className="team-desc">
          <div className={teamstate === 1 ?"mobas-desc":"switch-off"}>
              <div className="row-1">
              <h1>DOTA 2</h1>
              <h6>Roster</h6>
              <p>Timado</p>
              <p>Bryle</p>
              <p>SabeRLight</p>
              <p>MoonMeander</p>
              <p>DuBu</p>
              <p>Misery</p>
              </div>
              <div className="row-2">
                <h1>LOL</h1>
                <h6>Main roster</h6>
                <p>Spica</p>
                <p>Chawy</p>
                <p>Soul</p>
                <p>Chime</p>
                <h6>Roster</h6>
                <p>Huni</p>
                <h6>Academy</h6>
                <p>Tactical</p>
                <p>Takeover</p>
                <p>Gunaso</p>
                <p>Anda</p>

              </div>
              <div className="row-3">
              <p>Maple</p>
              <p>Kayys</p>
              <p>Instinct</p>
              <p className="space">Mia</p>
              <p>Xmithie</p>
              <p>Solo</p>

              </div>
          </div>
          <div className={teamstate === 2 ?"mobas-desc":"switch-off"}>
            <div className="row-1" >
              <h1>BGMI INDIA</h1>
              <h6>Roster</h6>
              <p>AquaNox</p>
              <p>NinjaJOD</p>
              <p>Blaze</p>
              <p>Wanted</p>
              <p>Axelin</p>
            </div>
            <div className="row-2">
                <h1>FREE FIRE <br></br>BRAZiL</h1>
                <h6>Roster</h6>
                <p>Raone</p>
                <p>Broco Fe</p>
                <p>Isopor</p>
                <p>BOB7.x</p>
                <p>Federal</p>
                <p>Lipaox</p>
                <p>ITACHI</p>
            </div>
            <div className="row-3">
              <h1>WILDRIFT</h1>
              <h6>Roster</h6>
              <p>Mike</p>
              <p>Petroni</p>
              <p>Tetis</p>
              <p>kaiba</p>
              <p>Danzor</p>
              <p>Leozin</p>
            </div>
            <div className="row-4">
              <h1>APEX MOBILE</h1>
              <h6>Roster</h6>
              <p>Sonho</p>
              <p>1ceStream</p>
            </div>
          </div>

          <div className={teamstate === 3 ?"mobas-desc":"switch-off"}>
            <div className="row-1" >
              <h1>FORTNITE</h1>
              <h6>Roster</h6>
              <p>Ops</p>
              <p>Co1azo</p>
              <p>Reet</p>
              <p>Snacky</p>
              <p>EpikWhale</p>
              <h1 className="space-2">RAINBOW</h1>
              <h6>Roster</h6>
              <p>Achieved</p>
              <p>Beaulo</p>
              <p>Merc</p>
              <p>Geometrics</p>
              <p>Pojoman</p>
            </div>
            <div className="row-2">
                <h1>VALORENT</h1>
                <h6>Roster</h6>
                <p>Subroza</p>
                <p>Rossy</p>
                <p>gMd</p>
                <p>itopata</p>
                <p>Daeda</p>
                <h6>Academy</h6>
                <p>Lipaox</p>
                <p>ITACHI</p>
            </div>
            <div className="row-3">
              <h1>WILDRIFT</h1>
              <h6>Roster</h6>
              <p>Mike</p>
              <p>Petroni</p>
              <p>Tetis</p>
              <p>kaiba</p>
              <p>Danzor</p>
              <p>Leozin</p>
            </div>
            <div className="row-4">
              <h1>APEX MOBILE</h1>
              <h6>Roster</h6>
              <p>Sonho</p>
              <p>1ceStream</p>
            </div>
          </div>

          <div className={teamstate === 4 ?"mobas-desc":"switch-off"}>
            <div className="row-1" >
              <h1>BGMI INDIA</h1>
              <h6>Roster</h6>
              <p>AquaNox</p>
              <p>NinjaJOD</p>
              <p>Blaze</p>
              <p>Wanted</p>
              <p>Axelin</p>
            </div>
            <div className="row-2">
                <h1>FREE FIRE <br></br>BRAZiL</h1>
                <h6>Roster</h6>
                <p>Raone</p>
                <p>Broco Fe</p>
                <p>Isopor</p>
                <p>BOB7.x</p>
                <p>Federal</p>
                <p>Lipaox</p>
                <p>ITACHI</p>
            </div>
            <div className="row-3">
              <h1>WILDRIFT</h1>
              <h6>Roster</h6>
              <p>Mike</p>
              <p>Petroni</p>
              <p>Tetis</p>
              <p>kaiba</p>
              <p>Danzor</p>
              <p>Leozin</p>
            </div>
            <div className="row-4">
              <h1>APEX MOBILE</h1>
              <h6>Roster</h6>
              <p>Sonho</p>
              <p>1ceStream</p>
            </div>
          </div>

          <div className={teamstate === 5 ?"mobas-desc":"switch-off"}>
            <div className="row-1" >
              <h1>BGMI INDIA</h1>
              <h6>Roster</h6>
              <p>AquaNox</p>
              <p>NinjaJOD</p>
              <p>Blaze</p>
              <p>Wanted</p>
              <p>Axelin</p>
            </div>
            <div className="row-2">
                <h1>FREE FIRE <br></br>BRAZiL</h1>
                <h6>Roster</h6>
                <p>Raone</p>
                <p>Broco Fe</p>
                <p>Isopor</p>
                <p>BOB7.x</p>
                <p>Federal</p>
                <p>Lipaox</p>
                <p>ITACHI</p>
            </div>
            <div className="row-3">
              <h1>WILDRIFT</h1>
              <h6>Roster</h6>
              <p>Mike</p>
              <p>Petroni</p>
              <p>Tetis</p>
              <p>kaiba</p>
              <p>Danzor</p>
              <p>Leozin</p>
            </div>
            <div className="row-4">
              <h1>APEX MOBILE</h1>
              <h6>Roster</h6>
              <p>Sonho</p>
              <p>1ceStream</p>
            </div>
          </div>
        </div>

      </div>
  )
}
         
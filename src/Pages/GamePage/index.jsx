import React from "react";
import ImageComponent from "../../components/ImageComponent";
import Line from '../../Images/leftLine.png'
import man from "../../Images/man.png";
import animal from '../../Images/animal.png'
import animalLogo from '../../Images/animallogo.png'

import spiderman from '../../Images/spiderman.png'
import spidermanLogo from '../../Images/spidermanlogo2.png'

import c1 from '../../Images/c1.png'
import c2 from '../../Images/c2.png'
import c3 from '../../Images/c3.png'
import c4 from '../../Images/c4.png'

import freind from '../../Images/FRIENDS2.png'
import woman from '../../Images/woman.png'
import womancup from '../../Images/cup.png'
import green from '../../Images/greenCycle2.png'
import SidePar from '../../components/SidePar'
import { useThemeContext } from "../../contexts/ThemeContext";
import { THEMES } from "../../constants";
import "./style.css";
import Header from "../../components/Header";

const GamePage = () => {
  const {theme} = useThemeContext();

  return (
    <div>
      {/* <div
      className={`gameParent ${theme === THEMES.LIGHT ? "light" : ""}`}
    > */}
      <div
      className="gameParent"
      style={
        theme === THEMES.DARK
          ? {
              backgroundColor: "black",
              color: "white",
            }
          : {
              backgroundColor: "white",
              color: "black",
            }
      }
    >
      <SidePar/>
      <div className="line"><img src={Line}/></div>
        <Header/>
      </div>
      <div className='title'><h1>NEW GAMES</h1></div>
      <div className="slides">    
          <div className="animal">
            <div className="animalImg"><ImageComponent src={animal}/></div>
            <div className="animalText"> 
              <p>Join in the new DLC with Kratos to 
                <br />
                learn more about him and his future.</p>
            </div>
            <div className="animalLogo"><ImageComponent src={animalLogo}/></div>
          </div>
          <div className="man">
            <div className="manImg"><ImageComponent src={man}/></div>
            <div className="manText"> 
              <p>Be part of the Suicide Squad and <br /> 
                 kill the Justice League! <br /> -Amanda Waller
               </p>
            </div>
          </div>
          <div className="spiderman">
            <div className="spidermanImg"><ImageComponent src={spiderman}/></div>
            <div className="spidermanLogo"><ImageComponent src={spidermanLogo}/></div>
            <div className="spidermanText"> 
              <p>Miles Morales discovers powers <br/>
                from his mentor, Peter Parker. <br/>
                Master his unique, bio-electric <br/>
                venom blast attacks.</p>
            </div>
          </div>
        </div>
        <div className="listPlayer">
          <h1>last played</h1>
          <div className="listone">
            <div className="c1"><ImageComponent src={c1}/></div>
            <div className='text'><p>Hogwarts Legacy 50%</p></div>
          </div>
          <div className="listtwo">
            <div className="c2"><ImageComponent src={c2}/></div>
            <div className='text'><p>God Of War: Ragnarök 72.5%</p></div>
          </div>
          <div className="listthree">
            <div className="c3"><ImageComponent src={c3}/></div>
            <div className='text'><p>Crash Bandicoot N. Sane <br /> Trilogy 34%</p></div>
          </div>
          <div className="listfour">
            <div className="c4"><ImageComponent src={c4}/></div>
            <div className='text'><p>Dying Light 2 Stay Human 100%</p></div>
          </div>
        </div>
        <div className="woman">
           <h1>most recent trophy</h1>
           <div className="womanImg"><ImageComponent src={woman}/></div>
           <div className="womancup"><ImageComponent src={womancup}/></div>
           <div className="Gcycle"><ImageComponent src={green}/></div>
           <div className="womanText">
            <h1>ASSASSIN'S CREED ODYSSEY</h1>
          <span>LAST PLAYED : 34 HOURS AGO</span>
           </div>
        </div>
        <div className="cupText">
          <h1>PERFECT KILL STREAK</h1>
          <span>you are in the 0.5%</span>
           </div>
           <div className="freind">
            <h1>friends</h1>
            <div className="freindImg"><ImageComponent src={freind}/></div>
           </div>
    </div>
  );
};

export default GamePage;

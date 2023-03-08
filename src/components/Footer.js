import React  from "react";
import npc_logo from "./img/footer/npc_logo.png"
import instargramIcon from "./img/footer/instargramIcon.png"
import emailIcon from "./img/footer/emailIcon.png"
import copyrightIcon from "./img/footer/copyrightIcon.png"
import "../../css/Promotion/Footer.css";

class Footer extends React.Component {

    render() {
        return (
            <div id="footer">
                <div className="logo">
                    <img src={npc_logo} alt="npclogo"></img>
                    <div className="logotext"><span>N</span>onesuchable <span>P</span>eople who <span>C</span>reates games</div>
                </div>
                <div className="contact">
                    <img classname="instar" src={instargramIcon} alt="instargramIcon"></img>
                    <img classname="mail" src={emailIcon} alt="emailIcon"></img>
                </div>
                <div className="copyright">
                    <img src={copyrightIcon} alt="copyright"></img>
                    2022, All rights reserved
                </div>
            </div>
        );
    }
}

export default Footer;


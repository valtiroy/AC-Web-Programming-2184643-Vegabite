import React, { useState, useEffect } from 'react';
import {NavLink, Link} from 'react-router-dom';
import axios from 'axios';
import LineIcon from 'react-lineicons';
import Socialicons from "../components/Socialicons";

function Header(){
    const [information, setInformation] = useState("");
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () =>{
        setNavigationToggler(!navigationToggler);
    }

    useEffect(() =>{
        axios.get('/api/information')
            .then(response =>{
                setInformation(response.data);
            })
    }, [])

    return (
        <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
            <button onClick={handleNavigationToggler} className="mi-header-toggler">
                {!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />}
            </button>
            <div className="mi-header-inner">
                <div className="mi-header-image">
                    <Link to="/">
                        <img src={information.brandImage} alt="brandimage"/>
                    </Link>
                </div>

                <ul className="mi-header-menu">
                    <li><NavLink exact to="/"><span>Home</span></NavLink></li>
                    <li><NavLink to="/over"><span>Over Vegabite</span></NavLink></li>
                    <li><NavLink to="/gerechten"><span>Gerechten</span></NavLink></li>
                 {/*<li><NavLink to="/portfolios"><span>Bestellen</span></NavLink></li>*/}
                    <li><NavLink to="/bestellen"><span>Bestellen</span></NavLink></li>
                </ul>
                <Socialicons bordered />
                <div className="mi-header-copyright">
                <p><b><a rel="noopener noreferrer" target="_blank" href="http://www.instagram.com/jorritleemans/">Made with <i class='lni lni-heart-filled'></i></a></b></p>
              </div>
            </div>
        </nav>
    )
}


export default Header;

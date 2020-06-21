import React, { useState, useEffect } from "react";
import axios from 'axios';
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";

function Home(){
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#97BE11"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 10,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };
  useEffect(() =>{
    axios.get('/api/information')
    .then( response => {
      setInformation(response.data);
    })
  }, [])
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
              <img
                src={information.frontImage}
                alt="logo"
              />
                <h1>
                  <span className="color-theme">Gezond, vegetarisch, milleubewust</span>
                </h1>
                <p>Wil jij vaker gezond en vegetarisch eten? <br /> Bestel Vegabite!</p>
                <a href={information.bestellen} className="mi-button">Bestellen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';

function About(){
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  const handleToggler = (event) => {
    setToggler({
      toggler: event
    })
  }

  useEffect(() =>{
    axios.get('/api/information')
      .then(response =>{
        setInformation(response.data)
      })
    axios.get('/api/services')
      .then(response =>{
        setServices(response.data)
      })
    axios.get('/api/reviews')
      .then(response =>{
        setReviews(response.data)
      })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Over Vegabite" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  Welkom bij <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                Mijn naam is <span className="color-theme">Bieko</span>, ik ben 27 jaar oud en ik heb een passie voor koken. Naast mijn werk als music producer werk ik ook in een vegetarisch restaurant in Utrecht. Omdat alle restaurants nu dicht zijn vanwege corona en ik dus minder uren maak, leek het mij een goed moment om <span className="color-theme"> VEGABITE</span> te starten, een idee waar ik al een tijdje mee liep.
                </p>
                <p>
                De laatste jaren is er steeds meer aandacht voor een milieubewuster leven. Minder vlees of vis eten is daar een onderdeel van, maar dat kan nog best lastig zijn.
                </p>
                <p>
                Ik wil laten zien dat vegetarisch eten ook heel lekker kan zijn zonder dat je vlees of vis mist! Mijn plan is om elke donderdag een gezonde, vegetarische, afwisselende en vers bereide maaltijd te maken die ik persoonlijk kom brengen binnen een bepaald tijdsbestek. De maaltijd wordt na het koken zo snel mogelijk terug gekoeld om zoveel mogelijk vitaminen te bewaren. U hoeft het alleen maar op te warmen in een pan of de magnetron.
                </p>
                <h3>
                  Over <span className="color-theme p-t-25">mij</span>
                </h3>
                <ul>
                  {!information.name ? null : <li>
                    <b>Naam</b> {information.realname}
                  </li>}
                  {!information.age ? null : <li>
                    <b>Leeftijd</b> {information.age} jaar
                  </li>}
                  {!information.phone ? null : <li>
                    <b>Beroep</b> {information.phone}
                  </li>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Hoe werkt het?" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={service.title}>
                  <Service content={service}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reacties van klanten" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map(review =>(
                  <Testimonial key={review.id} content={review}/>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;

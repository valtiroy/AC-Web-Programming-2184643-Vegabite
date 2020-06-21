import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function Contact(){
  const [information, setInformation] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) =>{
    event.preventDefault();
    if( !formdata.name ){
      setError(true);
      setMessage('Je hebt je naam niet ingevuld!');
    } else if( !formdata.email ){
      setError(true);
      setMessage('Je hebt je adres niet ingevuld!');
    } else if( !formdata.subject ){
      setError(true);
      setMessage('Subject is required');
    } else if( !formdata.message ){
      setError(true);
      setMessage('Message is required');
    } else{
      setError(false);
      setMessage('You message has been sent!!!');
    }
  }
  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name] : event.currentTarget.value
    })
  }
  const numberFormatter = (number) =>{
    const phnNumber = number;
    return phnNumber;
  }

  const handleAlerts = () => {
    if(error && message){
      return (
        <div className="alert alert-danger mt-4">
          {message}
        </div>
      )
    } else if(!error && message){
      return (
        <div className="alert alert-success mt-4">
          {message}
        </div>
      )
    } else{
      return null;
    }
  }

  useEffect(() => {
    axios.get('/api/contactinfo')
      .then(response =>{
        setPhoneNumbers(response.data.phoneNumbers);
        setEmailAddress(response.data.emailAddress);
        setAddress(response.data.address);
      })
      axios.get('/api/information')
        .then(response =>{
          setInformation(response.data)
        })
  }, [])

  return (
    <Layout>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Bestellen"/>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Plaats hieronder uw bestelling.</h4>
                <form action="#" className="mi-form mi-contact-form" onSubmit={submitHandler}>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Voor en Achternaam</label>
                    <input onChange={handleChange} type="text" name="name" id="contact-form-name" value={formdata.name}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-adres">Adres & huisnummer</label>
                    <input onChange={handleChange} type="text" name="address" id="contact-form-adres" value={formdata.email}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-postcode">Postcode</label>
                    <input onChange={handleChange} type="text" name="subject" id="contact-form-postcode" value={formdata.subject}/>
                  </div>
                  <div className="mi-form-field">
                  <label htmlFor="contact-form-subject">Kies uw gerecht 1</label>
                    <select id="contact-form-gerecht">
                      <option value="Geen"></option>
                      <option value={information.gerecht1}>{information.gerecht1}</option>
                      <option value={information.gerecht2}>{information.gerecht2}</option>
                      </select>
                  </div>
                  <div className="mi-form-field">
                  <label htmlFor="contact-form-subject">Aantal gerecht 1</label>
                    <select id="contact-form-gerecht">
                      <option value="0"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      </select>
                  </div>
                  <div className="mi-form-field">
                  <label htmlFor="contact-form-subject">Kies uw gerecht 2</label>
                    <select id="contact-form-gerecht">
                      <option value="Geen"></option>
                      <option value={information.gerecht1}>{information.gerecht1}</option>
                      <option value={information.gerecht2}>{information.gerecht2}</option>
                      </select>
                  </div>
                  <div className="mi-form-field">
                  <label htmlFor="contact-form-subject">Aantal gerecht 2</label>
                    <select id="contact-form-gerecht">
                      <option value="0"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      </select>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">Opmerkingen</label>
                    <textarea onChange={handleChange} name="message" id="contact-form-message" cols="30" rows="3" value={formdata.message}></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">Bestelling plaatsen</button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Telefoonnummer</h6>
                      {phoneNumbers.map(phoneNumber =>(
                        <p key={phoneNumber}><a href={numberFormatter(phoneNumber)}>{phoneNumber}</a></p>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Emailadres</h6>
                      {emailAddress.map(email => (
                        <p key={email}><a href={`mailto:${email}`}>{email}</a></p>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

import React from 'react';
import './footer.css'
import { SiGmail } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">     
        <div className="row-footer">                       
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_footer">
              <h4>Services</h4>
              <ul>
                <li key="service1"><a href="#">Recherche d'emploi </a></li>
                <li key="service2"><a href="#">Publication d'offres d'emploi </a></li>
                <li key="service3"><a href="#">Suivi des candidatures </a></li>
                <li key="service4"><a href="#">Suivi des offres</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Page Link</h4>
              <ul>
                <li key="link1"><a href="/">Page d'acceuil</a></li>
                <li key="link2"><a href="/">rechercehr offre</a></li>
                <li key="link3"><a href="OffreForm">postuler offre </a></li>
                <li key="link4"><a href="connexion">connexion</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Insrivez-vous</h4>
              <div className="signup_form">                           
                <form action="#" className="subscribe">
                  
                  <input type="email" id="email" className="subscribe__input" placeholder="Enter Email Address" />
                  <button type="button" className="subscribe__btn"><FiSend   className="fas fa-paper-plane"/></button>
                </form>
              </div>
            </div>
            <div className="social_profile">
              <ul>
                <li><a href="#"><TiSocialFacebook  className="fab fa-facebook-f"/></a></li>
                <li><a href="#"><FiInstagram   className="fab fa-facebook-f"/></a></li>
                <li><a href="#"><FaTwitter   className="fab fa-facebook-f"/></a></li>
                <li><a href="#"><SiGmail  className="fab fa-facebook-f"/></a></li>
              </ul>
            </div>                          
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <p className="copyright">Copyright © 2024 <a href="#">Offre emploi</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

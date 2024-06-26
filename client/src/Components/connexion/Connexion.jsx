import React, { useEffect, useState } from "react";
import connexion2 from "../../assets/connexion2.jpeg";
import { MdCardTravel } from "react-icons/md";
import "./connexion.css";
import Tabs from "../tabs/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "./connexionSaga";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";

const Connexion = () => {
  const tabs = [
    {
      id: 1,
      name: "Recruteur",
      content: <ConnexionForm type={"recruteur"} />,
    },
    {
      id: 2,
      name: "Candidat",
      content: <ConnexionForm type={"candidat"} />,
      //ay 7aja na3tiha ba7dda  ConnexionForm rahi titsama props 
    },
    {
      id: 3,
      name: "Admin",
      content: <ConnexionForm type={"admin"} />,
      //ay 7aja na3tiha ba7dda  ConnexionForm rahi titsama props 
    },
  ];
  return (
    <div>
      <div className="multibox">
        <div className="leftBox">
          <img src={connexion2} className="leftimg" />
        </div>
        <div className="righttBox">
        <a href="/"><FaArrowLeft  className='icon'/><span className='icon'>Retour</span></a>

          <div className="logo flex top-distance">

            <h1>
              <MdCardTravel className="icon" />
              Offre Emploi
            </h1>
          </div>
          <div>
            <h3 className="subtitle">Bienvenue!👋🏻</h3>
          </div>
          <div className="top-distance">
            <p className="paragraph">
              Veuillez vous connecter à votre compte et commencer l'aventure
            </p>
          </div>
          <Tabs tabs={tabs} />
          {/* tabs={tabs} hiya props  */}
          {/* props ka2nha parametre fil component  */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const ConnexionForm = (props) => {
  const { type } = props; // hia nafs props.type
  //connexion selon type
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { user, token } = useSelector((state) => state.user);//kif njibou 7aja mil slice nista3mlou useSelector
  //ena bech njib state mte3ha 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postLogin({formData, type}))//dispatch torbotli bil saga 
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(()=> {
    if (token) {
      //ma3neha token 3andou valeur
      navigate("/")
    }
  }, [navigate, token])

  return (
    <div>
      <form  method="POST" onSubmit={handleSubmit}>
        <div className="form-group inputBox ">
          <label htmlFor="email" className="label-form">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="user@gmail.com"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label-form">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="*****"
            className="form-control"
            onChange={handleChange}
          />
        </div>
         {/* <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember Me
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div> */}

        <br/>
        <div>
          <button type="submit" className=" btn-connexion ">
            SIGN IN
          </button>
        </div>

        <div className="separator top-distance">
          <span className="separator-line"></span>
          <span className="separator-text ">Nouveau sur notre plateforme?</span>
          <span className="separator-line"></span>
        </div>

        <div className="google top-distance">
          <a href="/inscription" className="btn-google">
            Créer un nouveau compte
          </a>
        </div>

      </form>
      
    </div>
  );
};

export default Connexion;

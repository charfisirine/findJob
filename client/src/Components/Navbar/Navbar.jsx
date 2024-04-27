import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { MdCardTravel } from "react-icons/md";
import { FaRegUserCircle, FaWindowClose } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postLogout } from "../connexion/connexionSaga";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, token, type } = useSelector((state) => state.user);
  console.log({ token });

  const DropDownMenu = () => {
    const [open, setOpen] = useState(false);
    const container = useRef(null);

    const handleClickOutside = (event) => {
      if (container.current && !container.current.contains(event.target)) {
        setOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });

    return (
      <div className="container" ref={container}>
        <button
          className="dropdown-button"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <FaRegUserCircle className="profile-icon" />
        </button>
        {open && (
          <div className="dropdown-wrapper">
            <ul className="dropdown-menu">
              <li className="dropdown-menu__item">
                <Link to={`/Profil${type}`}>Profile</Link>
              </li>
              <li className="dropdown-menu__item" onClick={()=> {
                dispatch(postLogout({token, type}))
                navigate("/")
              }}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  //useState pour déclarer une variable d'état dans un composant fonctionnel
  //la valeur initial est 'Navbar'
  const [active, setActive] = useState("navBar");

  //function to toggle navbar
  //showNav() simplement met à jour la variable d'état active
  //setActive pour modifier la valeur de la variable d'état active
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //function to close navbar

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="NavbarSection">
      <header className="header  flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>
              {" "}
              <MdCardTravel className="icon" />
              Offre Emploi
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Recherche emploi
              </a>
            </li>
            <li className="navItem">
              <a href="/OffreForm" className="navLink">
                Publier une offre
              </a>
            </li>
            {/* <li className="navItem">
              <a href="/Profiladmin" className="navLink">
                Admin
              </a>
            </li>
            <li className="navItem">
              <a href="/Profilcandidat" className="navLink">
                Condidat
              </a>
            </li>
            <li className="navItem">
              <a href="/Profilrecruteur" className="navLink">
                Recruteur
              </a>
            </li> */}
            {token ? (
              <div className="profile">
                <DropDownMenu dispatch={dispatch} />
              </div>
            ) : (
              // <Link to={`/Profil${type}`}>
              //   <FaRegUserCircle className="profile-icon" />
              // </Link>
              <button className="btn">
                <a href="/connexion">Connexion</a>
              </button>
            )}

            <div onClick={removeNavbar} className="closeNavbar">
              <h1>
                <FaWindowClose className="icon" />
              </h1>
            </div>
          </ul>
        </div>

        <div onClick={showNav} className="toggleNavBar">
          <h1>
            <PiDotsNineBold className="icon " />
          </h1>
        </div>
      </header>
    </section>
  );
};

export default Navbar;

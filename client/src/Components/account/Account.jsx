import React, { useEffect } from "react";
// import { FaRegEdit } from 'react-icons/fa';
import "./account.css";
import { FaUserCircle } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Account = (props) => {
  const {userType} = props
  const { user, type } = useSelector((state) => state.user);
  const navigate = useNavigate();

  //si le user n'est pas connecté maya9darch ychouf il profile 
  useEffect(() => {
    if (userType !== type || !user) {
      navigate("/");
    }
  }, [navigate, user, type, userType]);

  // if (!user) {
  //   return (<ComponentX />)
  // }
  return (
    <div>
      <div className="account">
        <div className="box-account">
          <div>
            <h2 className="compte">Mon Compte</h2>
          </div>
          <div className="photoposition">
            <a href="#" className="photo">
              <FaUserCircle className="iconuser" />
              <button type="button" className="button">
                <GoPencil className="iconPencil" />
              </button>
            </a>
          </div>
          <div className="boxfiledset-container">
            <fieldset className="boxfiledset">
              <legend className="legend">
                Information Personel
                <a href="#" className="editlien">
                  <FaRegEdit className="editicon" />
                </a>
              </legend>
              <p className="pg">
                <span>{user?.name}</span>
              </p>
            </fieldset>
          </div>

          <div className="boxfiledset-container">
            <fieldset className="boxfiledset">
              <legend className="legend">
                Email
                <a href="#" className="editlien">
                  <FaRegEdit className="editicon" />
                </a>
              </legend>
              <p className="pg">
                <span>{user?.email}</span>
              </p>
            </fieldset>
          </div>

          <div className="boxfiledset-container">
            <fieldset className="boxfiledset">
              <legend className="legend">
                Mot de passe
                <a href="#" className="editlien">
                  <FaRegEdit className="editicon" />
                </a>
              </legend>
              <p className="pg">
                <span>******</span>
              </p>
            </fieldset>
          </div>

          <div className="suprimercompte">
            <a href="#" className="btn-supprimer-compte">
              Supprimer Mon Compte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

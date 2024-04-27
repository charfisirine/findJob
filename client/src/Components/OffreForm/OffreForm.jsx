import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postOffreForm } from "../Offres/offreSaga";
import "./offreform.css";
import { Navigate, Redirect } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
const OffreForm = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    Titre: "",
    Nom_Entreprise: "",
    Lieu_travail: "",
    Duree: "",
    Description: "",
    Salaire: "",
    Type_Contrat: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postOffreForm({ ...formData, id_recruteur: user.id })); // Envoyer les données du formulaire au Redux Saga
    setRedirect(true);
  };

  const handleChange = (e) => {
    console.log({ id: e.target.id, value: e.target.value });
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Rediriger si redirect est vrai
  if (redirect) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="offre">
      <div className="boxoffre">
      <a href="/"><FaArrowLeft  className='icon'/><span className='icon'>Retour</span></a>

        <h3 className="publier top-distance">Publier une offre</h3>
        {/* <div id="form-message-warning" className="mb-4"></div> */}
        <form method="POST" onSubmit={handleSubmit}>
          <div>
            <div className="ligne-form">
              <div className="form-item-double">
                <div className="form-group form-item">
                  <label className="label" htmlFor="titre">
                    Titre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Titre"
                    id="Titre"
                    placeholder="Titre"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group form-item">
                  <label className="label" htmlFor="Nom_Entreprise">
                    Nom Entreprise{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Nom_Entreprise"
                    id="Nom_Entreprise"
                    placeholder="Nom Entreprise"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="ligne-form">
              <div className="form-item-double">
                <div className="form-group form-item">
                  <label className="label" htmlFor="Lieu_travail">
                    Lieu Travail
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Lieu_travail"
                    id="Lieu_travail"
                    placeholder="Lieu de travail "
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group form-item">
                  <label className="label" htmlFor="Lieu_travail">
                    Durée
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Duree"
                    id="Duree"
                    placeholder="Durée"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="ligne-form">
              <div className="form-item-double">
                <div className="form-group form-item">
                  <label className="label" htmlFor="salaire">
                    Salaire
                  </label>
                  <input
                    type="number"
                    step="any"
                    className="form-control"
                    name="salaire"
                    id="Salaire"
                    placeholder="Salaire"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group form-item">
                  <label htmlFor="contrat">Type de Contrat</label>
                  <div>
                    <select
                      className="form-control"
                      id="Type_Contrat"
                      onChange={handleChange}
                    >
                      <option value="someOption">Tous</option>
                      <option value="CDI">CDI</option>
                      <option value="Contrat">Contrat</option>
                      <option value="Stage">Stage</option>
                      <option value="CDD">CDD</option>
                      <option value="Volontariat">Volontariat</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="ligne-form margin-bottom">
              <div className="form-group ">
                <label className="description">Description</label>
                <textarea
                  name="Description"
                  className="form-control"
                  id="Description"
                  placeholder="Description"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="ligne-form">
              <div className="form-group">
                <input
                  type="submit"
                  value="Poster un offre"
                  className="btn-poster"
                />
                <div className="submitting"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default OffreForm;

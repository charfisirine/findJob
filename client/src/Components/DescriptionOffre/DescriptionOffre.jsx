import React, { useEffect, useState } from 'react';
import './descriptionOffre.css';
import { FaLocationDot } from 'react-icons/fa6';
import { RiArticleLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { getOffresList } from '../Offres/offreSaga';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import { getRecruteurList } from '../Recruteur/recruteurSaga';
import { FaArrowLeft } from "react-icons/fa";

const DescriptionOffre = ({ offreId }) => {
    const dispatch = useDispatch();
    const {id} = useParams() //hethi bech njib biha il id mil url
    const {offres} = useSelector((state) => state.offre);
    const {recruteurs} = useSelector((state) => state.recruteur);
    const [recruteur, setRecruteur] = useState(null);
    const [offre, setOffre] = useState(null);

    useEffect(()=> {
        if (!offres){
            dispatch(getOffresList());
        }
        if(!recruteurs) {
            dispatch(getRecruteurList());
        }
    },[offres, recruteurs])

    useEffect(() => {
        if (offres) {
            const foundOffer = offres.find((item) => item.id == id);
            if (foundOffer) {
                setOffre(foundOffer);
            }
        }
        if (recruteurs && recruteurs.length > 0 && offre) {
            const foundRecruteur = recruteurs.find((recruteur) => recruteur.id === offre.id_recruteur);
            setRecruteur(foundRecruteur);
        }
    }, [dispatch, offre, recruteurs]);

    if (!offre || !recruteur) {
        return <div>Loading...</div>; // Afficher un message de chargement tant que les données ne sont pas disponibles
    }
  return (
    <div >
        <div className='container-offre'>
    <div className='Description-offre'>
    
        <div className="boxdetail">
        <a href="/"><FaArrowLeft  className='icon'/><span className='icon'>Retour</span></a>
        <br /> 
        <br />
            <div className='titre'>
                <h2 className="titre">{offre.Titre}</h2>
            </div>
            <div className='Nom_Entreprise'>
                <p> {offre.Nom_Entreprise}</p>
            </div>
            <div className='detail'>
                <ul>
                <li>
                <FaLocationDot  className='iconloc'/>
                    <span>{offre.Lieu_travail}</span>
                    <RiArticleLine  className='iconloc'/>
                    <span>{offre.Type_Contrat}</span>
                </li>
                

                </ul>
            </div>
            <section className="content">
               <b className='bold'>Entreprise:</b> 
                <br />
                <ul className='descriptionEntreprise'>
                    <li>
                        <h5>Nom Entreprise:</h5>
                        <p>{offre.Nom_Entreprise}</p>
                    </li>

                    <li>
                        <h5>adresse:</h5>
                        <p>{recruteur.adresse}</p>
                    </li>
                    <li>
                        <h5>Secteur Activite</h5>
                        <p>{recruteur.secteur_activite}</p>
                    </li>
                    <li>
                        <h5>site_web</h5>
                        <p>{recruteur.site_web}</p>
                    </li>
                    <li>
                        <h5>Email</h5>
                        <p>{recruteur.email}</p>
                    </li>
                    <li>
                        <h5>Phone Number</h5>
                        <p>{recruteur.phone}</p>                        
                    </li>

                

                </ul>
                <b className='bold'> Post Propsé:</b>
                <ul> 
                    <li>
                        <h5>Titre:</h5>
                        <p>{offre.Titre}</p>
                    </li>
                    <li>
                        <h5>Lieu Travail:</h5>
                        <p>{offre.Lieu_travail}</p>
                    </li>
                    <li>
                        <h5>Durée:</h5>
                        <p>{offre.Duree}</p>
                    </li>
                    <li>
                        <h5>Type de Contrat:</h5>
                        <p>{offre.Type_Contrat}</p>
                    </li>
                    <li>
                        <h5>Déscription:</h5>
                             <p>{offre.Description}</p>
                        </li>
                </ul>


            </section>
            <div className="postuler top-distance">
              <a href={`modal/${offre.id}`} className="btn-postuler">
                Postuler
              </a>
            </div>
            {/* <div className="Postulerbtn">
                    <div className="form-group">
                      <input type="submit" value="Postuler" className="btn-poster" />
                      <div className="submitting"></div>
                    </div>
            </div> */}
            
        </div>
        
    </div>
    </div>
    <Footer/>

</div>
  )
}

export default DescriptionOffre
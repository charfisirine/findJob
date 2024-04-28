import React from 'react'
import './inscription.css'
import InscriptionRecruteur from '../inscriptionrecruteur/InscriptionRecruteur';
import InscriptionCondidat from '../inscriptioncondidat/inscriptionCondidat';
import Tabs from '../tabs/Tabs';
import inscription from "../../assets/inscription.jpg";
import Footer from '../Footer/Footer';

const Inscription = () => {
  const tabs = [
    {
        id: 1,
        name: "Recruteur",
        content: <InscriptionRecruteur />
    },
    {
        id: 2,
        name: "Candidat",
        content: <InscriptionCondidat />
    },
];

  return (
    <div>
    <div className="multibox">
        <div className="leftBox">
          <img src={inscription} className="leftimg" />
        </div>

    <div className="righttBox ">
    <div className=" flex">
       
       <h1>
         {/* <MdCardTravel className="icon" /> */}
        Inscription
       </h1>
     </div>
     <div>
       <h3 className="subtitle">
         
         {/* Welcome to Offre Emploi!👋🏻 */}
       </h3>
     </div>
     <div className="top-distance">
       <p className="paragraph">
         Inscrivez-vous et rejoinredre notre plateforme
       </p>
     </div>
    <Tabs tabs={tabs} />
    </div>
    
  </div>
  <Footer/>
  </div>
  )
}

export default Inscription
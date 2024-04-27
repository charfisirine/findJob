import {React,useState} from 'react'
import { FaArrowLeft, FaLocationDot } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import'./modal.css'
import Footer from '../Footer/Footer'
const Modal = () => {
  return (
    <div>
    <div className='Description '>
        <div className="boxdetail-postuler">
          <a href=""><FaArrowLeft  className='icon'/><span className='icon'>Retour</span></a>
            <div className='titre top-distance'>
                <h2 className="titre">Stage CIVP Graphic Designer</h2>
            </div>
            <div className='Nom_Entreprise top-distance'>
                <p> Nom Entreprise </p>
            </div>
            <div className='detail '>
                <ul>
                <li>
                <FaLocationDot  className='iconloc'/>
                    <span>Ben Arous</span>
                </li>
                <li>
                <form>
                <div className="form-group">
              <label htmlFor="nomprenom" className="label-form top-distance">
              Nom & prénom
              </label>
              <input id="nom"type="text"  placeholder="nom" className="form-control"/>
            </div>

            <div className="form-group inputBox ">
              <label htmlFor="email" className="label-form">
                Email
              </label>
              <input id="email"type="text"placeholder="user@gmail.com"className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="telephone" className="label-form">
              Téléphone
              </label>
              <input id="telephone"type="number"  placeholder="telephone" className="form-control"/>
            </div>
            <div>
                <label for="cv" class="drop-container top-distance" id="dropcontainer">
                    <span class="drop-title">Déposer votre  CV</span>
                    ou
                    <input type="file" id="cv" accept="application/pdf" required/>
                </label>

            </div>
            <div className="ligne-form margintop">
                    <div className="form-group">
                      <input type="submit" value="Postuler" className="btn-poster" />
                    </div>
                  </div>
          </form> 
                </li>

                </ul>
            </div>


        </div>
    </div>
    <Footer/>
</div>
  )
}

export default Modal
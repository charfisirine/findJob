import {React,useEffect,useState} from 'react'
import { FaArrowLeft, FaLocationDot } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import'./modal.css'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { postDemandeOffresForm } from './demandeoffreSaga'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { getOffresList } from '../Offres/offreSaga'
const Modal = () => {
  const navigate = useNavigate()
  const {id} = useParams()//njibou biha il id mil url illi houwa il id mte3 il ofre fil cas hethi
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const { offres } = useSelector ((state) => state.offre);
  const { user,type } = useSelector ((state) => state.user);

  useEffect(()=> {
    if (offres){
        const tempOffre = offres.find((elt)=> elt.id == id )
        if (tempOffre) {
          setFormData((oldState) => {
            return {
              ...oldState,
              idRecruteur: tempOffre.id_recruteur
            }
          })
        }
    }
  },[offres])

  if (type == "recruteur") {
    navigate(`/DescriptionOffre/${id}`);
    alert("vous n'etes pas un candidat!")
  }

  useEffect(()=> {
    if (!offres){
        dispatch(getOffresList());
    }
  },[offres])
  
  const [formData, setFormData] = useState({
    cv: "",
    idOffreEmploi:id,
    idRecruteur	: null,
    idCandidat: `${user.id}`,
    statut: "pending"
  }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDemandeOffresForm({ ...formData})); // Envoyer les données du formulaire au Redux Saga
    setRedirect(true);
  };

  const handleChange = (e) => {
    //kif yibda 3andik des input mouch file ta3mil .value 
    //a7na 3milna .files[0] 5ater 3andi fichier we7id 
    setFormData({ ...formData, [e.target.id]: e.target.files[0] });
  };

  // rediriger si redirect est vrai
  if (redirect) {
    alert("inscription à l'offre avec succées! chercher autre offre!")
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
    <div className='Description '>
        <div className="boxdetail-postuler">
          <Link to={`/DescriptionOffre/${id}`}><FaArrowLeft  className='icon'/><span className='icon'>Retour</span></Link>
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
                <form method="POST" onSubmit={handleSubmit} enctype="multipart/form-data">
            <div>
                <label htmlFor="cv" className="drop-container top-distance" id="dropcontainer">
                    <span className="drop-title">Déposer votre  CV</span>
                    ou
                    <input type="file" id="cv" name='file' accept="application/pdf" required onChange={handleChange}/>
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
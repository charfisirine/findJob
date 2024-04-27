import React from 'react';
import './sidebar.css';
import { FaRegUserCircle } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link } from "react-router-dom"; 
import { IoHome } from 'react-icons/io5';

const SideBarRecruteur = () => {


  return (
    <div className='sidebar active'>
      <ul className='margintop'>
      <li>
          <Link to="/" className='liensidebar'> 
            <IoHome  className='iconsidebar' />
            Home
          </Link>
        </li>
        <li>
          <Link to="/Profilrecruteur" className='liensidebar'> 
            <FaRegUserCircle className='iconsidebar' />
            Mon Compte
          </Link>
        </li>

        <li>
          <Link to="/ListeOffrePublier" className='liensidebar'> 
            <BsFileEarmarkPost className='iconsidebar' />
           Mes Offres
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarRecruteur;

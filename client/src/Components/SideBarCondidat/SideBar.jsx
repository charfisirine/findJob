import React from 'react';
import './sidebar.css';
import { FaRegUserCircle } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link } from "react-router-dom"; 
import { IoHome } from 'react-icons/io5';

const SideBarCondidat = () => {
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
          <Link to="/Profilcandidat" className='liensidebar'> 
            <FaRegUserCircle className='iconsidebar' />
            Account
          </Link>
        </li>
        <li>
          <Link to="/ListeOffrePostuler" className='liensidebar'> 
            <BsFileEarmarkPost className='iconsidebar' />
            candidature
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarCondidat;

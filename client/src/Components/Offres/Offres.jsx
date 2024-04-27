import React, { useEffect } from 'react'
import './offres.css';
// import { MdDelete } from "react-icons/md";
// import { FaBan } from "react-icons/fa6";
import Table from '../dataTable/Table';
import { useDispatch, useSelector } from 'react-redux';
// import { TiTick } from 'react-icons/ti';
import { getOffresList} from './offreSaga';
const Offres = () => {
  //hethi il partie mte3 il redux
  //state hethi bech tjib ili fil store samineha state juste 5ater documentation hakek si nn na9dar nsamiha kif man7ib
  const { offres } = useSelector((state) => state.offre);
  const dispatch = useDispatch();
 
  console.log({ Offres });

  useEffect(() => {  
    dispatch(getOffresList());
  }, []);

const tableColumns=[
    {
        key:"Titre",
        dataIndex:"Titre",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Nom_Entreprise",
        dataIndex:"Nom_Entreprise",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Lieu_travail",
        dataIndex: "Lieu_travail",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Duree",
        dataIndex:"adresse",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Description",
        dataIndex:"Nom Entreprise",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Salaire",
        dataIndex:"Site Web",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Type_Contrat",
        dataIndex:"Num Tel",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    // {
    //     key:"action",
    //     dataIndex:"Actions",
    //     title: (value) => <th key={value}>{value}</th>,
    //     render: (value, data) => (
    //         <td key={`${data.id}-${value}`}>
    //           <MdDelete onClick={() => handleDelete(data.id)} className="icon" />
    //         </td>
    //       ),    },
    //       {
    //         key: "banned",
    //         dataIndex: "Ban",
    //         title: (value) => <th key={value}>{value}</th>,
    //         render: (value, data) => (
    //           <td key={`${data.id}-${value}`}>
    //             {value === 0 && (
                  
    //                 <TiTick onClick={() => handleBan(data.id)} className="icon" />
    //               )}
    //             {value === 1 && (
      
    //                 <FaBan onClick={() => handleBan(data.id)} className="icon" />
    //               )}
    //           </td>
    //         ),
    //       },
]

const handleDelete = (id) => {
  console.log("Delete user with ID:", id);
};

const handleBan = (id) => {
  console.log("Ban user with ID:", id);
  // dispatch(putOffres({id}))//tib3ath putrequest a traves saga lil backend pour editer le ban (toggle ban) w hethi traja3li reponse message ma7ajtich bih l9ina solution traja3lik il emlement illi tbaddal 

};
  return (
    <div className='box-post'>
      <Table data={offres} columns={tableColumns} />
    </div>
  )
}

export default Offres
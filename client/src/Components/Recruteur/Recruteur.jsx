import {React,useEffect, useState} from 'react'
import Table from '../dataTable/Table';
import './recruteur.css'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecruteurs, getRecruteurList, putRecruteurs } from "./recruteurSaga";
import { TiTick } from 'react-icons/ti';
import { FaBan } from 'react-icons/fa';

const Recruteur = () => { 

      //hethi il partie mte3 il redux
  //state hethi bech tjib ili fil store samineha state juste 5ater documentation hakek si nn na9dar nsamiha kif man7ib
  const { recruteurs } = useSelector((state) => state.recruteur);
  const dispatch = useDispatch();
  const [recruteurList, setRecruteurList] = useState([])
 
  useEffect(() => {  
    if (!recruteurs) {
      dispatch(getRecruteurList());//hethi bech t3ayit lil donnée illi fil basa mil Recruteursaga
    } 
  }, [recruteurs]);

  useEffect(() => {  
    if (recruteurs) {
      setRecruteurList(recruteurs)
    }
  }, [recruteurs]);

    const tableColumns=[
        {
            key:"name",
            dataIndex:"name",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
        },
        {
            key:"email",
            dataIndex:"email",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
        },
        {
            key:"phone",
            dataIndex:"Numero Telephone",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
        },
        {
            key:"secteur_activite",
            dataIndex: "secteur Activite",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
        },
        {
            key:"nom_entreprise",
            dataIndex:"Nom Entreprise",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
        },
        
        {
            key:"site_web",
            dataIndex:"Site Web",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
        },
        {
            key:"adresse",
            dataIndex:"adresse",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
        },
        {
            key: "action",
            dataIndex: "Actions",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data) => (
              <td key={`${data.id}-${value}`}>
                <MdDelete onClick={() => handleDelete(data.id)} className="icon" />
              </td>
            ),
          },
          {
            key: "banned",
            dataIndex: "Ban",
            title: (value) => <th key={value}>{value}</th>,
            render: (value, data) => (
              <td key={`${data.id}-${value}`}>
                {value === 0 && (
                  
                    <TiTick onClick={() => handleBan(data.id)} className="icon" />
                  )}
                {value === 1 && (

                    <FaBan onClick={() => handleBan(data.id)} className="icon" />
                  )}
              </td>
            ),
          },
    ]
    
    const handleDelete = (id) => {
      console.log("Delete user with ID:", id);
      dispatch(deleteRecruteurs({id}))
    };
    
    const handleBan = (id) => {
      console.log("Ban user with ID:", id);
      //Le dispatch est une fonction fournie par Redux qui permet d'envoyer une action à votre store 
      dispatch(putRecruteurs({id}))
    };
      return (
        <div className='box-post'>
          <Table data={recruteurList} columns={tableColumns} />
        </div>
      )
    }

export default Recruteur
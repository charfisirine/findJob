import React, { useEffect, useState } from "react";
import "./ListeDemandesOffrePublier.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "../dataTable/Table";
import { getDemandeOffresList, getFile } from "../ApplicationFormModal/demandeoffreSaga";
import { getCandidatsList } from "../Condidat/candidatSaga";
import { useParams } from "react-router-dom";
const ListeDemandesOffrePublier = () => {
  const {id} = useParams()
  const { demandeoffres } = useSelector((state) => state.demandeoffre);
  const { candidats } = useSelector((state) => state.candidat);
  const dispatch = useDispatch();
  const [offreDemandes, setOffreDemandes] = useState([])
  
  useEffect(() => {
    if (!demandeoffres) {
      dispatch(getDemandeOffresList());
    }
    if (!candidats) {
      dispatch(getCandidatsList());
    }
  }, [demandeoffres, candidats]);

  useEffect(() => {
    if (demandeoffres && candidats) {
      const tempDemandes = demandeoffres.filter(item => item.idOffreEmploi == id).map((demande) => {
        const candidatDetails = candidats.find((elt) => elt.id ==  demande.idCandidat)
        return {
          nom_candidat: candidatDetails.name,
          email: candidatDetails.email,
          cv: demande.cv,
          statut: demande.statut,

        }
      })
      setOffreDemandes(tempDemandes)
    }
  }, [demandeoffres, candidats]);

  const tableColumns = [
    {
      key: "nom_candidat",
      dataIndex: "Nom Candidat",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "email",
      dataIndex: "Email",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "cv",
      dataIndex: "cv",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        
        <td key={`${data.id}-${data[column.key]}`}> <a href={`${value}`} download>Telecharger CV</a></td>
      ),
    },
    {
      key: "statut",
      dataIndex: "Statut",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
  ];
  return (
    <div className="box-post">
      <Table data={offreDemandes} columns={tableColumns} />
    </div>
  );
};

export default ListeDemandesOffrePublier;

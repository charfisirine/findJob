import React, { useEffect, useState } from "react";
import "./ListeOffrePostuler.css";
import Table from "../dataTable/Table";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getOffresList } from "../Offres/offreSaga";
import {
  deleteDemandeOffre,
  getDemandeOffresList,
} from "../ApplicationFormModal/demandeoffreSaga";
const ListeOffrePostuler = () => {
  const dispatch = useDispatch();
  const { demandeoffres } = useSelector((state) => state.demandeoffre);
  const { offres } = useSelector((state) => state.offre);
  const { user } = useSelector((state) => state.user);
  const [candidatures, setCandidatures] = useState([]);

  useEffect(() => {
    if (!demandeoffres) {
      dispatch(getDemandeOffresList());
    }
    if (!offres) {
      dispatch(getOffresList());
    }
  }, [demandeoffres, offres]);

  useEffect(() => {
    if (demandeoffres && offres && user) {
      const tempCandidatures = demandeoffres
        .filter((elt) => elt.idCandidat == user.id)
        .map((candidature) => {
          const offre = offres.find(
            (item) => item.id == candidature.idOffreEmploi
          );
          //bech na3mil parcours 3al table illi 3andi selon il  idOffreEmploi bech nRaj3 les elements hethom illi mawjoudin 3andi fil return 
          //map ka2anik bech tappliki faza 3ala iles element mte3 il tableau il kol 
          return {
            nom_entreprise: offre.Nom_Entreprise,
            lieu_travail: offre.Lieu_travail,
            duree: offre.Duree,
            description: offre.Description,
            salaire: offre.Salaire,
            type_contrat: offre.Type_Contrat,
            delete: candidature.id,
          };
        });
      setCandidatures(tempCandidatures);
    }
  }, [demandeoffres, offres, user]);

  const tableColumns = [
    {
      key: "nom_entreprise",
      dataIndex: "Nom Entreprise",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "lieu_travail",
      dataIndex: "lieu travail",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "duree",
      dataIndex: "Duree",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "description",
      dataIndex: "Description",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },

    {
      key: "salaire",
      dataIndex: "Salaire",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "type_contrat",
      dataIndex: "Type Contrat",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Delete",
      dataIndex: "delete",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data) => (
        <td key={`${data.id}-${value}`}>
          <MdDelete onClick={() => handleDelete(data.delete)} className="icon" />
        </td>
      ),
    },
  ];

  const handleDelete = (id) => {
    dispatch(deleteDemandeOffre({ id }));
    
  };

  return (
    <div className="box-users">
      <Table data={candidatures} columns={tableColumns} />
    </div>
  );
};

export default ListeOffrePostuler;

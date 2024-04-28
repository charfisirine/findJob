import React, { useEffect, useState } from "react";
import "./ListeOffrePublier.css";
import { useDispatch, useSelector } from "react-redux";
import { getOffresList } from "../Offres/offreSaga";
import Table from "../dataTable/Table";
const ListeOffrePublier = () => {
  const { offres } = useSelector((state) => state.offre);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [offresRecruteurs, setOffresRecruteurs] = useState([])

  useEffect(() => {
    if (!offres) {
      dispatch(getOffresList());
    }
  }, [offres]);
  
  useEffect(() => {
    if (offres) {
      const tempOffres = offres.filter(elt => elt.id_recruteur == user.id)
      setOffresRecruteurs(tempOffres)
    }
  }, [offres]);

  const tableColumns = [
    {
      key: "Titre",
      dataIndex: "Titre",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Nom_Entreprise",
      dataIndex: "Nom_Entreprise",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Lieu_travail",
      dataIndex: "Lieu_travail",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Duree",
      dataIndex: "adresse",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Description",
      dataIndex: "Nom Entreprise",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Salaire",
      dataIndex: "Site Web",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Type_Contrat",
      dataIndex: "Num Tel",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "action",
      dataIndex: "Actions",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data) => (
        <td key={`${data.id}-${value}`}>
          <button className="btn">
            <a href={`/ListeOffrePublier/ListeDemandes/${data.id}`}>Voir les demandes</a>
          </button>
        </td>
      ),
    },
  ];
  return (
    <div className="box-post">
      <Table data={offresRecruteurs} columns={tableColumns} />
    </div>
  );
};

export default ListeOffrePublier;

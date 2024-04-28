import React, { useEffect, useState } from "react";
import "./posts.css";
import Table from "../dataTable/Table";
import { useDispatch, useSelector } from "react-redux";
import { TiTick } from "react-icons/ti";
import { IoCloseCircleSharp } from "react-icons/io5";
import { acceptOrRefuseOffre, getOffresList } from "../Offres/offreSaga";

const Posts = () => {
  const { offres } = useSelector((state) => state.offre);
  const [offreList, setOffreList] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    if (!offres) {
      dispatch(getOffresList());
    }
  }, [offres]);

  useEffect(() => {
    if (offres) {
      setOffreList(offres);
    }
  }, [offres]);

  const handleStatus = (id, status) => {
    dispatch(acceptOrRefuseOffre({id, status}))
  }

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
      dataIndex: "Duree",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Description",
      dataIndex: "Description",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Salaire",
      dataIndex: "Salaire",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "Type_Contrat",
      dataIndex: "Contrat",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "action",
      dataIndex: "accepter/refuser",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data) => (
        <td key={`${data.id}-${value}`}>
          <TiTick onClick={()=> {handleStatus(data.id, "accept")}} className="icon" />
          <IoCloseCircleSharp onClick={()=> {handleStatus(data.id, "refuse")}} className="icon" />
        </td>
      ),
    },
    {
      key: "status",
      dataIndex: "status",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data) => (
        <td key={`${data.id}-${value}`}>{value}</td>
      ),
    },
  ];

  return (
    <div className="box-post">
      <Table data={offreList} columns={tableColumns} />
    </div>
  );
};

export default Posts;

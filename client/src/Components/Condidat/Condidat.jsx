import React, { useEffect, useState } from "react";
import "./condidat.css";
import { MdDelete } from "react-icons/md";
import Table from "../dataTable/Table";
import { useDispatch, useSelector } from "react-redux";
import { getCandidatsList, putCandidats } from "./candidatSaga";
import { TiTick } from "react-icons/ti";
import { FaBan } from "react-icons/fa";

const Condidats = () => {
  //hethi il partie mte3 il redux
  //state hethi bech tjib ili fil store samineha state juste 5ater documentation hakek si nn na9dar nsamiha kif man7ib
  const { candidats } = useSelector((state) => state.candidat);
  const [candidatList, setCandidatList] = useState([])

  const dispatch = useDispatch();
 

  useEffect(() => { 
    if(!candidats) {
      dispatch(getCandidatsList());
    } 
  }, [candidats]);

  useEffect(() => { 
    if(candidats) {
      setCandidatList(candidats);
    } 
  }, [candidats]);

  const tableColumns = [
    {
      key: "name",
      dataIndex: "name",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "email",
      dataIndex: "email",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "phone",
      dataIndex: "Phone",
      title: (value) => <th key={value}>{value}</th>,
      render: (value, data, column) => (
        <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      ),
    },
    {
      key: "adresse",
      dataIndex: "adresse",
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
  ];

  const handleDelete = (id) => {
    console.log("Delete user with ID:", id);
  }; 

  const handleBan = (id) => {
    console.log("Ban user with ID:", id);
    dispatch(putCandidats({id}))//tib3ath putrequest a traves saga lil backend pour editer le ban (toggle ban) w hethi traja3li reponse message ma7ajtich bih l9ina solution traja3lik il emlement illi tbaddal 
  };

  return (
    <div className="box-users">
      <Table data={candidatList} columns={tableColumns} />
    </div>
  );
};

export default Condidats;

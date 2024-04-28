import React, { useState } from "react";
import "./table.css";

const Table = ({ data = [], columns = [] }) => {
  const [searchInput, setSearchInput] = useState("");

  const FilteredData = () => {
    return data.filter((item) => {
      return columns.some((column) => {
        const value = item[column.key];
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchInput.toLowerCase());
        }
        return false;
      });
    });
  };

  if (data.length === 0) {
    return (
      <div className="box">
        <div className="mt-4 mb-4">
          <div className="row ">
            <div className="col-md-10">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3 search-container ">
                      Pas de Donnee!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="box">
      <div className="mt-4 mb-4">
        <div className="row ">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body p-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3 search-container ">
                    {FilteredData().length === data.length ? (
                      ""
                    ) : (
                      <h5 className="text-primary">
                        Search ({FilteredData().length}) result found from{" "}
                        {data.length}
                      </h5>
                    )}
                  </div>
                  <div className="col-md-3">
                    <div className="form-group mb-0 search-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body ">
                <div>
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        {columns.map((elt) => elt.title(elt.dataIndex))}
                      </tr>
                    </thead>
                    <tbody>
                      {FilteredData().map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            {columns.map((elt) =>
                              elt.render(data[elt.key], data, elt)
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

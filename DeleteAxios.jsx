import React, { useState, useEffect } from "react";
import axios from "axios";

function TableExample() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setTableData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setTableData(tableData.filter((item) => item.id !== id));
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          padding: "0rem 4rem ",
        }}
      >
        <h1
          style={{
            color: "red",
            fontWeight: "700",
            textShadow: "0px 0px 7px grey",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Axios Delete Example
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td style={{ border: "1px solid black" }}>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.body}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableExample;

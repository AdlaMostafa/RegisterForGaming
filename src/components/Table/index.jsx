import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const Table = ({ columns, deleteUser, isLoading }) => {
  const [deletingUser, setDeletingUser] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    // Load the data from the api.
    axios.get('https://react-tt-api.onrender.com/api/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>

        {!isLoading && (
          <tbody>
            {data.map((row) => (
              <tr key={row.id} onClick={() => deleteUser(row._id)}>
                {columns.map((column) => (
                  <td key={`${row.id + column.key}`}>
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}

                <td>
                  {deletingUser === row._id ? (
                    <div className="loader">Deleting...</div>
                  ) : (
                    <button
                      className='deleteButton'
                      disabled={deletingUser === row._id}
                      onClick={() => setDeletingUser(row._id)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {isLoading && <h1>Loading...</h1>}
    </>
  );
};

export default Table;

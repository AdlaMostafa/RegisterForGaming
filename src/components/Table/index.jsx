// import React from 'react';
// import './style.css'
// const Table = ({ users, deleteUser, deletingUser }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(user => (
//           <tr key={user._id}>
//             <td>{user._id}</td>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//             <td>
//               {deletingUser === user._id ? (
//                 <div className="loader">Deleting...</div>
//               ) : (
//                 <button className='deleteButton' onClick={() => deleteUser(user._id)}>Delete</button>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;



import React from 'react';
import './style.css';

const Table = ({ isLoading, columns, users, deleteUser, deletingUser }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                {columns.map((column) => (
                  <td key={`${user._id + column.key}`}>
                    {user[column.key]}
                  </td>
                ))}
                <td>
                  {deletingUser === user._id ? (
                    <div className="loader">Deleting...</div>
                  ) : (
                    <button className='deleteButton' onClick={() => deleteUser(user._id)}>Delete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;



// import React from 'react';
// import './style.css';

// const Table = ({ isLoading, columns, users, deleteUser, deletingUser }) => {
//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : users.length === 0 ? (
//         <p>No users available.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               {users.map((user) => (
//                 <th key={user.key}>{user.title}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 {columns.map((column) => (
//                   <td key={`${user._id + column.key}`}>
//                     {column.render ? column.render(user) : user[column.key]}
//                   </td>
//                 ))}
//                 <td>
//                   {deletingUser === user._id ? (
//                     <div className="loader">Deleting...</div>
//                   ) : (
//                     <button className='deleteButton' onClick={() => deleteUser(user._id)}>Delete</button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Table;


// import React from 'react';
// import './style.css'
// const Table = ({ isLoading, columns, data, onRowClick }) => {
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column.key}>{column.title}</th>
//             ))}
//           </tr>
//         </thead>

//         {!isLoading && (
//           <tbody>
//             {data.map((row) => (
//               <tr key={row.id} onClick={() => onRowClick(row)}>
//                 {columns.map((column) => (
//                   <td key={`${row.id + column.key}`}>
//                     {column.render ? column.render(row) : row[column.key]}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         )}
//       </table>

//       {isLoading && <h1>Loading...</h1>}
//     </>
//   );
// };

// export default Table;

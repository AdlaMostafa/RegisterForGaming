export const Table_COLUMNS = (handleDelete) => [
  {
    key: '_id', // Update to '_id'
    title: 'Id',
    render: (data) => <>{data._id}</>,
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'password',
    title: 'Password',
  },
  {
    key: 'email', // Correct the key name to 'email'
    title: 'Email',
  },
  {
    key: '_id', // Update to '_id'
    title: 'Delete', // Change the title to 'Delete'
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleDelete(data._id)}>Delete</button>
      </div>
    ),
  },
];


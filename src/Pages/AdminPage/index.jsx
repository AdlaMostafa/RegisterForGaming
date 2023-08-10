import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ROLES } from '../../constants/index';
import axios from 'axios';
import Table from '../../components/Table';
import "./style.css";

export default function AdminPage() {
  const adminToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingUser, setDeletingUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://react-tt-api.onrender.com/api/users", {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setUsers(response.data.users);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [adminToken]);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === ROLES.GUEST || !role) {
      navigate('/login');
    } else if (role === ROLES.USER) {
      navigate('/home');
    }
  }, []);

  const deleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      setDeletingUser(userId);
      try {
        await axios.delete(`https://react-tt-api.onrender.com/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
      } catch (error) {
        console.log(error);
      } finally {
        setDeletingUser(null);
      }
    }
  };

  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    // Add more columns as needed
  ];

  return (
    <div className="adminPage">
      <h1 className="welcome">Welcome to Admin Page</h1>

      {isLoading ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <Table
          columns={columns}
          users={users}
          deleteUser={deleteUser}
          deletingUser={deletingUser}
        />
      )}

      <Link to="/home" className="backBut">Back to Home</Link>
    </div>
  );
}

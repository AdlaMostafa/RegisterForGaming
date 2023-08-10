import React, { useState, useEffect } from "react";
import SidePar from "../../components/SidePar";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { AUTH_API } from "../../../src/config/api";
import axios from "axios";
import { Table_COLUMNS } from "../../constants/info";
import Line from "../../Images/leftLine.png";
import "./style.css";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(AUTH_API);
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id, "is deleted");
    try {
      await axios.delete(`${AUTH_API}/${id}`);
      fetchData(); // Fetch data again after deletion
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    // Add more columns as needed
  ];

  return (
    <div className="container">
      <div className="headuser">
        <Header />
      </div>
      <div className="line2">
        <img src={Line} alt="Line" />
      </div>
      <div className="row">
        <div className="col-md-3">
          <SidePar />
        </div>
        <div className="col-md-9">
          <Table
            columns={columns}
            users={users}
            deleteUser={handleDelete}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPage;

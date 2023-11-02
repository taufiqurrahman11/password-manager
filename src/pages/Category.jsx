import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import styleHome from '../style/home.module.scss';

const Category = ({ category }) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/password?category=${category}`);
        setAccounts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [category]);

  const handleDeleteAccount = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/password/${id}`);
      const updatedAccounts = accounts.filter((account) => account.id !== id);
      setAccounts(updatedAccounts);
      alert('Data berhasil dihapus');
    } catch (error) {
      console.error('Gagal menghapus data:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styleHome.container}>
        <div className={styleHome.category}>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Accounts</h1>
            <Link to='/'>
            <button className={styleHome.back}>Back to home</button>
            </Link>
        </div>
        <div className={styleHome.containerList}>
          <table>
            <thead>
              <tr>
                <th>Website name</th>
                <th>Email</th>
                <th>Account category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className={styleHome.tbody}>
              {accounts.map((account) => (
                <tr className={styleHome.tr} key={account.id}>
                  <td>{account.provider}</td>
                  <td>{account.email}</td>
                  <td>{account.category}</td>
                  <td>
                    <button onClick={() => handleDeleteAccount(account.id)} className={styleHome.deleteLink}>Delete</button>
                    <Link to={`/detail/${account.id}`} className={styleHome.detailLink}>
                      <button>Detail</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Category;

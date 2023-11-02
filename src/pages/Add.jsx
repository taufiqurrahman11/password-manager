import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styleAdd from '../style/add.module.scss';
import axios from 'axios';

const Add = () => {
  const [accountData, setAccountData] = useState({
    provider: '',
    email: '',
    password: '',
    category: 'work',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData({ ...accountData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accountData.provider || !accountData.email || !accountData.password) {
      alert('Semua data harus diisi');
      return;
    }

    if (accountData.password.length < 6 ) {
      alert('Password minimal 6 karakter');
      return;
    }

    try {
      const emailCheckResponse = await axios.get(`http://localhost:3000/password?email=${accountData.email}`);

      if (emailCheckResponse.data.length > 0) {
        alert('Email sudah digunakan');
        return;
      }
      const response = await axios.post('http://localhost:3000/password', accountData);
      if (response.status === 201) {
        alert('Berhasil menambah data');
      } else {
        console.error('Failed to add account');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styleAdd.container}>
      <h1>Add Account</h1>
      <Link to='/'>
        <button className={styleAdd.back}>Back to home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className={styleAdd.inputItem}>
          <label htmlFor="provider">Provider</label>
          <input
            type="text"
            id="provider"
            name="provider"
            value={accountData.provider}
            onChange={handleChange}
          />
        </div>
        <div className={styleAdd.inputItem}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={accountData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styleAdd.inputItem}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={accountData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styleAdd.inputItem}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={accountData.category}
            onChange={handleChange}
            className={styleAdd.select}
          >
            <option value="work">work</option>
            <option value="family">family</option>
            <option value="personal">personal</option>
          </select>
        </div>
        <button type="submit" className={styleAdd.addAccount}>
          Add Account
        </button>
      </form>
    </div>
  );
};

export default Add;

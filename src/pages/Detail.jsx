import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styleDetail from '../style/detail.module.scss';

const Detail = () => {
  const { id } = useParams();

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/password/${id}`);
        setAccount(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!account) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styleDetail.main}>
        <div className={styleDetail.container}>
        <h2>Account Detail</h2>
        <Link to='/'>
            <button className={styleDetail.back}>Back to home</button>
        </Link>
        <div className={styleDetail.containerList}>
            <p>ID: {account.id}</p>
            <p>Website Name: {account.provider}</p>
            <p>Email: {account.email}</p>
            <p>Account Category: {account.category}</p>
        </div>
        </div>
    </div>
  );
};

export default Detail;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/')
      .then(response => {
        setData(response.data)
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3>Livros</h3>
      {data.map(item => {
        return (
          <div>
            <p key={item.id}>
              {item.id}: {item.title}
            </p>
            <Link to={`/details/${item.id}`}><button>Detalhes</button></Link>
            <Link to={`/update/${item.id}`}><button>Alterar Dados</button></Link>
          </div>
        )
      })}
    </div>
  );
};

export default Home;
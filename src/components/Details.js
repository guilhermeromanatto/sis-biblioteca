import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
      .then(response => {
        setData(response.data)
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

  }, [id]);

  function Delete(id) {
    axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
    .then(response => {
      console.log(response);
      alert("Dados apagados com sucesso")
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <h3>Detalhes do Livro: {data.title}</h3>
      <p>Titulo:</p> {data.title}
      <p>Descrição:</p> {data.description}
      <p>Número de Páginas:</p> {data.pageCount}
      <p>Resumo:</p> {data.excerpt}
      <p>Data de Publicação:</p> {data.publishDate}

      <br/>
      <br/>

      <Link to="/home"><button>Voltar</button></Link>
      <button onClick={() => Delete(id)}>Deletar</button>
    </div>
  );
}

export default Details
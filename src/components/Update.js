import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';


const Update = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
            .then(response => {
                reset(response.data)
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });

    }, [id, reset]);

    const onSubmit = (e) => {
        axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`, e)
            .then((response) => {
                console.log("Deu Certo", response.data)
                alert("Dados alterados com sucesso")

            })
            .catch((err) => {
                console.log(err)
                alert("Algo está errado, confira os dados")
            })
    }

    return (
        <div>
            <h3>Alterar dados</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Titulo</label>
                <input id="title" type="text" {...register("title")} />

                <label>Descrição</label>
                <textarea id="description" {...register("description")} placeholder="Insira a descrição do livro" />

                <label>Número de Páginas</label>
                <input id="pageCount" type="text" {...register("pageCount")} />

                <label>Resumo</label>
                <textarea id="excerpt" {...register("excerpt")} placeholder="Insira um resumo do livro" />

                <label>Data de Publicação</label>
                <input id="publishDate" type="date" {...register("publishDate")} />

                <Link to="/home"><button>Voltar</button></Link>
                <button type="submit">Atualizar Dados</button>

            </form>
        </div>
    )
}

export default Update
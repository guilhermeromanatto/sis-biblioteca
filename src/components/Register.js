import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (e) => {
        axios.post(`https://fakerestapi.azurewebsites.net/api/v1/Books/`, e)
            .then((response) => {
                console.log("Deu Certo", response.data)
                alert("Dados enviados com sucesso")
            })
            .catch((err) => {
                console.log(err)
                alert("Algo está errado, confira os dados")
            })
    }

    useEffect(() => { }, []);

    return (
        <div>
            <h3>Dados do novo Livro</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ID</label>
                <input id="id" type="text" {...register("id")} />

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
                <button type="reset">Limpar</button>
                <button type="submit">Cadastrar</button>

            </form>
        </div>
    )
}

export default Register
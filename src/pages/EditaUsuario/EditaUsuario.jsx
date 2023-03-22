import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams, useNavigate } from "react-router-dom";

export function EditaUsuario() {

    // useParams é uma função que retorna um objeto.
    // Este objeto contêm os parametros passados pela rota
    let params = useParams();
    let id = params.id;

    let usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // retorna valor booleano que satisfaza a pesquisa
    });

    let navigate = useNavigate()
// UseNavigate é uma função que retorna uma função
// A função de retorno tem capacidade de navegar entre as rotas da aplicação
    function editar() {
        // Capiturar as informações do formulário
        // Validar os dados de entrada
        // Modificar as informações no banco de dados
        navigate("/usuarios")
    }

    return (
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button onClick={editar} variant="dark">Editar</Button>
        </div>
    )
}
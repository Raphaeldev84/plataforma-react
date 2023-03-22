import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { Link, useParams } from "react-router-dom";

export function PerfilUsuario() {
  let params = useParams();
  let id = params.id;

  let usuario = usuarios.find((usuario) => {
    return usuario.id === parseInt(id);
  });

  return (
    <div className="perfil">
      <h2>{usuario.nome}</h2>
      <span>{usuario.email}</span>
      <br />
      <span>{usuario.idade} anos</span>
      <br />
      <Button variant="dark"><Link to="/">Home</Link></Button>
    </div>
  );
}

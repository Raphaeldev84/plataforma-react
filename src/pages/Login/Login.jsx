import { Button, Form } from "react-bootstrap";

export function Login() {
  return (
    <div className="d-flex justify-content-lg-center">
      <div className="d-flex ">
        
        <Form>
        <h1 class="d-flex justify-content-center mt-3">Login</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Digite o seu e-mail:</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Digite sua senha:</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Enviar
            </Button>
            <Button variant="secondary" size="lg">
              Google
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

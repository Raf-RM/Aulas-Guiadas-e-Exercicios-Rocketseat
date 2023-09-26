import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Details() {
  
  return(
    <Container>
      <h1>Hello World!</h1>
      <span>Rafael Rodrigues</span>

      <Button label="Entrar" loading />
      <Button label="Voltar"/>
      <Button label="Salvar" loading />
    </Container>
  )
}


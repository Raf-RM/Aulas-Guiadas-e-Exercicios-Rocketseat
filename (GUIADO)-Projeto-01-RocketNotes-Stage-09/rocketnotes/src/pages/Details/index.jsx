import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  
  return(
    <Container>
      <Header/>

      <ButtonText title="Excluir nota"/>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www/rocketseat.com.br</a></li>
          <li><a href="#">https://www/rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"></Tag>
        <Tag title="notejs"></Tag>
      </Section>

      <Button label="Voltar"/>
    </Container>
  )
}


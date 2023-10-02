import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  
  return(
    <Container>
      <Header/>

      <main>
        <Content>

        <ButtonText title="Excluir nota"/>

        <h1>
          Introdução ao React
        </h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum alias expedita voluptates saepe. Tenetur dicta libero earum ipsum vero laborum eos nisi error quaerat molestias illum, enim commodi ad. Libero.
        </p>

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
        
        </Content>
      </main>
    </Container>
  )
}


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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis facilis accusantium, repellendus voluptatibus culpa deserunt maiores quidem, quo quisquam voluptas officia doloremque reprehenderit sequi commodi labore debitis alias voluptate!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis soluta dicta error debitis aliquid nihil odio quam necessitatibus eius, eaque, accusamus rerum. Architecto totam voluptates possimus a numquam sunt cumque.
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


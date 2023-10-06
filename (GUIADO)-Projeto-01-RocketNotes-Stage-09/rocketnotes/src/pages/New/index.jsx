import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';


import { Container, Form } from './styles';

export function New(){
  return(
    <Container>
      <Header/>

      <main>

        <Form>

          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />

          <TextArea placeholder="Observações" />

        </Form>
        
      </main>
    </Container>
  )
}
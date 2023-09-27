import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from "./styles"

export function Header(){
  return (
    <Container>
      <Profile>

        <img
          src="https://github.com/Raf-RM.png"
          alt="Foto github usuário Raf-RM"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Rafael Rodrigues</strong>
        </div>

      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  );
}


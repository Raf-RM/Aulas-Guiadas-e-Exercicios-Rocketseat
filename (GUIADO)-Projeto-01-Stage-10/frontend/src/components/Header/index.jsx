import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles"

export function Header(){
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile" >

        <img
          src="https://github.com/Raf-RM.png"
          alt="Foto github usuário Raf-RM"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Rafael Rodrigues</strong>
        </div>

      </Profile>

      <Logout onClick={signOut} >
        <RiShutDownLine/>
      </Logout>

    </Container>
  );
}


import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Avatar } from './styles'
import { Link } from 'react-router-dom';

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }
    await updateProfile({ user });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>

      <Form>

        <Avatar>
          <img 
            src="https://github.com/raf-rm.png" 
            alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>

            <input 
              id="avatar" 
              type="file" 
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={event => setEmail(event.target.value)}
        />        
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={event => setOldPassword(event.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={event => setNewPassword(event.target.value)}
        /> 

        <Button label="Salvar" onClick={handleUpdate} />  

      </Form>

    </Container>
  );
}
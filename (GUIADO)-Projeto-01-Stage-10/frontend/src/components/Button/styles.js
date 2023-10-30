import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.blackground_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top:16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    // o símbolo "&" é do styled component e diz que, como estamos dentro do container, quando o container, que no caso é um botton, estiver desabilitado, será aplicado oque estiver aqui.
    opacity: 0.5;
  }
`;
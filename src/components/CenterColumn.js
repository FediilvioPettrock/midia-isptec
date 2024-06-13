import React from 'react';
import { CenterColumn as StyledCenterColumn, WelcomeMessage } from '../styles/CenterColumn';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const CenterColumn = () => {
  return (
    <StyledCenterColumn>
      <WelcomeMessage>Bem-vindo ao <span>ISP Media Player</span></WelcomeMessage>
      <p>O seu local predileto de assistir, ouvir e ler!</p>
      <PrimaryButton>Entrar</PrimaryButton>
      <SecondaryButton>Criar nova conta</SecondaryButton>
    </StyledCenterColumn>
  );
};

export default CenterColumn;

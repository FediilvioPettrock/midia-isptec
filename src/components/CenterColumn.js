import React from 'react';
import { CenterColumn as StyledCenterColumn, WelcomeMessage } from '../styles/CenterColumn';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const CenterColumn = () => {
  return (
    <StyledCenterColumn>
      <WelcomeMessage>Welcome to <span>ISP Media Player</span></WelcomeMessage>
      <p>Your favorite place to watch, listen and read!</p>
      <PrimaryButton>Log in</PrimaryButton>
      <SecondaryButton>Create an account</SecondaryButton>
    </StyledCenterColumn>
  );
};

export default CenterColumn;

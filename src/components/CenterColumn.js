import React from 'react';
import { CenterColumn as StyledCenterColumn, PageTitle } from '../styles/CenterColumn';
import LinkButton from './LinkButton';

const CenterColumn = () => {
  return (
    <StyledCenterColumn>
      <PageTitle>Welcome to <span>ISP Media Player</span></PageTitle>
      <p>Your favorite place to watch, listen and read!</p>
      <LinkButton to="/login" text="Log in" color="#F4B400" />
      <LinkButton to="/register" text="Create new account" color="#616161" />
    </StyledCenterColumn>
  );
};

export default CenterColumn;

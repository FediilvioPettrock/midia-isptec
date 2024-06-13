import React from 'react';
import { LeftColumn as StyledLeftColumn } from '../styles/LeftColumn';
import LeftNav from './LeftNavbar';

const LeftColumn = () => {
  return (
    <StyledLeftColumn>
      <LeftNav />
    </StyledLeftColumn>
  );
};

export default LeftColumn;

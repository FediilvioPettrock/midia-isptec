import React from 'react';
import { RightColumn as StyledRightColumn } from '../styles/RightColumn';
import ListPlaylists from './ListPlaylists';

const RightColumn = () => {
  return (
    <StyledRightColumn>
      <h2>Playlists</h2>
      <ListPlaylists />
    </StyledRightColumn>
  );
};

export default RightColumn;

import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import barbeiro from '../img/barbeiro.png';

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlaylistItem = styled(Link)`
  position: relative;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  background-color: red;
  border-radius: 10px;

  &:hover .overlay {
    opacity: 0.8;
  }

  &:hover .poster {
    opacity: 0.5;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
const PlaylistTitle = styled.h5`
    position: absolute;
    left: 10px;
    top: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
`;

const playlists = [
    { id: 1, name: 'Playlist 1', poster: barbeiro, videoCount: 10 },
    { id: 2, name: 'Playlist 2', poster: barbeiro, videoCount: 8 },
    { id: 3, name: 'Playlist 3', poster: barbeiro, videoCount: 15 },
    { id: 4, name: 'Playlist 4', poster: barbeiro, videoCount: 12 },
  ];

function ListPlaylists() {
    return (
        <PlaylistContainer>
            {playlists.map(playlist => (
                <PlaylistItem key={playlist.id} to={`/playlist/${playlist.id}`}>
                <Poster className="poster" src={playlist.poster} alt={playlist.name} />
                <Overlay className="overlay">
                    <PlaylistTitle>
                        {playlist.name}
                    </PlaylistTitle>
                    <span>{playlist.videoCount} vídeos</span>
                </Overlay>
                </PlaylistItem>
            ))}
        </PlaylistContainer>
    );
}

export default ListPlaylists;
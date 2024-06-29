import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Container from './components/Container';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import UserPlaylist from './pages/UserPlaylist'
import HomePage from './pages/HomePage';
import UserAlbum from './pages/UserAlbum';
import UserGroup from './pages/UserGroup';
import UserProfile from './pages/UserProfile';


function App() {
  return (
  <Router>
    <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/playlist" element={<UserPlaylist/>}/>
        <Route path="/useralbum" element={<UserAlbum/>}/>
        <Route path="/usergroup" element={<UserGroup/>}/>
        <Route path="/perfil" element={<UserProfile/>}/>
      </Routes>
    </Container>
  </Router>
  
  );
  
}

export default App;

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Container from './components/Container';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import UserPage from './pages/UserPage'
import HomePage from './pages/HomePage';


function App() {
  return (
  <Router>
    <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
      </Routes>
    </Container>
  </Router>
  
  );
  
}

export default App;

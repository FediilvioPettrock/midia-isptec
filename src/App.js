import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Container from './components/Container';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
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
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
      </Routes>
    </Container>
  </Router>
  
  );
  
}

export default App;

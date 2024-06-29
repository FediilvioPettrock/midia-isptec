import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../img/podcast.jpg'
import styles from '../components/Card.module.css'

function Card({titulo, descricao, onClick}){

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#555'; // Exemplo de mudança de cor de fundo ao passar o mouse
    e.currentTarget.style.transform = 'scale(1.05)'; // Exemplo de escala ao passar o mouse
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3333)'; // Retorna à cor de fundo original ao remover o mouse
    e.currentTarget.style.transform = 'scale(1)'; // Retorna ao tamanho original ao remover o mouse
  };
  
    return (
        <div onClick={onClick} className= "container mt-2">
          <div className="card"
              style={{ 
                        width: '16rem', 
                        height:'15rem', 
                        backgroundColor:'rgba(0, 0, 0, 0.3333)', 
                        border: 'none', 
                        color:'white', 
                        cursor: 'pointer', 
                        transition: 'background-color 0.3s ease, transform 0.3s ease'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
           >

            <img src={foto} className="card-img-top" alt="Placeholder" style={{height: '10rem'}}/>
            <div className="card-body" style={{border_width:'0px'}}>
              <h5 className="card-title" style={{fontSize: '1em', fontWeight: 'bold'}}>{titulo}</h5>
              <p className="card-text" style={{fontSize: '0.7em'}}> {descricao}</p>
            </div>
          </div>
        </div>
      );
}
export default Card
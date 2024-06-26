import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../img/podcast.jpg'

function Card({titulo, descricao, picture, preco}){
    return (
        <div className="container mt-2">
          <div className="card" style={{ width: '16rem', height:'15rem', backgroundColor:'rgba(0, 0, 0, 0.3333)', border: 'none', color:'white'}}>
            <img src={foto} className="card-img-top" alt="Placeholder" style={{height: '10rem'}}/>
            <div className="card-body" style={{border_width:'0px'}}>
              <h5 className="card-title" style={{fontSize: '1em', fontWeight: 'bold'}}>{titulo}</h5>
              <p className="card-text">{descricao}</p>
            </div>
          </div>
        </div>
      );
}
export default Card
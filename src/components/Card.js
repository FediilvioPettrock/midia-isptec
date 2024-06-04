import 'bootstrap/dist/css/bootstrap.min.css';

function Card({titulo, descricao, picture, preco}){
    return (
        <div className="container mt-2">
          <div className="card" style={{ width: '15rem', height:'26rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" style={{height: '10rem'}}/>
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{descricao}</p>
              <p ><span style={{fontWeight:'bold'}}>Preço: </span>{preco}</p>
              <a href="#" className="btn btn-primary">fazer marcação</a>
            </div>
          </div>
        </div>
      );
}
export default Card
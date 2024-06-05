import styles from './Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import barbeiro from '../img/barbeiro.png'
import LinkButton from '../components/LinkButton'
import Card from '../components/Card';
function Home(){
    return(

        <div className={styles.home_container}>
            <Navbar/>
            <section className={styles.container1}>
                <h1>Bem vindo a <span>ISPmedia</span></h1>
                <p>Explore conteúdos multimídia aqui!</p>
                <div>
                    <LinkButton className='' to="/cadastro" text="Registar-se" color="#222"/>
                    <LinkButton to="/login" text="Entrar" color="#222"/>
                </div>
                <img src={barbeiro} alt='Karapinha'/>
             </section>

             <section className={styles.container2} id="servicos">
                <h1>Novos conteúdos</h1>
                <div className={styles.card_container}>
                   <Card descricao="Some quick example text to build on the 
                   card title and make up the bulk of the card's 
                   content." titulo="Card Title" className={styles.item} preco="200kz"/>

                   <Card descricao="Some quick example text to build on the 
                   card title and make up the bulk of the card's 
                   content." titulo="Card Title" className={styles.item} preco="200kz"/>

                   <Card descricao="Some quick example text to build on the 
                   card title and make up the bulk of the card's 
                   content." titulo="Card Title" className={styles.item} preco="200kz"/>

                    <Card descricao="Some quick example text to build on the 
                   card title and make up the bulk of the card's 
                   content." titulo="Card Title" className={styles.item} preco="200kz"/> 
                   
                   <Card descricao="Some quick example text to build on the 
                   card title and make up the bulk of the card's 
                   content." titulo="Card Title" className={styles.item} preco="200kz"/> 
                </div>
                
                
             </section>
            <Footer/>
        </div>      
    )
}

export default Home
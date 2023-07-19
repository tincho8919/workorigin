import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import './Navegador.css'

const Navegador = () => {
    return (
    <nav>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/principal'>Principal</Link>
            </li>
            <li>
                <Link to='/main'>Formulario</Link>
            </li>
            <li>
                <Link to='/api'>Api</Link>
            </li>
            <li>
                <Link to='/productos'>Productos</Link>
            </li>
            <li>
                <a href="https://www.frba.utn.edu.ar/"
                target='_blank'
                rel="noopener noreferrer">UTN</a>
            </li>
        </ul>
    </nav>
    );
}
export default Navegador;
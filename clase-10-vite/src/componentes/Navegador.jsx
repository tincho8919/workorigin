


import { Link } from 'react-router-dom'


import '../css/navegador.css'

const Navegador = () => {
    return (

        <nav>
            <ul>
                <li>
                    <Link to='/home'> Home </Link>
                </li>
                <li>
                    <Link to='/principal'> Principal </Link>
                </li>
                <li>
                    <Link to='/main'> Formulario </Link>
                </li>
                <li>
                    <Link to='/api'> Api </Link>
                </li>
                <li>
                    <Link to='/productos'> Productos </Link>
                </li>
                <li>
                    <a href="https://utn.edu.ar/es/" 
                    target='_blank'
                    rel="noopener noreferrer"> UTN </a>
                </li>
            </ul>
        </nav>

    );
}

export default Navegador;
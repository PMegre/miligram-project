import { Link, NavLink } from "react-router-dom";

import '../styles/Header.css';

import Logo from '../components/Logo';
import SwitcherSelect from '../components/SwitcherSelect';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <header className="site__header">
            <Container fluid>
                <Row className="d-flex align-items-center">
                    <Col sm={3} className="logo__blend" >
                        <Link to="/">
                            <Logo />
                        </Link>
                    </Col>
                    <Col sm={9} className="d-inline-flex justify-content-between">
                        <nav className="main__nav">
                            <ul>
                                <li>
                                    <NavLink to="/about">Sobre nós</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services">Serviços</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contactos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/recruitment">Recrutamento</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <SwitcherSelect />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;

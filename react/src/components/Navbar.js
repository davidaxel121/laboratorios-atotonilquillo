import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import './styles/Navbar.css';

const MyNavbar = () => {

	return (
		<div className="navbar-container">
			<Navbar className="navbar" fixed="top" expand="lg">
				<Navbar.Brand><Link className="navbar-link" to="/">Navbar</Link></Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto text-center">
						{/* <Nav className="nav-link"><Link className="navbar-link" to="/">Home</Link></Nav> */}
						{/* <Nav className="nav-link"><Link className="navbar-link" to="/anotherpage">Another Page</Link></Nav> */}
						<Nav className="nav-link">Foto</Nav>
						<Nav className="nav-link">Sobre nosotros</Nav>
						<Nav className="nav-link">Servicios</Nav>
						<Nav className="nav-link">Instalaciones</Nav>
						<Nav className="nav-link">Ubicacion</Nav>
						<Nav className="nav-link">Contacto</Nav>
						<Nav className="nav-link">Footer</Nav>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</ div>
	)
}

export default MyNavbar;
import React, {useContext} from 'react';
import { Context } from "../store/GlobalContext";

import MyNavbar from '../components/Navbar';

import './styles/Home.css';

const Home = () => {

	const { globalState } = useContext(Context);

	return (
		<div className="container-fluid home-container">

			<div className="row">
				<div className="col-12">
					<MyNavbar />
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center home-hero">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Laboratorio de analisis clinicos Atotonilquillo</h1>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe">
				<div className="col-12 col-md-6 text-center">
					<div className="row">
						<div className="col"><h2>Hola</h2></div>
						<div className="col"><h2>Hola 2</h2></div>
					</div>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Servicios</h1>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Instalaciones</h1>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Horario</h1>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Ubicacion</h1>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Contacto</h1>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Footer</h1>
				</div>
			</div>
		</div>
	)
}

export default Home;
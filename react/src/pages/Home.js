// import React, { useContext } from 'react';
import React from 'react';
// import { Context } from "../store/GlobalContext";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import logo from '../assets/images/hero-background.jfif';

import MyNavbar from '../components/Navbar';

import './styles/Home.css';

const Home = () => {

	// const { globalState } = useContext(Context);

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

			<div className="row d-flex align-items-center justify-content-center rowe about-us p-2 mb-3 mt-3">
				<div className="col-12 text-center">

					<div className="row mt-3 mb-3">
						<div className="col">
							<h2>Sobre nosotros</h2>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>

					<div className="row d-flex align-items-center justify-content-center">
						<div className="col-12 col-md-6  p-1">
							<h2>Bienvenido a Laboratorio de analisis clinicos Atotonilquillo</h2>

							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Nobis alias sed, a accusamus beatae sint, placeat itaque numquam incidunt, necessitatibus labore.
							Atque ipsam totam iste ex quod quibusdam quia ea rem libero mollitia, quos adipisci, obcaecati
							maiores commodi praesentium fugiat tenetur laboriosam cupiditate laborum ducimus aliquid odio
								consequuntur. Suscipit, delectus.</p>

							<button type="button" className="btn btn-dark">Nuestros servicios</button>
						</div>

						<div className="col-12 col-md-6 p-1">
							<Image src={logo} fluid rounded />
						</div>
					</div>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe services mb-4 p-3">
				<div className="col-12 text-center">

					<div className="row mb-3">
						<div className="col-12">
							<h2 className="home-title">Servicios</h2>
						</div>
					</div>

					<div className="row d-flex align-items-center justify-content-center">
						<div className="col-12">
							<div className="row d-flex align-items-center justify-content-around">

								<div className="col-12 col-md-3 mb-3">
									<Card>
										<Card.Img variant="top" src={logo} />
										<Card.Body>
											<Card.Title>Nombre del servicio</Card.Title>
											<Card.Text>
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quisquam, autem consectetur illo iure facilis obcaecati ex optio eos sapiente!
											</Card.Text>
											<Button variant="primary">Mas informacion</Button>
										</Card.Body>
									</Card>
								</div>

								<div className="col-12 col-md-3 mb-3">
									<Card>
										<Card.Img variant="top" src={logo} />
										<Card.Body>
											<Card.Title>Nombre del servicio</Card.Title>
											<Card.Text>
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quisquam, autem consectetur illo iure facilis obcaecati ex optio eos sapiente!
											</Card.Text>
											<Button variant="primary">Mas informacion</Button>
										</Card.Body>
									</Card>
								</div>

								<div className="col-12 col-md-3 mb-3">
									<Card>
										<Card.Img variant="top" src={logo} />
										<Card.Body>
											<Card.Title>Nombre del servicio</Card.Title>
											<Card.Text>
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quisquam, autem consectetur illo iure facilis obcaecati ex optio eos sapiente!
											</Card.Text>
											<Button variant="primary">Mas informacion</Button>
										</Card.Body>
									</Card>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe instalations p-3">
				<div className="col-12 text-center">

					<div className="row mb-3">
						<div className="col">
							<h2 className="home-title">Instalaciones</h2>
						</div>
					</div>

					<div className="row d-flex align-items-center justify-content-around">
						<div className="col-12 col-md-3 mb-3">
							<Image src={logo} rounded fluid />
						</div>
						<div className="col-12 col-md-3 mb-3">
							<Image src={logo} rounded fluid />
						</div>
						<div className="col-12 col-md-3 mb-3">
							<Image src={logo} rounded fluid />
						</div>
						<div className="col-12 col-md-3 mb-3">
							<Image src={logo} rounded fluid />
						</div>
					</div>

				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe atention-hour p-3">
				<div className="col-12 text-center">
					<h2 className="home-title">Nuestro horario de atencion</h2>

					<h3>Horario: Lunes a viernes</h3>
					<h4>8:30 a 14:00 HRS</h4>
					<h4>Y de 17:00 a 19:00 HRS</h4>
					<h4>SAbado de 8:30 a 13:00 HRS</h4>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe ubication p-3">
				<div className="col-12 text-center">

					<div className="row mb-4">
						<div className="col">
							<h1 className="home-title">Ubicacion</h1>
						</div>
					</div>

					<div className="row d-flex align-items-center justify-content-center">
						<div className="col-12 col-md-6">
							<ResponsiveEmbed aspectRatio="16by9">
								<embed type="image/svg+xml" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467.4719799725413!2d-103.1182242551205!3d20.392130258542576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4371e2fbaac753b!2sLaboratorio%20de%20Analisis%20Clinicos%20Atotonilquillo!5e0!3m2!1ses!2smx!4v1603246500971!5m2!1ses!2smx" />
							</ResponsiveEmbed>
						</div>
					</div>

				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe contact p-3">
				<div className="col-12 text-center">
					<div className="row">

						<div className="col  d-flex align-items-center justify-content-center">
							<h2 className="home-title">Contactanos</h2>
						</div>

						<div className="col">
							<p>BlueDart</p>
							<p>Marthandam (K.K District)</p>
							<p>Tamil Nadu, IND </p>
							<p>Phone: +91 9159669599 </p>
							<p>Email: info@bluedart.in </p>
							<p>Web: www.bluedart.in </p>
						</div>
					</div>

				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe footer p-3">
				<div className="col-12 text-center">
					<div className="row">
						<div className="col">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid autem reprehenderit voluptatum in quis et est earum, incidunt sapiente aspernatur quidem praesentium consectetur unde.</p>
						</div>

						<div className="col d-flex align-items-center justify-content-center">
							<h5>Informacion de contacto</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;
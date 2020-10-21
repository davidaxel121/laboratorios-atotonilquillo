// import React, { useContext } from 'react';
import React from 'react';
// import { Context } from "../store/GlobalContext";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
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

			<div className="row d-flex align-items-center justify-content-center rowe about-us">
				<div className="col-12 text-center">

					<div className="row">
						<div className="col">
							<h2>Sobre nosotros</h2>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<h2>Bienvenido a Laboratorio de analisis clinicos Atotonilquillo</h2>

							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Nobis alias sed, a accusamus beatae sint, placeat itaque numquam incidunt, necessitatibus labore.
							Atque ipsam totam iste ex quod quibusdam quia ea rem libero mollitia, quos adipisci, obcaecati
							maiores commodi praesentium fugiat tenetur laboriosam cupiditate laborum ducimus aliquid odio
								consequuntur. Suscipit, delectus.</p>

							<button type="button" className="btn btn-dark">Nuestros servicios</button>
						</div>
						<div className="col">
							<Carousel>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={logo}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>First slide label</h3>
										<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={logo}
										alt="Third slide"
									/>

									<Carousel.Caption>
										<h3>Second slide label</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={logo}
										alt="Third slide"
									/>

									<Carousel.Caption>
										<h3>Third slide label</h3>
										<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</div>
					</div>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe services">
				<div className="col-12 text-center">
					<h2 className="home-title">Servicios</h2>

					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={logo}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={logo}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={logo}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe instalations">
				<div className="col-12 text-center">
					<h2 className="home-title">Instalaciones</h2>

					<Image src={logo} rounded fluid />
					<Image src={logo} rounded fluid />
					<Image src={logo} rounded fluid />
					<Image src={logo} rounded fluid />
					<Image src={logo} rounded fluid />
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe atention-hour">
				<div className="col-12 text-center">
					<h2 className="home-title">Nuestro horario de atencion</h2>

					<h3>Horario: Lunes a viernes</h3>
					<h4>8:30 a 14:00 HRS</h4>
					<h4>Y de 17:00 a 19:00 HRS</h4>
					<h4>SAbado de 8:30 a 13:00 HRS</h4>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe ubication">
				<div className="col-12 text-center">
					<h1 className="home-title">Ubicacion</h1>

					<ResponsiveEmbed aspectRatio="16by9">
						<embed type="image/svg+xml" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467.4719799725413!2d-103.1182242551205!3d20.392130258542576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4371e2fbaac753b!2sLaboratorio%20de%20Analisis%20Clinicos%20Atotonilquillo!5e0!3m2!1ses!2smx!4v1603246500971!5m2!1ses!2smx" />
					</ResponsiveEmbed>

					{/* <iframe  width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe contact">
				<div className="col-12 text-center">
					<h2 className="home-title">Contactanos</h2>

					<p>BlueDart</p>
					<p>Marthandam (K.K District)</p>
					<p>Tamil Nadu, IND </p>
					<p>Phone: +91 9159669599 </p>
					<p>Email: info@bluedart.in </p>
					<p>Web: www.bluedart.in </p>
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center rowe footer">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Pie de pagina</h1>
				</div>
			</div>
		</div>
	)
}

export default Home;
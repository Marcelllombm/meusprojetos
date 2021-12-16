import { Container, Content } from "./styles";
import {Form } from './Form';
import {
	AiFillTwitterSquare as Twitter,
	AiOutlineFacebook as Facebook,
	AiFillLinkedin as Linkedin,
} from "react-icons/ai";

export function Contact() {
	return (
		<Container >
			<Content id="contact">
				<header>
					<h1>Contact Us</h1>
					<p>
						Most calendars are designed for teams. Slate is designed for
						freelancers
					</p>
					<div className="midia-sociais">
						<Twitter size={40} className="inc" />
						<Facebook size={40} className="inc" />
						<Linkedin size={40} className="inc" />
					</div>
				</header>

				<main>
					<div className="map">
						<img src={require('../../assets/img-map.png').default} alt="" />
					</div>

					<div className="info">
						<div className="info-map">
							<img
								src={require("../../assets/inc-map.svg").default}
								alt="map"
							/>
							<p>
								6386 Spring St undefined Anchorage, Georgia 12473 United States
							</p>
						</div>

						<div className="info-phone">
							<img
								src={require("../../assets/inc-phone.svg").default}
								alt="phone"
							/>
							<p>(843) 555-0130</p>
						</div>

						<div className="info-email">
							<img
								src={require("../../assets/inc-email.svg").default}
								alt="email"
							/>
							<p>willie.jennings@example.com</p>
						</div>
					</div>

					<div className="formContact">
            <h1>Contact Us</h1>
            <Form/>
          </div>
				</main>
			</Content>
		</Container>
	);
}

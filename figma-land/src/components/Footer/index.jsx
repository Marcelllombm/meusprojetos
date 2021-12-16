import { Container, Content } from "./styles";
import {
	AiFillTwitterSquare as Twitter,
	AiOutlineFacebook as Facebook,
	AiFillLinkedin as Linkedin,
} from "react-icons/ai";

export function Footer() {
	return (
		<Container>
			<Content id="footer">
				<div className="midia-sociais">
					<Twitter size={40} className="inc" />
					<Facebook size={40} className="inc" />
					<Linkedin size={40} className="inc" />
				</div>
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#features">Features</a>
					</li>
					<li>
						<a href="#partners">Partners</a>
					</li>
					<li>
						<a href="#testimonials">Testimonials</a>
					</li>
					<li>
						<a href="#pricing">Princing</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</Content>
		</Container>
	);
}

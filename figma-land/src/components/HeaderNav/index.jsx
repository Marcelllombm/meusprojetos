import { Container } from "./styles";
export function HeaderNav() {
	return (
		<Container>
			<div className="content">
				<div className="logo">
					<img src={require(`../../assets/logo.png`).default} alt="" />
				</div>
				<div className="toggle"></div>
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
			<div className="phone">000 99999-9999</div>
		</Container>
	);
}

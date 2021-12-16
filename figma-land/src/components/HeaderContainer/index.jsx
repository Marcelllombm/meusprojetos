import { Container } from "./styles";

export function HeaderContainer() {
	return (
		<Container>
			<div className="content" id="home">
				<h3>At your fingertips</h3>
				<h1>Lightning fast prototyping</h1>
				<p>
					Most calendars are designed for teams. Slate is designed for
					freelancers
				</p>
			</div>
				<button className='btImgNotebook'>Try For Free</button>
				<div className="imgNotebook">
					<img src={require("../../assets/imgSistem-1.png").default} alt="" />
			</div>
		</Container>
	);
}

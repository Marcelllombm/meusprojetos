import { Container, Content } from "./styles";

export function Partners() {
	return (
		<Container>
			<Content id='partners'>
				<h1>Partners</h1>
				<p>
					Most calendars are designed for teams. Slate is designed for
					freelancers
				</p>
        
				<div className="partners">
					<img src={require('../../assets/partners-1.svg').default} alt="part-img" />
          <img src={require('../../assets/partners-2.svg').default} alt="part-img" />
          <img src={require('../../assets/partners-3.svg').default} alt="part-img" />
          <img src={require('../../assets/partners-4.svg').default} alt="part-img" />
          <img src={require('../../assets/partners-5.svg').default} alt="part-img" />
          <img src={require('../../assets/partners-6.svg').default} alt="part-img" />
				</div>

        <button>Try For Free</button>
			</Content>
		</Container>
	);
}

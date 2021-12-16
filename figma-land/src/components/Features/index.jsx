import { Container, Header, Content } from "./styles";

export function Features() {
	return (
		<Container>
			<Header id="features">
				<h3>At your fingertips</h3>
				<h1>Features</h1>
				<p>
					Most calendars are designed for teams. Slate is designed for
					freelancers
				</p>
			</Header>
			<Content>
				<div className="imgSistem-2">
					<img src={require("../../assets/imgSistem-2.png").default} alt="" />
				</div>
				<div className="itens">
					<span>
						<img
							src={require("../../assets/ic_restaurant.svg").default}
							alt="restaurante"
						/>
						<h3>At your fingertips</h3>
						<p>
							Slate helps you see how many more days you need to work to reach
							your financial goal.{" "}
						</p>
					</span>
					<span>
						<img
							src={require("../../assets/ic_restaurant.svg").default}
							alt=""
						/>
						<h3>At your fingertips</h3>
						<p>
							Slate helps you see how many more days you need to work to reach
							your financial goal.{" "}
						</p>
					</span>
				</div>
			</Content>
		</Container>
	);
}

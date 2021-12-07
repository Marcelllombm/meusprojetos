import { Container, Content } from "./styles";

export function Pricing() {
	return (
		<Container>
			<Content id="pricing">
				<div className="left-content">
					<h1>Pricing</h1>
					<p>
						Slate helps you see how many more days you need to work to reach
						your financial goal for the month and year.
					</p>
				</div>

				<div className="right-content">
					<h3>30 - DAY FREE TRIAL.</h3>
					<h4>
						<span>$10</span>/ Month per User
					</h4>
					<p>Most calendars are designed for teams.</p>
					<button>Get started</button>
				</div>
			</Content>
		</Container>
	);
}

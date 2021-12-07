import { Container, Content } from "./styles";
import { StarRating } from "./StarRating";
export function Testimonials() {
	let testimonials = [];

	for (let i = 0; i <= 5; i++) {
		testimonials.push(
			<div className="testimonial" key={i}>
				<img src={require("../../assets/people-ellipse.png").default} alt="" />
				<p>
					Slate helps you see how many more days you need to work to reach your
					financial goal for the month and year.
				</p>
				<StarRating />
				<h3 className="name">Regina Miles</h3>
				<span>designed</span>
			</div>
		);
	}

	return (
		<Container>
			<Content id='testimonials'>
				<h1>Testimonials</h1>
				<div className="testimonials">{testimonials}</div>
				<button>More Testimonials</button>
			</Content>
		</Container>
	);
}

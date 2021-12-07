import { useState } from "react";
import { Container, Content } from "./styles";

export function Newsletter() {
	const [value, setValue] = useState("");
	

	function handleOnchange(ev) {
		const { value } = ev.target;
		setValue(value);
	}

	function onSubmit(ev) {
		ev.preventDefault();
		if (value === "") {
			alert("your email");
		} else {
			localStorage.setItem("email", value);
			setValue("");
			alert("Thanks for Sign up for our newsletter");
		}
	}

	return (
		<Container>
			<Content id='newsletter'>
				<div className="imgNewsletter">
					<img src={require("../../assets/newsletter.svg").default} alt="" />
				</div>
				<div className="newsletter">
					<h3>At your fingertips</h3>
					<h1>Lightning fast prototyping </h1>
					<p>
						<span>Subscribe to our Newsletter</span>
						<br />
						Available exclusivery on Figmaland
					</p>
					<form onSubmit={onSubmit}>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={value}
							onChange={handleOnchange}
						/>
						<button type="submit"> Subscribe</button>
					</form>
				</div>
			</Content>
		</Container>
	);
}

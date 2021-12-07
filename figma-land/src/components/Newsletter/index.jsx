import { useState, useEffect } from "react";
import { Container, Content } from "./styles";

export function Newsletter() {
	const initialValues = {
		email: "",
	};
	const [valueForm, setValueForm] = useState(initialValues);
	const [formError, setFormError] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	function handleOnchange(ev) {
		const { name, value } = ev.target;
		setValueForm({ ...valueForm, [name]: value });
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		setFormError(validate(valueForm));
		setIsSubmit(true);
	}

	useEffect(() => {
		if (Object.keys(formError).length === 0 && isSubmit) {
			const initialValues = {
				email: "",
			};
			const { email } = valueForm;
			localStorage.setItem("E-mail:", email);
			setValueForm(initialValues);
		}
	}, [formError]);

	const validate = (value) => {
		const error = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!value.email) {
			error.email = "Email is required!";
		} else if (!regex.test(value.email)) {
			error.email = "This is not a valid email format ";
		}

		return error;
	};

	return (
		<Container>
			<Content id="newsletter">
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
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="email"
							placeholder="Your Email"
							value={valueForm.email}
							onChange={handleOnchange}
						/>
						<button type="submit"> Subscribe</button>
						<p className="validateErrors">{formError.email}</p>
						{Object.keys(formError).length === 0 && isSubmit ? (
							<div className="validate-sucess">Successful registration</div>
						) : (
							""
						)}
					</form>
				</div>
			</Content>
		</Container>
	);
}

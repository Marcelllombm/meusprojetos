import { useState, useEffect } from "react";

export function Form() {
	const initialValues = {
		username: "",
		email: "",
		message: "",
	};
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	function handleOnchange(ev) {
		const { name, value } = ev.target;
		setFormValues({ ...formValues, [name]: value });
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	}
  
	useEffect(() => {
        
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const initialValues = {
        username: "",
        email: "",
        message: "",
      };
			const { username, email, message } = formValues;
			localStorage.setItem("cadastro", [username, email, message]);
			setFormValues(initialValues);
		}

	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!values.username) {
			errors.username = "Username is required!";
		}
		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format";
		}
		if (!values.message) {
			errors.message = "Message is required!";
		} else if (values.message.length < 10) {
			errors.message = "message must be more than 10 characters!";
		}
		return errors;
	};

	return (
		<form onSubmit={handleSubmit}>
			{Object.keys(formErrors).length === 0 && isSubmit ? (
				<div className="validate-sucess">Successful registration</div>
			) : (
				""
			)}
			<input
				type="text"
				name="username"
				placeholder="your Name"
				value={formValues.username}
				onChange={handleOnchange}
			/>
			<p  className="validateErrors">{formErrors.username}</p>
			<input
				type="text"
				name="email"
				placeholder="your Email"
				value={formValues.email}
				onChange={handleOnchange}
			/>
			<p  className="validateErrors">{formErrors.email}</p>
			<textarea
				type="text"
				name="message"
				placeholder="your message"
				value={formValues.message}
				onChange={handleOnchange}
			/>
			<p className="validateErrors">{formErrors.message}</p>
			<button>Send</button>
		</form>
	);
}

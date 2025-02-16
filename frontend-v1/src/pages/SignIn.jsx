import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false); // Prevents infinite loop

	// ✅ Auto-fill email & password from localStorage on load
	useEffect(() => {
		const storedEmail = localStorage.getItem("email");
		const storedPassword = localStorage.getItem("password");

		if (storedEmail && storedPassword) {
			setFormData({ email: storedEmail, password: storedPassword });
			setIsSubmitting(true); // ✅ Set flag to submit after state update
		}
	}, []);

	// ✅ Automatically submit when credentials are loaded
	useEffect(() => {
		if (isSubmitting && formData.email && formData.password) {
			handleSubmit();
		}
	}, [isSubmitting, formData]); // Runs when formData is updated

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		if (e) e.preventDefault(); // Prevent manual form submission issues
		setError("");

		try {
			const response = await fetch("http://localhost:8080/me/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Failed to log in");
			}

			// ✅ Store JWT token in localStorage
			localStorage.setItem("token", data.token);

			alert("Login successful! Redirecting to home page.");
			navigate("/"); // Redirect to dashboard
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="signin-container">
			<h2>Sign In</h2>
			{error && <p className="error-message">{error}</p>}
			<form onSubmit={handleSubmit} className="signin-form">
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<br />
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleChange}
					required
				/>
				<br />
				<button type="submit" className="signin-button">Sign In</button>
			</form>
		</div>
	);
};

export default SignIn;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const RegisterForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		skillLinks: "",
		skills: [],
	});
	const [error, setError] = useState("");

	const skillOptions = [
		"JavaScript", "Python", "Java", "C++", "Machine Learning",
		"Web Development", "Data Science", "Cybersecurity",
		"Blockchain", "Cloud Computing",
	];

	const handleChange = (e) => {
		const { name, value } = e.target;

		// Automatically extract username from email
		if (name === "email") {
			const usernameFromEmail = value.split("@")[0];
			setFormData({ ...formData, email: value, username: usernameFromEmail });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSkillChange = (e) => {
		const { value, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			skills: checked
				? [...prevData.skills, value] // Add skill if checked
				: prevData.skills.filter((skill) => skill !== value), // Remove if unchecked
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			const response = await fetch("http://localhost:8080/me/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Failed to register");
			}

			// ✅ Store email & password in localStorage for auto-filling sign-in
			localStorage.setItem("email", formData.email);
			localStorage.setItem("password", formData.password);

			alert("Registration successful! Please sign in.");
			navigate("/login"); // Redirect to SignIn page
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="register-container">
			<h2>Register</h2>
			{error && <p className="error-message">{error}</p>}
			<form onSubmit={handleSubmit} className="register-form">
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
					required
				/>
				<br />
				<input
					type="text"
					name="username"
					placeholder="Username (Auto-filled)"
					value={formData.username}
					readOnly
					required
				/>
				<br />
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
					required
				/>
				<br />
				<input
					type="text"
					name="skillLinks"
					placeholder="Portfolio/GitHub"
					onChange={handleChange}
				/>
				<br />

				{/* Skills Section */}
				<div className="skills-container">
					<p>Select Your Skills:</p>
					<div className="skills-grid">
						{skillOptions.map((skill) => (
							<label key={skill} className="skill-label">
								<input
									type="checkbox"
									value={skill}
									checked={formData.skills.includes(skill)}
									onChange={handleSkillChange}
								/>
								{skill}
							</label>
						))}
					</div>
				</div>

				<button type="submit" className="register-button">Register</button>
			</form>
		</div>
	);
};

export default RegisterForm;

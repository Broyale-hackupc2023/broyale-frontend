import styled from 'styled-components';
import { useState } from 'react';

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	height: 100%;
	min-height: 100vh;
	gap: 2rem;

	input {
		width: 100%;
		max-width: 400px;
		background-color: var(--background-2);
		color: var(--text-2);
		border: none;
		border-radius: 4px;
		padding: 8px;
		font-size: 1rem;

		&:focus {
			outline: none;
			background-color: var(--background-3);
		}

		&::placeholder {
			color: var(--text-3);
		}
	}

	button {
		width: 100%;
		max-width: 400px;
		padding: 8px;
		border-radius: 4px;
		border: none;
		background-color: var(--accent-1);
		color: var(--text-1);
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;

		&:hover {
			background-color: var(--accent-2);
		}

		&:disabled {
			background-color: var(--background-3);
			color: var(--text-3);
			cursor: not-allowed;

			&:hover {
				background-color: var(--background-3);
		}
	}
`;


function Login({ handleLogin }) {
	const [usernameInput, setUsernameInput] = useState("");

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			if (usernameInput.length > 0) handleLogin(usernameInput);
		}
	}

	return (
		<LoginContainer>
			<input
				type="text"
				value={usernameInput}
				onChange={(e) => setUsernameInput(e.target.value)}
				onKeyDown={handleEnter}
				placeholder="Enter your username"
			/>
			<button
				disabled={usernameInput.length === 0}
				onClick={() => {
					if (usernameInput.length > 0) handleLogin(usernameInput);
				}}
			>
				Enter
			</button>
		</LoginContainer>
	);
}

export default Login;
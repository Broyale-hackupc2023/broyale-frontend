import styled from 'styled-components';
import ContextContainer from './components/ContextContainer';
import InputContainer from './components/InputContainer';
import React, { useState } from "react";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	height: 100vh;
	max-height: 100%;
	overflow: hidden;
	background-color: #282c34;
	color: #ccc;
	padding: 2rem 1rem;
	gap: 1rem;
`;

function App() {

	const [suggestions, setSuggestions] = useState([]);
	const sendInput = (input) => {
		console.log(input);
	}

	return (
		<Container className="App">
			<ContextContainer />
			<InputContainer
				suggestions={suggestions}
				sendInput={sendInput}
			/>
		</Container>
	);
}

export default App;

import styled from 'styled-components';
import ContextContainer from './components/ContextContainer';
import InputContainer from './components/InputContainer';
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

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

const ENDPOINT = "http://localhost:5000";

function App() {

	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const socket = io(ENDPOINT);

		socket.on("connect", () => {
			console.log("Connected to server as " + socket.id);
		});

		socket.on("disconnect", () => {
			console.log("Disconnected from server");
		});

		socket.on("message", (data) => {
			console.log(data);
		});

		setSocket(socket);

		return () => {
			socket.disconnect();
		};
	}, []);

	function handleSendMessage(recipient, message) {
		socket.emit("message", { recipient, message });
	}

	const [suggestions, setSuggestions] = useState([
		"Hacer un té",
		"Comprar un libro",
		"Matar a un bebé y utilizar su sangre para construir un pentagrama",
		"Echar una siestecita"
	]);
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

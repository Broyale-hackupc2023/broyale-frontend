import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import Game from "./pages/Game";
import Lobby from "./pages/Lobby";
import Login from "./pages/Login";

const ENDPOINT = "http://localhost:5000";

function App() {
	const [theme, setTheme] = useState("dark");

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

		socket.on("rooms_update", (rooms) => {
			setRooms(rooms);
		});

		socket.on("joined_room", (room) => {
			setCurrentRoom(room);
		});

		socket.on("error", (error) => {
			// Create a sl-alert element
			const alert = Object.assign(document.createElement("sl-alert"), {
				variant: "danger",
				closable: true,
				duration: 3000,
				innerHTML: `
					<sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
					${error}
				`,
			});

			// Append to body
			document.body.appendChild(alert);
			return alert.toast();
		});

		socket.on("start_game", () => {
			setPlaying(true);
		});

		setSocket(socket);

		return () => {
			socket.disconnect();
		};
	}, []);

	// Global variables
	const [playing, setPlaying] = useState(false);
	const [username, setUsername] = useState(undefined);
	const handleLogin = (username) => {
		setUsername(username);
		socket.emit("login", {'name': username});
	}
	const handleError = (error) => { }
	
	// Lobby variables
	const [rooms, setRooms] = useState([
		{
			"id": "1",
			"name": "Room 1",
			"description": "This is room 1",
			"players": [
				{
					"id": "1",
					"name": "Player 1",
				},
				{
					"id": "2",
					"name": "Player 2",
				},
				{
					"id": socket ? socket.id : null,
					"name": "Player 3",
				}
			],
			"max_players": 4,
			"owner": "1",
		}
	]);

	const [currentRoom, setCurrentRoom] = useState(null);
	const createRoom = (name, description) => {
		socket.emit("create_room", {
			'name': name,
			'description': description,
		});
	}
	const joinRoom = (room) => {
		socket.emit("join_room", {
			'room_id': room.id,
		});
	}
	const leaveRoom = () => {
		socket.emit("leave_room");
		setCurrentRoom(null);
	}
	const startGame = (room) => {
		socket.emit("start_game", {
			'room_id': room,
		});
	}

	// Game variables
	const [canSendInput, setCanSendInput] = useState(false);
	const sendInput = (input) => { }



	return (
		<div className={`App ${theme}`}>
			{
				(username === undefined) ? (<Login handleLogin={handleLogin} />
			) : playing ? (
				<Game
					canSendInput={canSendInput}
					sendInput={sendInput}
				/>
			) : (
				<Lobby
					userId={socket ? socket.id : null}
					availableRooms={rooms}
					currentRoom={currentRoom}
					createRoom={createRoom}
					joinRoom={joinRoom}
					leaveRoom={leaveRoom}
					startGame={startGame}
				/>
			)}
		</div>
	);
}

export default App;

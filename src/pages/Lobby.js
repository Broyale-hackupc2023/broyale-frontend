import styled from 'styled-components';
import { useState } from 'react';

import Room from '../components/Room';
import NewRoomDialog from '../components/NewRoomDialog';

const LobbyContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 1rem 0;
	gap: 16px;

	>* {
		max-width: 800px;
		margin: 0 12px;
		width: 100%;
	}
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	h1 {
		margin: 0;
		font-size: 1.2rem;
	}
`;

const JoinButton = styled.button`
	background-color: var(--accent-1);
	color: var(--text-2);
	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		background-color: var(--accent-2);
	}
`;

const RoomCardsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	height: 100%;
	max-height: 100%;
	overflow-y: auto;
	gap: 16px;
`;


function Lobby({ userId, availableRooms, currentRoom, createRoom, joinRoom, leaveRoom, startGame }) {

	const [selectedRoomId, setSelectedRoomId] = useState(currentRoom ? currentRoom.id : null);
	const [isCreatingRoom, setIsCreatingRoom] = useState(false);

	const handleCreateRoom = (roomName, roomDescription) => {
		createRoom(roomName, roomDescription);
		setIsCreatingRoom(false);
	}

	const handleSetSelectedRoomId = (roomId) => {
		if (currentRoom === null) {
			setSelectedRoomId(roomId);
			console.log('selected room id', roomId);
		}
	}

	return (
		<LobbyContainer>
			<Header>
				<h1>Join a Room</h1>
				<JoinButton onClick={() => setIsCreatingRoom(true)}>or create one</JoinButton>
			</Header>
			<RoomCardsContainer>
				{availableRooms.map((room) => (
					<Room
						key={room.id}
						userId={userId}
						room={room}
						onClick={handleSetSelectedRoomId}
						isOpen={selectedRoomId === room.id}
						joinRoom={joinRoom}
						leaveRoom={leaveRoom}
						startGame={startGame}
					/>
				))}
			</RoomCardsContainer>
			{isCreatingRoom && (
				<NewRoomDialog
					userId={userId}
					onClose={() => setIsCreatingRoom(false)}
					onCreate={handleCreateRoom}
				/>
			)}
		</LobbyContainer>
	);
}

export default Lobby;
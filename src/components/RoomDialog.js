import styled from 'styled-components';
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

const DialogContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`;

const DialogBackdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #00000025;
`;

const Dialog = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: var(--background-2);
	color: var(--text-2);
	border-radius: 4px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 50%;
	max-width: 800px;
	height: 100%;
	max-height: 600px;
	gap: 8px;

	>* {
		width: 100%;
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		h2 {
			margin: 0;
		}

		.icon {
			cursor: pointer;
			padding: 4px;
			border-radius: 4px;
			cursor: pointer;
			position: relative;
			width: 32px;
			height: 32px;

			&:hover {
				background-color: var(--background-3);
			}

			sl-icon {
				width: 100%;
				height: 100%;
			}
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 100%;
		max-height: 100%;
		overflow-y: auto;
		gap: 8px;
	}

	.footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 16px;
		
		button {
			width: 100%;
			max-width: 200px;
			padding: 8px;
			border-radius: 4px;
			border: none;
			background-color: var(--accent-1);
			color: var(--text-2);
			font-size: 1rem;
			cursor: pointer;

			&:hover {
				background-color: var(--accent-2);
			}

			&.danger {
				background-color: var(--danger-1);
				&:hover {
					background-color: var(--danger-2);
				}
			}
		}
	}
`;

const Player = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	justify-self: flex-start;
	width: 100%;
	padding: 2px 16px;
	border-radius: 4px;
	background-color: var(--background-3);

	&.self {
		background-color: var(--accent-1);
	}
`;


function RoomDialog({ userId, room, startGame, joinRoom, leaveRoom, onClose }) {

	const playerIsInRoom = userId !== undefined && room.players.find(player => player.id === userId);
	const canStartGame = room.players.length >= 2 && room.players.length <= room.max_players && playerIsInRoom && room.owner.id === userId;

	const handleClose = (event) => {
		if (!playerIsInRoom) {
			onClose();
		}
	}

	return (
		<DialogContainer>
			<DialogBackdrop onClick={handleClose} />
			<Dialog>
				<div className="header">
					<h2>{room.name}</h2>
					{!playerIsInRoom && (
						<div className="icon">
							<SlIcon name="x" onClick={onClose} />
						</div>
					)}
					{room.active && (
						'GAME IS ACTIVE, YOU SHOULD NOT SEE THIS'
					)}
				</div>
				<div className="body">
					<p>{room.description}</p>
					{room.players.map((player) => (
						<Player
							key={player.id}
							className={player.id === userId ? "self" : ""}
						>
							<p>{player.name}</p>
							{player.id === room.owner.id ? (
								<SlIcon name="heart-fill" />
							) : ''}
						</Player>
					))}
				</div>
				<div className="footer">
					{playerIsInRoom ? (
						<>
							<button
								className="danger"
								onClick={() => leaveRoom(room)}
							>
								Leave Room
							</button>
							{canStartGame && (
								<button onClick={() => startGame(room)}>
									Start Game
								</button>
							)}
						</>
					) : room.active ? (
							<>
								<p>Game in progress</p>
							</>
					) : (
						<>
							<button onClick={() => joinRoom(room)}>
								Join Room
							</button>
						</>
					)}
				</div>
			</Dialog>
		</DialogContainer>
	);
}

export default RoomDialog;
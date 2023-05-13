import styled from 'styled-components';
import { useState } from 'react';
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

const DialogContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	max-width: none!important;
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
	gap: 16px;

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
		gap: 16px;

		label {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			font-size: 1rem;
			color: var(--text-3);
		}

		input, textarea {
			width: 100%;
			padding: 8px;
			border-radius: 4px;
			border: none;
			background-color: var(--background-3);
			color: var(--text-2);
			font-size: 1rem;
			resize: none;

			&:focus {
				outline: none;
				background-color: var(--background-4);
			}
		}

		textarea {
			height: 150px;
		}
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

			&.neutral {
				background-color: var(--background-3);
				&:hover {
					background-color: var(--background-4);
				}
			}

			&:disabled {
				background-color: var(--background-3);
				color: var(--text-3);
				cursor: not-allowed;
			}
		}
	}
`;


function NewRoomDialog({ userId, onClose, onCreate }) {

	const [roomName, setRoomName] = useState('');
	const [roomDescription, setRoomDescription] = useState('');

	const canCreate = roomName.length > 0 && roomDescription.length > 0;

	return (
		<DialogContainer>
			<Dialog>
				<div className="header">
					<h2>New Room</h2>
					<div className="icon">
						<SlIcon name="x" onClick={onClose} />
					</div>
				</div>
				<div className="body">
					<label htmlFor="room-name">Room Name</label>
					<input type="text" id="room-name" onChange={e => setRoomName(e.target.value)} />
					<label htmlFor="room-description">Room Description</label>
					<textarea id="room-description" onChange={e => setRoomDescription(e.target.value)} />
				</div>
				<div className="footer">
					<button disabled={!canCreate} onClick={() => {
						if (canCreate) {
							onCreate(roomName, roomDescription);
						}
					}}>Create</button>
					<button className="neutral" onClick={onClose}>Cancel</button>
				</div>

			</Dialog>
		</DialogContainer>
	);
}

export default NewRoomDialog;
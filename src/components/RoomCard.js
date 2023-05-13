import styled from 'styled-components';


const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 1rem;
	border-radius: 4px;
	background-color: var(--background-2);
	color: var(--text-2);
	cursor: pointer;
	width: 33%;

	&:hover {
		background-color: var(--background-3);
	}

	@media (max-width: 800px) {
		width: 50%;
	}

	@media (max-width: 600px) {
		width: 100%;
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;

function RoomCard({ room, onClick }) {

	return (
		<StyledCard onClick={() => onClick(room.id)}>
			<div className="header">
				<h2>{room.name}</h2>
			</div>
			<div className="footer">
				<p>{room.players.length} / {room.max_players}</p>
			</div>
		</StyledCard>
	)
}

export default RoomCard;
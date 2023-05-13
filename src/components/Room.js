import styled from 'styled-components';

import RoomDialog from './RoomDialog';
import RoomCard from './RoomCard';

function Room({ userId, room, onClick, isOpen, joinRoom, leaveRoom, startGame }) {

	return (
		<>
			<RoomCard room={room} onClick={() => onClick(room.id)} />
			{isOpen && (
				<RoomDialog userId={userId} room={room} startGame={startGame} joinRoom={joinRoom} leaveRoom={leaveRoom} onClose={() => onClick(null)} />
			)}
		</>
	)
}

export default Room;
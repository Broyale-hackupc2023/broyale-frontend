import styled from "styled-components";
import ContextContainer from "../components/ContextContainer";
import InputContainer from "../components/InputContainer";

const GameContainer = styled.div`
	display:flex;
	flex-flow:column nowrap;
`;

function Game({ userId, arrMessages, canSendInput, sendInput }) {
	// arrMessages = [
	// 	{
	// 		"type": "user / assistant",
	// 		"user": { 
	// 			"id": "1",
	// 			"name": "Player 1",
	//		},
	// 		"text": "Hello World!",
	// 	},


	return (
		<GameContainer >
			<ContextContainer userId={userId} arrMessages={arrMessages} ></ContextContainer>
			<InputContainer canSendInput={canSendInput} sendInput={sendInput}></InputContainer>
		</GameContainer>
	);
}

export default Game;

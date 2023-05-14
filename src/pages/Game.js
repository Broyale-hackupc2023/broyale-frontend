import styled from "styled-components";
import ContextContainer from "../components/ContextContainer";
import InputContainer from "../components/InputContainer";

const GameContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 1rem 1rem;
	gap: 16px;
	height: 100vh;

	> * {
		max-width: 800px;
		margin: 0 12px;
		width: 100%;
	}
`;

function Game({ userId, arrMessages, canSendInput, sendInput }) {
	// arrMessages = [
	// 	{
	// 		"type": "user / assistant",
	// 		"text": "Hello World!",
	
	// 	    ( if type === "user" ):
	// 		"user": { 
	// 			"id": "1",
	// 			"name": "Player 1",
	// 		},
	//      "roll": "1d20",
	// 	},


	return (
		<GameContainer >
			<ContextContainer userId={userId} arrMessages={arrMessages} ></ContextContainer>
			<InputContainer canSendInput={canSendInput} sendInput={sendInput}></InputContainer>
		</GameContainer>
	);
}

export default Game;

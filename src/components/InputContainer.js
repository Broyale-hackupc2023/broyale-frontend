import styled from "styled-components";
import React, { useState } from 'react';
import SuggestionButton from './SuggestionButton';
import TextInputBar from './TextInputBar';


const StyledInputContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	max-width: 800px;
	overflow: hidden;
	background-color: #282c34;
	color: #ccc;
	gap: 8px;
`;

const SuggestionContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	max-width: 100%;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
`;


function InputContainer(suggestions, sendInput) {
	const [input, setInput] = useState('');

	const handleSuggestionClick = (suggestion) => {
		sendInput(suggestion);
	}

	return (
		<StyledInputContainer className="InputContainer">
			<SuggestionContainer>
				{/* {suggestions.map((suggestion, index) => (
					<SuggestionButton
						key={index}
						sendInput={sendInput}
					/>
				))} */}
			</SuggestionContainer>
			
			<TextInputBar
				input={input}
				setInput={setInput}
				sendInput={sendInput}
			/>
		</StyledInputContainer>
	);
}

export default InputContainer;

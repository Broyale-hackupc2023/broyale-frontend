import styled from "styled-components";

const StyledButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #454c5a;
	border-radius: 4px;
	cursor: pointer;
	padding: 8px 12px;
	border-radius: 4px;

	&:hover {
		background-color: #626c80;
	}
`;



function SuggestionButton({ text, sendInput }) {

	const handleClick = () => {
		sendInput(text);
	}

	return (
		<StyledButton onClick={handleClick}>
			{text}
		</StyledButton>
	);
}

export default SuggestionButton;
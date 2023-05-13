import styled from "styled-components";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

const InputBar = styled.div`
	display: flex;
	flex-direction: row nowrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	max-width: 100%;
	overflow: hidden;
	background-color: #454c5a;
	color: #ccc;
	gap: 8px;
	border-radius: 4px;
	min-height: 40px;
	padding: 0 8px;
`;

const StyledInput = styled.input`
	background-color: transparent;
	outline: none;
	border: none;
	height: 100%;
	width: 100%;
	color: #ccc;

	&:focus {
		outline: none;
	}
`;

function TextInputBar({ input, setInput, sendInput }) {


	return (
		<>
			<InputBar>
				<StyledInput
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							sendInput(input);
							setInput("");
						}
					}}
				/>

				<SlIcon name="send" />
			</InputBar>
		</>
	);
}

export default TextInputBar;

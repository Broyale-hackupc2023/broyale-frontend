import styled from "styled-components";
import Message from "./Message";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	max-width: 800px;
	height: 100%;
	max-height: 100%;
	overflow: hidden;
	background-color: #282c34;
	color: #ccc;
	padding: 2rem 0;
	gap: 1rem;
`;

const ContextText = styled.div`
`;


function ContextContainer({arrMessages, userId}) {
	return (
		<Container>
			{arrMessages.map((message, index) => {
				if (message.type === 'user') {
					return (
						<Message key={index} message={message.text} author={message.user} className={message.user.id === userId ? 'self' : ''}>
							{message.text}
						</Message>
					);
				}
				return (
					<ContextText key={index}>
						{message.text}
					</ContextText>
				);
			})}
		</Container>
	);
}

export default ContextContainer;

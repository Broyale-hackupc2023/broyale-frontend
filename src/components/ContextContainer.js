import styled from "styled-components";
import Message from "./Message";

import React from "react";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
	max-width: 800px;
	height: 100%;
	max-height: 100%;
	overflow: auto;
	padding: 2rem 0;
	gap: 1rem;
`;

const ContextText = styled.div`
	// background-color:var(--background-2);
	text-align: start;
`;


function ContextContainer({arrMessages, userId}) {
	return (
		<Container>
			{arrMessages.map((message, index) => {
				if (message.type === 'user') {
					return (
						<Message
							key={index}
							userId={userId}
							message={message}
						/>
					);
				}
				return (
					<ContextText key={index}>
						{/* change break lines to <br /> */}
						{message.text.split('\n').map((text, index) => {
							return (
								<React.Fragment key={index}>
									{text}
									<br />
								</React.Fragment>
							);
						})}
					</ContextText>
				);
			})}
		</Container>
	);
}

export default ContextContainer;

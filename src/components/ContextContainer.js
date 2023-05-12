import styled from "styled-components";

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


function ContextContainer() {
	return (
		<Container>
			<h1>Context Container</h1>
		</Container>
	);
}

export default ContextContainer;

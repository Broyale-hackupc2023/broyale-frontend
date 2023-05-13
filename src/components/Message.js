import styled from "styled-components";

const MessageDiv = styled.div`
	display: flex;
    flex-flow: column nowrap;
    background-color:var(--background-2);
    // justify-content: start;
    padding:1rem;
`;

function Message({user, message}){
    <MessageDiv>
        <p><strong>{user.name}</strong></p>
        <p>{message}</p>
    </MessageDiv>

}

export default Message;
import styled from "styled-components";

const MessageDiv = styled.div`
    display:flex;
    flex-flow: column nowrap;
    
`;


function Message({message, author}){
    return (
        <MessageDiv>
            <p><strong><i>{author}</i></strong></p>
            <p>{message}</p>
        </MessageDiv>
    )
}


export default Message;
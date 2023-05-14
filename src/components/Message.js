import styled from "styled-components";

import { SlIcon } from "@shoelace-style/shoelace/dist/react";

const MessageDiv = styled.div`
    display:flex;
    width:100%;
    flex-flow: column nowrap;
    justify-content:flex-start;
    align-items:flex-start;
    background-color:var(--background-2);
    padding: 4px 8px;
    border-radius: 4px;    
`;
const HeadingMessageDiv = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content:flex-start;
    align-items:center;
    gap: 1rem;
    padding: 4px 0;
`;

const Username = styled.span`
    font-weight:bold;
`;

const RollTag = styled.div`
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    gap:0.5rem;
    padding: 2px 4px;
    background-color:var(--accent-2);
    border-radius: 4px;
`;



function Message({key, userId, message}){
    return (
        <MessageDiv key={key}>
            <HeadingMessageDiv>
                <Username>{message.user.name}</Username>
                <RollTag>
                    <span>{message.roll}</span>
                    <SlIcon name="dice-5"></SlIcon>
                </RollTag>
            </HeadingMessageDiv>
            <p>{message.text}</p>
        </MessageDiv>
    )
}


export default Message;
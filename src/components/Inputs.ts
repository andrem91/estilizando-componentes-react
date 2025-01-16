import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg)scale(1);
    }
    to {
        transform: rotate(360deg)scale(3);
    }
`;


export const Input = styled.input`
    padding: 10px 30px;
    outline: none;
    transition: all .6s;
    border: 1px solid transparent;
    background-color: ${props => props.theme.primary};
    animation: ${rotate} 2s alternate-reverse;

    &:focus {
        border-color: red;
    }

    &:hover {
        background-color: green;
    }
`;
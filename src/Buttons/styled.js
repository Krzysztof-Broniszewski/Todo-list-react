import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    background: transparent;
    color: hsl(180, 100%, 25%);
    border: none;
    padding: 15px;

    &:hover {
        color: hsl(180, 100%, 30%);
        transform: scale(115%);
        transition-duration: .5s;
    }

    &:disabled {
        color: #ccc;
        transform: none;
    }
`;

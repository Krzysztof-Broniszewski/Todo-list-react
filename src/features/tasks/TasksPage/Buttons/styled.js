import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    background: transparent;
    color: ${({theme}) => theme.color.teal};
    border: none;
    padding: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMid}px) {
        display: grid;
        grid-template-columns: auto;
    }

    &:hover {
        filter: brightness(110%);
        transform: scale(115%);
        transition-duration: .5s;
    }

    &:active {
        filter: brightness(130%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.gallery};
        filter: none;
        transform: none;
    }
`;

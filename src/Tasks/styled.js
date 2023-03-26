import styled, { css } from "styled-components";

export const List = styled.ul`
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
    `}  
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 10px;
`;

export const DoneButton = styled(Button)`
    background: ${({ theme }) => theme.color.forestGreen};

    &:hover {
        filter: brightness(120%);
        transform: scale(120%);
        transition-duration: .5s;
    }

    &:active {
        filter: brightness(140%);
        transition-duration: 0s;
    }
`;

export const RemoveButton = styled(Button)`
    background: ${({ theme }) => theme.color.crimson};

    &:hover {
        filter: brightness(120%);
        transform: scale(120%);
        transition-duration: .5s;
    }

    &:active {
        filter: brightness(140%);
        transition-duration: 0s;
    }
`;


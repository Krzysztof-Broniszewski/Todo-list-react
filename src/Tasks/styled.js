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

    
`


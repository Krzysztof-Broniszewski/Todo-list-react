import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({theme}) => theme.color.white};
    display: grid;
    grid-template-rows: 1fr auto;
    margin: 10px 0;
`;

export const StyledSectionContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    box-shadow: 0 0 5px ${({theme}) => theme.color.alto};
    padding: 20px;
    margin: 1px;
`;

export const StyledSectionTitle = styled.section`
    padding: 0;
    margin: 0;
    font-weight: bold;
    font-size: 20px;
`;
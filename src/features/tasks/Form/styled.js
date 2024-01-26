import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const FormButton = styled.button`
    cursor: pointer;
    background-color: ${({theme}) => theme.color.teal};
    border: none;
    color: white;
    padding: 10px;
    flex-wrap: nowrap;
    border: none;

    &:hover {
        filter: brightness(110%);
        transform: scale(115%);
        transition-duration: .5s;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        transform: scale(105%);
    }
    }

    &:active {
        filter: brightness(120%);
    }

`;
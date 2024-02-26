import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
  margin-right: 20px;
  width: 1fr;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.alto};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const FormButton = styled.button`
    cursor: pointer;
    min-width: 140px;
    background-color: ${({theme}) => theme.color.teal};
    border: none;
    color: white;
    padding: 10px;
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
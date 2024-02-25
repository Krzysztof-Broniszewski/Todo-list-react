import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.alto};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    margin-right: 10;
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  min-width: 140px;
  background-color: ${({ theme }) => theme.color.teal};
  border: none;
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  flex-wrap: nowrap;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: row;
    margin-right: 0;
  }

  &:hover {
    filter: brightness(110%);
    transform: scale(115%);
    transition-duration: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      transform: scale(105%);
    }
  }

  &:active {
    filter: brightness(120%);
  }
`;

import styled from "styled-components";

export const StyledInput = styled.input`
  margin-right: 20px;
  width: 1fr;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const SearchButton = styled.button`
  cursor: pointer;
  min-width: 140px;
  background-color: ${({ theme }) => theme.color.teal};
  border: none;
  color: white;
  padding: 10px;
  flex-wrap: nowrap;
  border: none;

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

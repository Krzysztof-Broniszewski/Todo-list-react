import styled from "styled-components";
import { NavLink }  from "react-router-dom";

export const StyledNav = styled.nav`
  background: transparent;
`;

export const StyledUl = styled.ul`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0;
`;

export const StyledLiItem = styled.li`
  list-style: none;
  margin: 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: scale(115%);
    transition-duration: 0.5s;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 300;

  &:hover {
    font-weight: 700;
  }

  &:active {
    font-weight: 700;
  }
  `

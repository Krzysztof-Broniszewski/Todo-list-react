import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

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

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  color: ${({theme}) => theme.color.white};
  font-weight: 300;

  &:hover {
    font-weight: 700;
  }

  &.${activeClassName} {
    font-weight: 700;
    border-bottom : 1px solid; 
  }
`;

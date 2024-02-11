import { StyledLiItem, StyledNav, StyledNavLink, StyledUl } from "./styled";


const Navigation = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLiItem>
          <StyledNavLink activeClassName="active" to="/zadania">
            Zadania
          </StyledNavLink>
        </StyledLiItem>
        <StyledLiItem>
          <StyledNavLink activeClassName="active" to="/author">
            O autorze
          </StyledNavLink>
        </StyledLiItem>
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;

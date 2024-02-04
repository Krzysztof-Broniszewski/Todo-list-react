import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import { StyledNav, StyledUl, StyledLiItem} from "./styled";

// eslint-disable-next-line
export default () => (
  <HashRouter>
    <StyledNav>
      <StyledUl>
        <StyledLiItem>
          <Link to="/zadania">Zadania</Link>
        </StyledLiItem>
        <StyledLiItem>
          <Link to="/author">O autorze</Link>
        </StyledLiItem>
      </StyledUl>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/">
          <div>
            Nie znaleziono strony !
          </div>
        </Route>
      </Switch>
    </StyledNav>
  </HashRouter>
);
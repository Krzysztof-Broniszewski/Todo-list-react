import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/Author";
import { StyledNav, StyledUl, StyledLiItem, StyledNavLink } from "./styled";
import TaskPage from "./features/tasks/TaskPage";

// eslint-disable-next-line
export default () => (
  <Router>
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
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </StyledNav>
  </Router>
);

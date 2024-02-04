import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import { StyledNav, StyledUl, StyledLiItem } from "./styled";
import TaskPage from "./features/tasks/TaskPage";

// eslint-disable-next-line
export default () => (
  <HashRouter>
    <StyledNav>
      <StyledUl>
        <StyledLiItem>
          <NavLink activeClassName="active" to="/zadania">
            Zadania
          </NavLink>
        </StyledLiItem>
        <StyledLiItem>
          <NavLink activeClassName="active" to="/author">
            O autorze
          </NavLink>
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
  </HashRouter>
);

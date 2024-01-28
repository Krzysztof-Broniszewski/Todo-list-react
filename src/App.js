import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

// eslint-disable-next-line
export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/author">O autorze</Link>
        </li>
      </ul>
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
    </nav>
  </HashRouter>
);
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/TasksPage";
import AuthorPage from "./features/AuthorPage";
import Navigation from "./common/Navigation";
import TaskPage from "./features/tasks/TaskPage";
import { toAuthor, toTask, toTasks } from "./routes";

// eslint-disable-next-line
export default () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </Router>
 );
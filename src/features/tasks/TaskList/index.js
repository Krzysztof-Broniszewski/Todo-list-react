import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { theme } from "../../../theme";
import {
  selectTasks,
  selectHideDone,
  toggleTaskDone,
  removeTask,
} from "../taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button
            toggleDone
            theme={theme}
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button
            remove
            theme={theme}
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;

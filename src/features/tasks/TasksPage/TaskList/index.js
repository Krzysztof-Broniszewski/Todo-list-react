import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../taskSlice";
import { Link } from "react-router-dom";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../../queryParameters";

const TaskList = () => {
  const query = useQueryParameter("query") || "";
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  if (!tasks) {
    return [];
  }

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={toTask({ id: task.id })}>{task.content}</Link>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;

import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { theme } from "../../../theme";
import { selectTasks, toggleTaskDone } from "../taskSlice";

const TaskList = ({ removeTask }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        theme={theme}
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        remove
                        theme={theme}
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;
import { List, Item, Content, Button } from "./styled";
import { theme } from "../../../theme";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
                >
                <Button
                    toggleDone
                    theme={theme}
                    onClick={() => toggleTaskDone(task.id)}
                    >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done ={task.done}>
                    {task.content}
                </Content>
                <Button
                    remove
                    theme={theme}
                    onClick={ () => removeTask(task.id)}
                    >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default TaskList;
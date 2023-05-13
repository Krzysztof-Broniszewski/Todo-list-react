import { List, Item, Content, Button } from "./styled";
import { theme } from "../theme";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
                >
                <Button
                    theme={theme}
                    onClick={() => toggleTaskDone(task.id)}
                    >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done ={task.done}>
                    {task.content}
                </Content>
                <Button
                    theme={theme}
                    onClick={ () => removeTask(task.id)}
                    >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;
import { List, Item, Content, Button, DoneButton, RemoveButton } from "./styled";
import { theme } from "../theme";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
                >
                <DoneButton
                    theme={theme}
                    onClick={() => toggleTaskDone(task.id)}
                    >
                    {task.done ? "✔" : ""}
                </DoneButton>
                <Content done ={task.done}>
                    {task.content}
                </Content>
                <RemoveButton
                    theme={theme}
                    onClick={ () => removeTask(task.id)}
                    >
                    🗑
                </RemoveButton>
            </Item>
        ))}
    </List>
);

export default Tasks;
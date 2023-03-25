import "./style.css";
import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
                >
                <Button
                    onClick={() => toggleTaskDone(task.id)}
                    className="
                    tasks__button
                    tasks__button--toggleDone
                    ">
                    {task.done ? "✔" : ""}
                </Button>
                <Content done ={task.done}>
                    {task.content}
                </Content>
                <Button
                    onClick={ () => removeTask(task.id)}
                    className="
                    tasks__button
                    tasks__button--remove
                    ">
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;
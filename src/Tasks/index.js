import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li>
                {task.content}
                {/* // className={`tasks__item ${props.task.done && props.hideDoneTasks ? "tasks__item--done":""}`}>
                // <button className="tasks__button tasks__button--toggleDone">
                //         {props.task.done ? "✔" : ""}
                //     </button>
                // <span className={`tasks__content 
                // ${props.task.done ? "tasks__content--done" : ""}`}>
                //         {props.task.content}
                //     </span >
                //     <button className="
                //         tasks__button
                //         tasks__button--remove">
                //         🗑
                //     </button> */}
            </li>
        ))}
    </ul>
);

export default Tasks;
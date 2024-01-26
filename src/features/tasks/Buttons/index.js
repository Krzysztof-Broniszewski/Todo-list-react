import { useSelector, useDispatch } from "react-redux";
import { Button } from "./styled"
import { theme } from "../../../theme";
import { selectTasks, toggleHideDone } from "../taskSlice";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <div>
            {tasks.length > 0 && (
                <>
                    <Button
                        theme={theme}
                        onClick={() => dispatch(toggleHideDone())}
                        >
                        {hideDone ? "Pokaż " : "Ukryj "}
                        ukończone
                    </Button>
                    <Button
                        theme={theme}
                        onClick={setAllDone}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </div>
    )    
};

export default Buttons;
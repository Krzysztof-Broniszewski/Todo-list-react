import { Button } from "./styled"
import { theme } from "../theme";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <div>
        {tasks.length > 0 && (
            <>
                <Button
                    theme={theme}
                    onClick={toggleHideDone}
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
);

export default Buttons;
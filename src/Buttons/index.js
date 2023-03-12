import { Button } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <div>
        {tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
                    className="buttons__button"
                    >
                    {hideDone ? "Pokaż " : "Ukryj "}
                    ukończone
                </Button>
                <Button
                    onClick={setAllDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </div>
);

export default Buttons;
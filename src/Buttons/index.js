const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button
                className="section__taskButton section__buttonHideDone">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="section__taskButton section__buttonDoneAll"
                disabled={tasks.every(({ done }) => done)}
                >
                Ukończ wszystkie
            </button>
        </div>
    );
};

export default Buttons;
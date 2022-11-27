const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button
                className="section__taskButton section__buttonHideDone">
                {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="section__taskButton section__buttonDoneAll">
                Ukończ wszystkie
            </button>
        </div>
    );
};

export default Buttons;
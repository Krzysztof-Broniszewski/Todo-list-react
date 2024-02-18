import { useSelector, useDispatch } from "react-redux";
import { Button } from "./styled";
import { theme } from "../../../../theme";
import {
  toggleHideDone,
  selectHideDone,
  setAllDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
} from "../../taskSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();
  return (
    <div>
      {!areTasksEmpty && (
        <>
          <Button theme={theme} onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż " : "Ukryj "}
            ukończone
          </Button>
          <Button
            theme={theme}
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </div>
  );
};

export default Buttons;

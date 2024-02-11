import { useDispatch } from "react-redux";
import { theme } from "../../theme";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { Button } from "./Buttons/styled";
import { fetchExampleTasks } from "./taskSlice";
import InputSearch from "./Search";

function TasksPage() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button theme={theme} onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
          </Button>
        }
      />
      <Section
        title="Wyszukiwarka"
        body={<InputSearch />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;

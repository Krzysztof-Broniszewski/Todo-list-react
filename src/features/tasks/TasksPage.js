import { useDispatch } from "react-redux";
import { theme } from "../../theme";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { Button } from "./Buttons/styled";
import { StyledInput } from "./Search/styled";
import { fetchExampleTasks } from "./taskSlice";
import { SearchButton } from "./Search/styled";

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
        body={
          <>
            <StyledInput placeholder="Wyszukaj"></StyledInput>
            <SearchButton theme={theme}>Szukaj</SearchButton>
          </>
        }
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

import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <main class="container">
      <header class="header">
        <h1>Lista zadań</h1>
      </header>
      <section class="section">
        <div class="section__container">
          <h2 class="section__header">Dodaj nowe zadanie</h2>
        </div>
        <div class="section__container">
          <form class="form js-form">
            <input class="form__input js-newTask" placeholder="Co jest do zrobienia?"/>
              <button class="form__button js-button">Dodaj zadanie</button>
          </form>
        </div>
      </section>
      <section class="section">
        <div class="section__container section__containerTasks">
          <h2 class="section__header">Lista zadań</h2>
          <button class="section__taskButton section__buttonHideDone js-hide">Ukryj ukończone</button>
          <button class="section__taskButton section__buttonDoneAll js-finish">Ukończ wszystkie</button>
        </div>
        <div class="section__container">
          <ul class="tasks js-tasks">
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;

import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons"; 

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
          <Form />
        </div>
      </section>
      <section class="section">
        <div class="section__container section__containerTasks">
          <h2 class="section__header">Lista zadań</h2>
          <Buttons tasks={tasks}/>
        </div>
        <div class="section__container">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
      </section>
    </main>
  );
}

export default App;

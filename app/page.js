import TaskList from "./components/TaskList";
import TaskFormActions from "./components/Form/FormActions";

export default function Home() {
  return (
    <section>
      <TaskList />
      <TaskFormActions />
    </section>
  );
}


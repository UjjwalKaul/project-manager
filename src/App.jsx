import NewProject from "./components/NewProject";
import NoProjectAdded from "./components/NoProjectAdded";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectAdded />
      {/* <NewProject /> */}
    </main>
  );
}

export default App;

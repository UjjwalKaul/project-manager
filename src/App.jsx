import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectAdded from "./components/NoProjectAdded";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleAddProject() {
    setProjectsState((prevState) => { return { ...prevState, selectedProjectId: null } })
  }

  let content
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  }
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectAdded onStartAdd={handleAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAdd={handleAddProject} />
      {content}
    </main>
  );
}

export default App;

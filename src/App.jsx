import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectAdded from "./components/NoProjectAdded";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleCancelAdd() {
    setProjectsState((prevState) => { return { ...prevState, selectedProjectId: undefined } })
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => { return { ...prevState, selectedProjectId: null } })
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return { ...prevState, selectedProjectId: undefined, projects: [...prevState.projects, newProject] }
    })
  }



  let content
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAdd} />
  }
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectAdded onStartAdd={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projects={projectsState.projects} onStartAdd={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;

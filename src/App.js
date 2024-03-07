import { useState } from "react";
import "./App.css";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjextSelected";
import ProjectSideBar from "./component/ProjectSideBar";
import SelectProject from "./component/SelectProject";

function App() {
  const [projectsState, SetProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    SetProjectsState((prevState) => {
      const TaskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: TaskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancleAddProject() {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddProject(projectData) {
    SetProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  const selectProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectProject
      project={selectProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeletTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancleAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onstartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen  flex gap-8">
        <ProjectSideBar
          onstartAddProject={handleStartAddProject}
          onSelectProject={handleSelectProject}
          projects={projectsState.projects}
        />
        {content}
      </main>
    </>
  );
}

export default App;

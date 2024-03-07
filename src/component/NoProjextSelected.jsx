import projectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({onstartAddProject}) {
  return (
    <>
      <div className="mt-24 text-center w-2/3">
        <img src={projectImage} alt="empty task list"  className="w-16 h-16  object-contain mx-auto"/>
        <h2 className="text-xl text-stone-500 font-bold my-4">No Project selected</h2>

        <p className=" text-stone-400 mb-4">Select a project or get started with a new one</p>
        <p className="mt-8">
          <Button onClick={onstartAddProject}>Create new project</Button>
        </p>
      </div>
    </>
  );
}

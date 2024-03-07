import { useRef } from "react";
import Model from "./Model";
import Input from "./Input";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enterTitle = title.current.value;
    const enterDescription = description.current.value;
    const enterdueDate = dueDate.current.value;

    if (
      enterTitle.trim() === "" ||
      enterDescription.trim === "" ||
      enterdueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enterTitle,
      description: enterDescription,
      dueDate: enterdueDate,
    });
  }

  return (
    <>
      <Model ref={modal} buttonCaps="Okay">
        <h2 className="text-xl text-stone-500 font-bold my-4">Invalid Input</h2>
        <p className=" text-stone-400 mb-4">Ooops ... Looks like you forgot to enter a value</p>
        <p className=" text-stone-400 mb-4">Please Enter the valid input</p>
      </Model>
      <div className=" w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-slate-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" lable="Title" ref={title} />
          <Input lable="Description" textarea="textarea" ref={description} />
          <Input type="date" lable="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}

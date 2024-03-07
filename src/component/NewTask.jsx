import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleTaskValue(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleTaskValue}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        ADD TASK
      </button>
    </div>
  );
}

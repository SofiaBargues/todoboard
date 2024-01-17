import { useState } from "react";

export const Input = ({
  taskList,
  setTaskList,
}: {
  taskList: any;
  setTaskList: any;
}) => {
  const [input, setInput] = useState("");

  const hanleAddTask = (e: any) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg py-1.5 px-2.5 text-lg  "
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="font-semibold bg-violet-400 text-white px-2 py-3.5 rounded-lg hover:opacity-70"
          onClick={hanleAddTask}
        >
          Add
        </button>
      </form>
    </>
  );
};

import { useState } from "react";

export const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");
  const hanleAddTask = (e: any) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };
  return (
    <>
      <form>
        <input
          className="border rounded px-2 "
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={hanleAddTask}>Add</button>
      </form>
    </>
  );
};

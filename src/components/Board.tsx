const Board = ({
  task,
  index,
  taskList,
  setTaskList,
}: {
  task: any;
  index: any;
  taskList: any;
  setTaskList: any;
}) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTask: any) =>
      currentTask.filter((todo) => index === removeIndex)
    );
  };

  return (
    <>
      <div
        className="max-w-lg rounded-xl flex flex-col items-center justify-start 
       text-center border text-lg pt-3 pb-4 px-4"
      >
        <p>{task}</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-withe rounded-lg py-1 px-2k"
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Board;
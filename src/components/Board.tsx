const Board = ({
  task,
  handleOnClick,
}: {
  task: any;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <div
        className="max-w-lg rounded-xl flex flex-col items-center justify-between 
       text-center border text-lg pt-3 pb-4 px-4"
      >
        <p>{task}</p>
        <button onClick={handleOnClick} className="btn btn-primary">
          Delete
        </button>
      </div>
    </>
  );
};
export default Board;

const Board = ({
  task,
  handleOnClick,
}: {
  task: any;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{task}</h2>

          <div className="card-actions justify-end">
            <button onClick={handleOnClick} className="btn btn-primary">
              {" "}
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Board;

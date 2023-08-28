import { useState } from "react";

function Home() {
  const [Todo, setToDo] = useState([]);
  const [done, setDone] = useState([]);
  const [doing, setDoing] = useState([]);

  return (
    <>
      <div className="flex w-full mt-20 justify-center gap-20 pt-4 items-center px-6 ">
        <div className="flex flex-col border border-b-slate-100  py-4 rounded-lg w-1/2">
          <h1 className=" border-b px-8 pb-3">To Do</h1>
          {Todo.map((item, i) => {
            return (
              <div className="flex justify-between" key={i}>
                {item.task}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col border border-b-slate-100  py-4 rounded-lg w-1/2">
          <h1 className=" border-b px-8 pb-3">Doing</h1>
        </div>
        <div className="flex flex-col border border-b-slate-100  py-4 rounded-lg w-1/2">
          <h1 className=" border-b px-8 pb-3">Done</h1>
        </div>
      </div>
    </>
  );
}

export default Home;

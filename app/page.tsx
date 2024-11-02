"use client";
import { todo } from "node:test";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    { movie: "hum sth sth hsin", id: 1 },
    { movie: "catch me if you can", id: 2 },
  ]);

  const [inputVal, setInput] = useState("");
  const [id, setid] = useState(0);

  const addItem = () => {
    let obj: any = todos.find((item) => item.id == id);
    if (obj) {
      let newArray = todos.filter((item) => item.id !== obj.id);
      setTodos([...newArray, { movie: inputVal, id: id }]);
      setInput("");
      setid(0);
      return;
    }
    setTodos([...todos, { movie: inputVal, id: id }]);
    setInput("");
    setid(0);
  };
  const editItem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setInput(obj.movie);
    setid(obj.id);
  };

  const delItem = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id);
    setTodos([...newArray]);
  };
  return (
    <div>
      <div className="max-w-4x1  mx-auto  p-5">
        <h1 className=" underline text-center text-[40px] text-">TODO App</h1>
      </div>
      <div className="flex justify-between gap-4 max-w-lg mx-auto p-5 mt-5">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInput(e.target.value)}
          className="w-[80%] p-2 ml-3 text-lg border-b focus:outline-none  text-black "
          placeholder="What's on your mind today?"
        />
        <input
          type="number"
          value={id}
          onChange={(e: any) => setid(e.target.value)}
          className="w-[20%] p-2 ml-3 text-lg border-b focus:outline-none  text-center text-black"
          placeholder="Id"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 w-[20%] hover:bg-blue-400 text -black p-2 rounded "
        >
          +
        </button>
      </div>
      <div>
        <h1 className="max-w-4x1  mt-5 p-5 underline text-center text-[40px]">
          todo list
        </h1>
      </div>
      <div>
        <div className=" grid grid-cols-2 gap-5 mt-5">
          {todos.map((item: any, i: any) => {
            return (
              <div className="  shadow bg-bue-500 p-4" key={i}>
                <div className="flex justify-between">
                  <span className="shadow rounded-full h-8 w-8  text-center  my-auto bg-grey-900">
                    {i + 1}
                  </span>
                  <span
                    onClick={() => delItem(item.id)}
                    className="shadow cursor-pointer rounded-full h-8 w-8 bg-red-500 text-center  my-auto"
                  >
                    x
                  </span>
                </div>
                <div className="mt-5 text-[30px] text-grey-700">
                  {item.movie}
                </div>
                <div>
                  <h2
                    onClick={() => editItem(item.id)}
                    className="text-right cursor-pointer"
                  >
                    Edit
                  </h2>
                  <h2 className="text-gray-300">id:{item.id}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

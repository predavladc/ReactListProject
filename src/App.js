import React from "react";
import "./index.css";
import ToDoComponent from "./components/ToDo";

export default function App() 
{
  const tasklist = [
    {
        task: "Task 1",
        description: "Smile all day.",
        status: "new",
    },
    {
        task: "Task 2",
        description: "Make a nice coffee",
        status: "new",
    },
    {
        task: "Task 3",
        description: "Hug a tree.",
        status: "new",
    }
  ];

  return (
    <div className="row justify-content-md-center">
      <div className="col col-lg-6">
        <h1 className="title display-1">let's do this</h1>
        {tasklist.map((task, index) => {
          return (
            <ToDoComponent key={index} data={task} />
          )
        })}
      </div>
    </div>
  );
}
import React from "react";
import "./index.css";
import ToDoComponent from "./components/ToDo";

export default function App() {
  const tasklist = [
    {
        title: "Task 1",
        description: "Smile all day.",
        status: "new",
    },
    {
        title: "Task 2",
        description: "Make a nice coffee",
        status: "new",
    },
    {
        title: "Task 3",
        description: "Hug a tree.",
        status: "new",
    }
  ];

  return (
    <div className="App">
      {tasklist.map((task, index) => {
        return (
            <div className='listitems'>
              <ToDoComponent key={index} data={task} />
              <div className='buttons'>
                <button type="button" class="btn btn-primary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
              </div>
            </div>
            )
          }
        )
      }

      {/* <ToDoComponent data={tasklist[0]} />
      <ToDoComponent data={tasklist[1]} />
      <ToDoComponent data={tasklist[2]} /> */}
    </div>
  );
}
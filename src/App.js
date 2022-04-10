import React from "react";
import "./index.css";
import ToDoComponent from "./components/ToDo";
import { useState } from "react";
import UserInput from "./UserInput";


export default function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: "Task 1",
        description: "Smile all day.",
        status: "new",
    },
    {
        id: 2,
        title: "Task 2",
        description: "Make a nice coffee",
        status: "new",
    },
    {
        id: 3,
        title: "Task 3",
        description: "Hug a tree.",
        status: "new",
    }
  ])

  const [beingEdited, setIsBeingEdited] = useState(null);

  const handleUserInput = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
  });

  const handleAddNewTask = (event) => {
    console.log("print");
    event.preventDefault();
    // console.log("submitting the form");
    const newTask = {
      id: new Date().getTime(),
      title: userInput.title,
      description: userInput.description,
      status: "new",
    };
    setTasks([...tasks, newTask]);

    setUserInput({
      title: "",
      description: "",
      status: "new",
    });

    event.target.reset();
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  const handleEditTask = (id) => {
    setIsBeingEdited(id)
  }

  if (beingEdited) {
    return (
      <>
      <h1>EDITION MODE</h1>
      <input type="text" placeholder="title"></input>
      <input type="text" placeholder="description"></input>
      <button>Save</button>
      </>
    )
  }

  return (

    <div className="App">
    <UserInput onInput={handleUserInput} onNewTask={handleAddNewTask} />

      {tasks.map((task, index) => {
        return (
            <div className='listitems' key={index}>
              <ToDoComponent data={task} onDelete={handleDeleteTask} onEdit={handleEditTask}/>

            </div>
            )
          }
        )
      }
    </div>
  );
}
import React from "react";
import "./index.css";
import Title from "./components/Title";
import ToDoComponent from "./components/ToDo";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Checkbox from "./components/Checkbox";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Smile all day.",
      description:
        "Studies have shown that smiling releases endorphins, other natural painkillers, and serotonin. 9 Together, these brain chemicals make us feel good from head to toe. So close your eyes, relax your face and think of something that I make you really happy!",
      status: "new",
    },
    {
      id: 2,
      title: "Make a delicious coffee.",
      description:
        "Packed with antioxidants and vitamins such as riboflavin, magnesium, and potassium, coffee can help to lessen depression, promote a healthy heart, and reduce the risk of developing type 2 diabetes, Parkinson's disease, Alzheimer's disease, liver disease, and liver cancer. So grab that fancy cup and pour youself some fresh homemade french press coffee!",
      status: "new",
    },
    {
      id: 3,
      title: "Hug a tree.",
      description:
        "Hugging a tree increases levels of hormone oxytocin, which is responsible for feeling calm and emotional bonding. When hugging a tree, it makes you feel happier. So go into the woods, find a tree, take a deep breath and embrace this tree!",
      status: "new",
    },
  ]);

  const [beingEdited, setIsBeingEdited] = useState();

  // useState(null);

  const handleUserInput = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const handleBeingEdited = (event) => {
    setIsBeingEdited({ ...beingEdited, [event.target.name]: event.target.value });
  };

  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
  });

  //Add task function
  const handleAddNewTask = (event) => {
    event.preventDefault();
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
      //Do we need the status?
      status: "new",
    });

    event.target.reset();
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  

  const handleEditTask = (id) => {
    setIsBeingEdited({ ...tasks.find(task => task.id === id)});
  };

  const handleSaveEdit = () => {
    // .filter the tasks array with the id of the task being edited (to remove the old one) ✅
    const filteredTasks = tasks.filter(task => task.id !== beingEdited.id);
    // inject into the filtered tasks array ( === filteredTasks) the copy of the task that has been edited ( === beingEdited ) ✅
    filteredTasks.push(beingEdited)
    // set the tasks state with these modifications ✅
    setTasks(filteredTasks)
    // set the beingEdited state to undefined ==> Exit edition mode ✅
    setIsBeingEdited()
  }

  return (
    <div className="App container">
      <div className="row ">
        <div className="title">
          <Title />
        </div>
        {beingEdited ? (
          <>
            <div className="edition-mode container">
              <div className="row">
                <h1 className="edit-mode">EDITION MODE</h1>
                <form>
                  <input type="text" value={beingEdited.title} name="title" onChange={handleBeingEdited}></input>
                  <input type="text" value={beingEdited.description} name="description" onChange={handleBeingEdited}></input>
                  <button className="btn btn-saved" onClick={handleSaveEdit}>Save</button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            {tasks.sort((a,b) => a.id - b.id).map((task, index) => {
              return (
                <div className="listitems" key={index}>
                  <div className="col-6">
                    <Checkbox />
                    <ToDoComponent
                      data={task}
                      onDelete={handleDeleteTask}
                      onSubmit={handleAddNewTask}
                      onEdit={handleEditTask}
                    />
                  </div>
                </div>
              );
            })}
            <div className="addtolist">
              <UserInput
                onInput={handleUserInput}
                onNewTask={handleAddNewTask}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

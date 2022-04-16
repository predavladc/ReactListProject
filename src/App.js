import React, { useState } from "react";
import "./index.css";
import Title from "./components/Title";
import ToDoComponent from "./components/ToDo";
import UserInput from "./components/UserInput";
import Checkbox from "./components/Checkbox";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Smile all day.",
      description:
        "Studies have shown that smiling releases endorphins, other natural painkillers, and serotonin. 9 Together, these brain chemicals make us feel good from head to toe. So close your eyes, relax your face and think of something that I make you really happy!",
      level: "new",
      completed: false,
    },
    {
      id: 2,
      title: "Make a delicious coffee.",
      description:
        "Packed with antioxidants and vitamins such as riboflavin, magnesium, and potassium, coffee can help to lessen depression, promote a healthy heart, and reduce the risk of developing type 2 diabetes, Parkinson's disease, Alzheimer's disease, liver disease, and liver cancer. So grab that fancy cup and pour youself some fresh homemade french press coffee!",
      level: "new",
      completed: false,
    },
    {
      id: 3,
      title: "Hug a tree.",
      description:
        "Hugging a tree increases levels of hormone oxytocin, which is responsible for feeling calm and emotional bonding. When hugging a tree, it makes you feel happier. So go into the woods, find a tree, take a deep breath and embrace this tree!",
      level: "new",
      completed: false,
    },
  ]);

  const [beingEdited, setIsBeingEdited] = useState();
  const [checked, setChecked] = useState();

  // useState(null);

  const handleUserInput = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const handleBeingEdited = (event) => {
    setIsBeingEdited({ ...beingEdited, [event.target.name]: event.target.value });
  };

  const handleIsComplete = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.value });
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
      level: "new",
      completed: false,
    };
    setTasks([...tasks, newTask]);

    setUserInput({
      title: "",
      description: "",
      //Do we need the level?
      level: "new",
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

  // Checkbox Start
  
  // const handleCompleteTask = (id) => {
  //   setChecked({ ...tasks.find(task => task.id === id)});
  // };

  const handleComplete = (id, e) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
          return {
            ...task,
            completed: e.target.checked
          }
      } else {
        return task
      }
    }))
  };



  // const completeFunction = () => {    
  //   temporaryTodos(id).level = temporaryTodos.level("complete")
  //   setTasks(temporaryTodos);
  // }
  
  
  //   const updatedList = [...checked];
  //   if (event.target.checked) {
  //     updatedList = [...checked, event.target.value];
  //   } else {
  //     updatedList.splice(checked.indexOf(event.target.value), 1);
  //   }
  //   setChecked(updatedList);
  // };

  // const isChecked = (item) =>
  //  checked.includes(item) ? "checked-item" : "not-checked-item";
// Checkbox Ending

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
              <form className="edit-form">
                <div className="edit-title">
                <label for="FormControlTextarea1" class="form-label">Task:</label>
                <br />
                  <input type="text" value={beingEdited.title} name="title" onChange={handleBeingEdited}></input>
                </div>
                <div className="edit-description">
                  <label for="FormControlTextarea2" class="form-label">Description:</label>
                  <textarea 
                      class="form-control" 
                      id="FormControlTextarea2" 
                      rows="3"  
                      value={beingEdited.description} 
                      name="description" 
                      onChange={handleBeingEdited}>
                    </textarea>
                </div>
              </form>
              <div className="row button">
                <div className="col-1 ">
                  <button className="btn btn-saved" onClick={handleSaveEdit}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {tasks.sort((a,b) => a.id - b.id).map((task, index) => {
            return (
              <div className="listitems" key={index}>
                <div className="col-6">
                  <Checkbox onComplete={handleComplete} completed={task.completed} id={task.id}/>
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
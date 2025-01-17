import React, { useState } from "react";
import "./dragAndDrop.css";

// things we need to learn
// 1. for drag and drop we need to use onDrag, onDrop, onDragOver and draggable
// 2. onDrag and draggable is used on the component which we want to drag i.e child component
// 3. onDrag gives us the element we are dragging
// 4. onDrop and onDragOver is used on the parent component where we want to drop the child component
// 5. onDrop gives us the element where we are dropping the child component

const DragAndDrop = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [draggedTask, setDraggedTask] = useState(null);

  function onKeyPress(e) {
    if (e.key === "Enter" && inputTask) {
      setTasks([...tasks, { id: Date.now(), task: inputTask, status: "todo" }]);
      setInputTask("");
    }
  }

  function onDrop(e) {
    let taskCopy = tasks;
    if (e.target.getAttribute("data-status") === "todo") {
      taskCopy = tasks.map((task) => {
        if (task.id === draggedTask) {
          task.status = "todo";
        }
        return task;
      });
    }
    if (e.target.getAttribute("data-status") === "doing") {
      taskCopy = tasks.map((task) => {
        if (task.id === draggedTask) {
          task.status = "doing";
        }
        return task;
      });
    }
    if (e.target.getAttribute("data-status") === "done") {
      taskCopy = tasks.map((task) => {
        if (task.id === draggedTask) {
          task.status = "done";
        }
        return task;
      });
    }
    setTasks(taskCopy);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div className="addtask">
        <p>Task Manager</p>
        <input
          type="text"
          value={inputTask}
          onChange={(e) => {
            setInputTask(e.target.value);
          }}
          onKeyDown={onKeyPress}
        />
      </div>
      <div className="taskSection">
        <div
          className="todo"
          onDrop={onDrop}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          data-status="todo"
        >
          <p className="todoHeading">TODO</p>
          <div>
            {tasks.map((task) => {
              if (task.status === "todo") {
                return (
                  <div
                    key={task.id}
                    draggable
                    onDrag={() => setDraggedTask(task.id)}
                    style={{
                      cursor: "grab",
                      backgroundColor: "lightpink",
                      borderRadius: "10px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    {task.task}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div
          className="doing"
          onDrop={onDrop}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          name="doing"
          data-status="doing"
        >
          <p className="doingHeading">DOING</p>
          <div>
            {tasks.map((task) => {
              if (task.status === "doing") {
                return (
                  <div
                    key={task.id}
                    draggable
                    onDrag={() => setDraggedTask(task.id)}
                    style={{
                      cursor: "grab",
                      backgroundColor: "lightpink",
                      borderRadius: "10px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    {task.task}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div
          className="done"
          onDrop={onDrop}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          name="done"
          data-status="done"
        >
          <p className="doneHeading">DONE</p>
          <div>
            {tasks.map((task) => {
              if (task.status === "done") {
                return (
                  <div
                    key={task.id}
                    draggable
                    onDrag={() => setDraggedTask(task.id)}
                    style={{
                      cursor: "grab",
                      backgroundColor: "lightpink",
                      borderRadius: "10px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    {task.task}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;

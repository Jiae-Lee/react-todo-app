import React, { useState } from "react";

const List = ({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
  handleClick,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSubmit = () => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });
    setTodoData(newTodoData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full px-3 py-2 mr-4 text-gray-500"
            value={editedTitle}
            onChange={handleEditChange}
            autoFocus
          />
        </form>
        <div className="items-center">
          <button className="px-4 py-2" onClick={() => handleClick(id)}>
            x
          </button>
          <button className="px-4 py-2" type="submit" onClick={handleSubmit}>
            save
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        key={id}
        ref={provided.innerRef}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : " bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompleChange(id)}
          />{" "}
          <span className={completed ? "line-through" : ""}>{title}</span>
        </div>
        <div className="items-center">
          <button className="px-4 py-2" onClick={() => handleClick(id)}>
            x
          </button>
          <button className="px-4 py-2" onClick={() => setIsEditing(true)}>
            edit
          </button>
        </div>
      </div>
    );
  }
};
export default List;

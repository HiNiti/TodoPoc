import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "../actions/actiondefinition";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Todo.css";
import todoReducer from "../reducers/todoReducer";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((mystate) => mystate.todoReducer.list);
  return (
    <div className="main-div">
      <div className="child-div">
        <p>Add items in your todolist</p>

        <div>
          <input

            type="text"
            placeholder="Add items here"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <AddBoxIcon
            className="add-items"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          />
        </div>
        <div className="showItems">
          {list.map((elem) => {
            return (
              <div className="eachItem " key={elem.id}>
                <h3>{elem.Inputdata}</h3>
                {/* <DeleteIcon
                      className="delete-items"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    /> */}
                {/* <i className="delete-items" onClick = {()=>dispatch(deleteTodo(elem.id))}></i> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Todo;

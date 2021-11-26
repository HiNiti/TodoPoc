import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "../actions/actiondefinition";

import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Todo.css";
import todoReducer from "../reducers/todoReducer";


const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((mystate) => mystate.todoReducer.list);
  return (
    <div className="main-div">
      <div className="child-div">
        <h1>Add items in your todolist</h1>

        <div className="inputItems">
          <TextField
            id="outlined-basic"
            label="Add your items here!"
            variant="outlined"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
            Add
          </Button>
        </div>
        <div className="showItems">
          <ol>
            {list.map((elem) => {
              return (
                <div className="eachItem " key={elem.id}>
                  <li>{elem.data}</li>
                  <DeleteIcon
                      id="delete-items"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    />
                    
                </div>
              );
            })}
          </ol>
        </div>
        <div className="showItems">
          <Button variant="outlined" onClick={() => dispatch(clearTodo())}>
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Todo;

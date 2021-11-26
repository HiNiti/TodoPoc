//here the actions add, delete, clear are defined

export const addTodo = (data) => {
  return {
    type: "ADD-TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE-TODO",
    id 
  };
};

export const clearTodo = () => {
  return {
    type: "CLEAR-TODO",
  };
};

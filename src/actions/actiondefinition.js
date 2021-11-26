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

export const deleteTodo = () => {
  return {
    type: "DELETE-TODO",
  };
};

export const clearTodo = () => {
  return {
    type: "CLEAR-TODO",
  };
};

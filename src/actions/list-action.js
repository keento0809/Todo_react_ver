export const addTask = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const fetchTasks = (array) => {
  return {
    type: "FETCH_ITEMS",
    payload: array,
  };
};

export const editTask = (item) => {
  return {
    type: "EDIT_ITEM",
    payload: item,
  };
};

export const updateTask = (task) => {
  console.log(task);
  return {
    type: "UPDATE_ITEM",
    payload: task,
  };
};

export const removeTask = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

export const resetListAction = () => {
  return {
    type: "RESET_LIST",
  };
};

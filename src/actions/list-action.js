export const addTask = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const editTask = (item) => {
  return {
    type: "EDIT_ITEM",
    payload: item,
  };
};

export const updateTask = (item) => {
  return {
    type: "UPDATE_ITEM",
    payload: item,
  };
};

export const removeTask = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

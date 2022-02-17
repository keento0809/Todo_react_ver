export const addTask = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const editTask = (id) => {
  return {
    type: "EDIT_ITEM",
    payload: id,
  };
};

export const removeTask = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

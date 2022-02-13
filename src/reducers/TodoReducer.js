const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      return {
        ...state,
        items: [...state.items, newItem],
      };
    case "EDIT_ITEM":
      const updatedItem = action.payload;
      return {
        ...state,
        items: [...state.items, updatedItem],
      };
    case "DELETE_ITEM":
      const deletedItem = action.payload;
      return {
        ...state,
        items: [...state.items],
      };
    default:
      break;
  }
};

export default TodoReducer;

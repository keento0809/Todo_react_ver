const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      return {
        ...state,
        items: [...state.items, newItem],
        // items: state.items.concat(newItem),
      };
    case "EDIT_ITEM":
      const updatedItem = action.payload;
      return {
        ...state,
        items: [...state.items, updatedItem],
      };
    case "REMOVE_ITEM":
      console.log("removing reducer???");
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

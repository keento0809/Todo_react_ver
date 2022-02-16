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
    case "REMOVE_ITEM":
      const deletingItemIndex = action.payload;
      const deletingItem = state.items[deletingItemIndex];

      let updatedItems = state.items.filter((item) => item !== deletingItem);

      return {
        ...state,
        items: updatedItems,
      };
    default:
      break;
  }
};

export default TodoReducer;

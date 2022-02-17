const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      return {
        ...state,
        items: [...state.items, newItem],
      };
    case "EDIT_ITEM":
      // const updatedItem = action.payload;
      // const editingItemIndex = action.payload;
      // const editingItem = state.items[editingItemIndex];

      console.log("Reducer editing.");
      return {
        ...state,
        items: [...state.items],
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

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      console.log("Reducer adding.");
      return {
        items: [...state.items, newItem],
        totalTask: state.totalTask + 1,
      };
    case "EDIT_ITEM":
      const editItem = action.payload;
      // const editingItemIndex = action.payload;
      // const editingItem = state.items[editingItemIndex];
      return {
        items: [...state.items],
        totalTask: state.totalTask,
      };
    case "UPDATE_ITEM":
      return {};
    case "REMOVE_ITEM":
      const deletingItemIndex = action.payload;
      const deletingItem = state.items[deletingItemIndex];

      let updatedItems = state.items.filter((item) => item !== deletingItem);

      return {
        items: updatedItems,
        totalTask: state.totalTask - 1,
      };

    default:
      break;
  }
};

export default TodoReducer;

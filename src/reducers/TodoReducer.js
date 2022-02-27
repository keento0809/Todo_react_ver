const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      return {
        items: [...state.items, newItem],
        totalTask: state.totalTask + 1,
      };

    case "UPDATE_ITEM":
      const updatedTaskId = action.payload.id;

      state.items[updatedTaskId] = action.payload.text;

      const itemsAfterUpdated = state.items.map((item) => item);
      return {
        items: itemsAfterUpdated,
        totalTask: state.totalTask,
      };

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

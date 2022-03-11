const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      return {
        items: [...state.items, newItem],
        totalTask: state.totalTask + 1,
      };

    case "FETCH_ITEMS":
      const fetchedTasks = action.payload;
      return {
        // Original code. DO NOT CHANGE !!!
        // items: [...state.items, ...fetchedTasks],
        items: [...fetchedTasks],
        totalTask: state.totalTask + action.payload.length,
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

    case "RESET_LIST":
      return {
        items: [],
        totalTask: 0,
      };
    default:
      break;
  }
};

export default TodoReducer;

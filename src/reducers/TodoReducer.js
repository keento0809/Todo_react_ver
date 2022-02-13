const TodoReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      return {
        ...state,
        items: [...state.items, newItem],
      };
    default:
      break;
  }
};

export default TodoReducer;

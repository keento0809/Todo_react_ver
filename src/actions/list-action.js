const AddItem = (item) => {
  console.log("AddItem executed...");
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

// const AddItemSecond = {
//     type: "ADD_ITEM",
//     payload:
// }

export default AddItem;

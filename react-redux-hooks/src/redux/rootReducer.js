const intitialState = {
  count: 1,
};

const rootReducer = (state = intitialState, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  return state;
};

export default rootReducer;

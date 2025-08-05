const cardReducer = (
  state = {
    itemCount: 0,
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return (state = {
        ...state,
        itemCount: state.itemCount + 1,
      });
    }
    case 'REMOVE_FROM_CART': {
      return (state = {
        ...state,
        itemCount: state.itemCount - 1,
      });
    }
    default:
      return state;
  }
};

export default cardReducer;

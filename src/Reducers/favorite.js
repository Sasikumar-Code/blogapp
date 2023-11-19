/** @format */

const initState = {
  favor: [],
};
const FovorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FAVOR_ADD': {
      return {
        ...state,
        favor: [...state.favor, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
export default FovorReducer;

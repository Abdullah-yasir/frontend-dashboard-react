import { SHOW_MODAL } from "../actionTypes";

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { visible: action.payload.visible }

    default:
      return state;
  }
}

export default modalReducer;
import { SHOW_MODAL } from "../actionTypes"

export const showModal = (visible) => {
  return {
    type: SHOW_MODAL,
    payload: { visible }
  }
}
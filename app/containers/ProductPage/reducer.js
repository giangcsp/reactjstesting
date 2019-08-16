/*
 *
 * ProductPage reducer
 *
 */
import { SET_CAT, SET_DATA, ABC, ABCD } from './constants';
import produce from 'immer';
import getData from "./api/api";
export const initialState = {prodlist: getData(), cat: ""};
/* eslint-disable default-case, no-param-reassign */
const ProductPageReducer = (state = initialState, action) =>
produce(state, draft => 
  {
    switch (action.type) {
      case SET_DATA:
        console.log("set data reducer ran");
        draft.prodlist = state.prodlist;
        break;
      case SET_CAT:
        draft.cat = action.cat;
        break;
      default:
        console.log("default case was called");
        draft.cat = state.cat;
        draft.prodlist = state.prodlist;
        break;
    }
  });

export default ProductPageReducer;

/*
 *
 * ProductPage actions
 *
 */

import { SET_CAT, SET_DATA, ABC, ABCD } from './constants';

export function setCat(cat) {
  return {
    type: SET_CAT,
    cat: cat,
  };
}

export function setData(prodl){
  return {
    type: SET_DATA,
    prodlist: prodl,
  }
}
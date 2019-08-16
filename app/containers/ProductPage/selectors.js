import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productPage state domain
 */

const selectProductPageDomain = state => state.productPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductPage
 */

const makeSelectProductPage = () =>
  createSelector(
    selectProductPageDomain,
    (substate) => substate,
  );

const makeSelectCat = () => 
    createSelector(
      [selectProductPageDomain],
      productState => productState.cat,
    );

const makeSelectList = () => 
    createSelector(
      [selectProductPageDomain],
      substate => substate.prodlist,
    );

export { selectProductPageDomain, makeSelectCat, makeSelectList };

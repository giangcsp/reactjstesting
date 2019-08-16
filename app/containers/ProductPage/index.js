/**
 *
 * ProductPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectProductPage, makeSelectCat, makeSelectList} from './selectors';
import ProductPageReducer from './reducer';
import mainSaga from './saga';
import List from './prodlist';
import {  setCat } from './actions';



export function ProductPage({
  prodlist,
  updateData,
  inputval,
}
  
) {
  useInjectReducer({ key: 'productPage', reducer:ProductPageReducer });
  useInjectSaga({ key: 'productPage', saga:mainSaga });
  return (
    <div>
      <label>
      Enter category number to filter 
        <input name="inputfield" type="text" value={inputval} onChange={updateData} />
      </label>
        <List value={inputval} list={prodlist}/>
    </div>
  );
}


ProductPage.propTypes = {
  updateData: PropTypes.func,
  prodlist: PropTypes.array,
  inputval: PropTypes.string,
};


const mapStateToProps = createStructuredSelector({
  prodlist: makeSelectList(),
  inputval: makeSelectCat(),
}); 


export function mapDispatchToProps(dispatch) {
  return {
    updateData: (evt) => dispatch(setCat(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect
)(ProductPage);

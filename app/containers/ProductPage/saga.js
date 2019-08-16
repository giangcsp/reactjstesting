import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { SET_CAT, SET_DATA} from './constants';
import { forSaga, setCat, forSagaCat, changeInput, setData } from "./actions";
import getData from "./api/api";
// Individual exports for testing
export default function* mainSaga(action) {
  yield all([setCAt()]);
}


function* setCaT(){
  console.log("saga ran");
}

function* setCAt(action){
  yield takeLatest(SET_CAT, setCaT);
}

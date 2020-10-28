import { Map } from 'immutable';

import * as actionTypes from './constants';
const defaultState = Map({
  banners: [],
  hot_recommends: [],
});
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('banners', action.banners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hot_recommends', action.hot_recommends);
    default:
      return state;
  }
}

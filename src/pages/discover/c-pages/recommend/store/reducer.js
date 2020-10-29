import { Map } from 'immutable';

import * as actionTypes from './constants';
const defaultState = Map({
  banners: [],
  hot_recommends: [],
  new_albums: [],

  up_ranking: {},
  new_ranking: {},
  origin_ranking: {},
});
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('banners', action.banners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hot_recommends', action.hot_recommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('new_albums', action.new_albums);

    case actionTypes.CHANGE_UP_RANKING:
      return state.set('up_ranking', action.up_ranking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('new_ranking', action.new_ranking);
    case actionTypes.CAHNGE_ORIGIN_RANKING:
      return state.set('origin_ranking', action.origin_ranking);
    default:
      return state;
  }
}

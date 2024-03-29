import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  currentSong: {},
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    default:
      return state;
  }
}

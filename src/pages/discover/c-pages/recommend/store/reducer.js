import * as actionTypes from './constants';
const defaultState = {
  banners: [],
};
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
}

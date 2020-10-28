import { combineReducers } from 'redux-immutable';

import recommendReducer from '@/pages/discover/c-pages/recommend/store/reducer';

const reducer = combineReducers({
  recommend: recommendReducer,
});
export default reducer;

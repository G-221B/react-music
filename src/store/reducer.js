import { combineReducers } from 'redux';

import recommendReducer from '@/pages/discover/c-pages/recommend/store/reducer';

const reducer = combineReducers({
  recommend: recommendReducer,
});
export default reducer;

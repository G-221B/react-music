import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '@/pages/player/store';

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});
export default reducer;

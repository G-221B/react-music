import { getCurrentSong } from '@/service/player';
import * as actionTypes from './constants';

function changeCurrentSongAction(currentSong) {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong,
  };
}

export function getCurrentSongAction(ids) {
  return (dispatch) => {
    getCurrentSong(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.songs[0]));
    });
  };
}

import * as actionTypes from './constants';
import { UP_RANKING, NEW_RANKING, ORIGIN_RANKING } from '@/common/constants';
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from '@/service/recommend';
export function changeTopBannersAction(banners) {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    banners,
  };
}
export function changeHotRecommendsAction(hot_recommends) {
  return {
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hot_recommends,
  };
}
export function changeNewAlbumsAction(new_albums) {
  return {
    type: actionTypes.CHANGE_NEW_ALBUMS,
    new_albums,
  };
}

export function changeNewRankingAction(new_ranking) {
  return {
    type: actionTypes.CHANGE_NEW_RANKING,
    new_ranking,
  };
}
export function changeUpRankingAction(up_ranking) {
  return {
    type: actionTypes.CHANGE_UP_RANKING,
    up_ranking,
  };
}
export function changeOriginRankingAction(origin_ranking) {
  return {
    type: actionTypes.CAHNGE_ORIGIN_RANKING,
    origin_ranking,
  };
}

// 获取数据异步请求
export function getTopBannersAction() {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannersAction(res.banners));
    });
  };
}
export function getHotRecommendsAction() {
  return (dispatch) => {
    getHotRecommends().then((res) => {
      dispatch(changeHotRecommendsAction(res.result));
    });
  };
}
export function getNewAlbumsAction() {
  return (dispatch) => {
    getNewAlbums().then((res) => {
      dispatch(changeNewAlbumsAction(res.albums));
    });
  };
}

export function getTopListAction(idx) {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case UP_RANKING:
          dispatch(changeUpRankingAction(res.playlist));
          break;
        case NEW_RANKING:
          dispatch(changeNewRankingAction(res.playlist));
          break;
        case ORIGIN_RANKING:
          dispatch(changeOriginRankingAction(res.playlist));
          break;
        default:
      }
    });
  };
}

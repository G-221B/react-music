import * as actionTypes from './constants';

import { getTopBanners, getHotRecommends } from '@/service/recommend';
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

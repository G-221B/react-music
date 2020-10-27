import * as actionTypes from './constants';

import request from '@/service/request';
export function getTopBanners() {
  return (dispatch) => {
    request('banner').then((res) => {
      console.log(res);
      dispatch(getTopBannersAction(res.banners));
    });
  };
}
export function getTopBannersAction(banners) {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    banners,
  };
}

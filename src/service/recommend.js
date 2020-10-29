import request from './request';

export const getTopBanners = () => {
  return request.get('/banner');
};
export const getHotRecommends = () => {
  return request({
    url: '/personalized',
    params: {
      limit: 8,
    },
  });
};
export const getNewAlbums = () => {
  return request({
    url: '/top/album',
    params: {
      limit: 10,
    },
  });
};
export const getTopList = (idx) => {
  return request({
    url: '/top/list',
    params: {
      idx,
    },
  });
};

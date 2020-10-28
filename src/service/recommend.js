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

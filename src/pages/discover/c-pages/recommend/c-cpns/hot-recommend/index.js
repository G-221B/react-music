import React, { memo, useEffect, useMemo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getCount } from '@/utils/format_utils';

import GGThemeHeaderRcm from '@/components/theme-header-rcm';
import { HotRecommendWrapper } from './style';
import { hot_nav_list } from '@/common/local-data';
import { getHotRecommendsAction } from '../../store/actionCreators';
export default memo(function GGHotRecommend() {
  const { hot_recommends } = useSelector(
    (state) => ({
      hot_recommends: state.getIn(['recommend', 'hot_recommends']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const nav_list = useMemo(() => hot_nav_list, []);
  useEffect(() => {
    dispatch(getHotRecommendsAction());
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <GGThemeHeaderRcm list={nav_list} title='热门推荐' />
      <div className='recommend-list'>
        {hot_recommends.map((item) => {
          return (
            <div className='recommend-item' key={item.id}>
              <div className='item-top'>
                <img src={item.picUrl + '?param=140y140'} alt=' ' />
              </div>
              <a href='#/' className='item-detail'>
                {item.name}
              </a>
              <div className='over sprite_cover'>
                <div className='over-bottom sprite_cover'>
                  <div className='over-left'>
                    <span className='listen sprite_icon'></span>
                    <span>{getCount(item.playCount)}</span>
                  </div>
                  <div className='over-right sprite_icon'></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRecommendWrapper>
  );
});

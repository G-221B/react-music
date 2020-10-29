import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';
import { UP_RANKING, NEW_RANKING, ORIGIN_RANKING } from '@/common/constants';

import { RcmRankingWrapper } from './style';
import GGThemeHeaderRcm from '@/components/theme-header-rcm';
import GGTopRanking from '@/components/top-ranking';

export default memo(function GGRecommendRanking() {
  const { up_ranking, new_ranking, origin_ranking } = useSelector(
    (state) => ({
      up_ranking: state.getIn(['recommend', 'up_ranking']),
      new_ranking: state.getIn(['recommend', 'new_ranking']),
      origin_ranking: state.getIn(['recommend', 'origin_ranking']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(UP_RANKING));
    dispatch(getTopListAction(NEW_RANKING));
    dispatch(getTopListAction(ORIGIN_RANKING));
  }, [dispatch]);
  return (
    <RcmRankingWrapper>
      <GGThemeHeaderRcm title='榜单' />
      <div className='rank-box'>
        <GGTopRanking info={up_ranking} />
        <GGTopRanking info={new_ranking} />
        <GGTopRanking info={origin_ranking} />
      </div>
    </RcmRankingWrapper>
  );
});

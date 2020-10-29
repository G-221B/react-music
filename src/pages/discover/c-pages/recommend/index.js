import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannersAction } from './store/actionCreators';
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';
import GGTopBanner from './c-cpns/top-banner';
import GGHotRecommend from './c-cpns/hot-recommend';
import GGNewAlbum from './c-cpns/new-album';
import GGRecommendRanking from './c-cpns/recommend-ranking';
import GGUserLogin from './c-cpns/user-login';
import GGSetterSinger from './c-cpns/setter-singer';

export default memo(function GGRecommend() {
  const dispatch = useDispatch();
  const { banners } = useSelector(
    (state) => ({
      banners: state.getIn(['recommend', 'banners']),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <GGTopBanner banners={banners} />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <GGHotRecommend />
          <GGNewAlbum />
          <GGRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <GGUserLogin />
          <GGSetterSinger />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

/*
 *使用map映射的方式
 */
// function GGRecommend(props) {
//   const { getBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);
//   return (
//     <div>
//       <h2>Recommend:{props.banners.length}</h2>
//     </div>
//   );
// }
// const mapStateToProps = (state) => ({
//   banners: state.recommend.banners,
// });
// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBanners());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(GGRecommend));

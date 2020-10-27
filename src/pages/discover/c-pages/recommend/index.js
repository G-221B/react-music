import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBanners } from './store/actionCreators';

export default memo(function GGRecommend() {
  const dispatch = useDispatch();
  const { banners } = useSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getTopBanners());
  }, [dispatch]);
  return (
    <div>
      <h2>GGRecommend: {banners.length}</h2>
    </div>
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

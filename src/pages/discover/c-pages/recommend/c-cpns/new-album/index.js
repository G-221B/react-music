import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewAlbumsAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import { NewAblumWrapper } from './style';
import GGThemeHeaderRcm from '@/components/theme-header-rcm';
import GGAlbumCover from '@/components/album-cover';

export default memo(function GGNewAlbum() {
  const { new_albums = [] } = useSelector(
    (state) => ({
      new_albums: state.getIn(['recommend', 'new_albums']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const pageRef = useRef();

  useEffect(() => {
    dispatch(getNewAlbumsAction());
  }, [dispatch]);
  return (
    <NewAblumWrapper>
      <GGThemeHeaderRcm title='新碟上架' />
      <div className='container'>
        <div
          className='btn btn-left sprite_02'
          onClick={(e) => pageRef.current.prev()}
        ></div>
        <div className='album-box'>
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item, index) => {
              return (
                <div key={item} className='album-list'>
                  {new_albums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <GGAlbumCover
                        info={iten}
                        key={iten.id}
                        size={100}
                        width={118}
                        bgp={-570}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className='btn btn-right sprite_02'
          onClick={(e) => pageRef.current.next()}
        ></div>
      </div>
    </NewAblumWrapper>
  );
});

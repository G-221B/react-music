import React, { memo, useRef, useCallback, useState } from 'react';
import { Carousel } from 'antd';

import {
  TopBannerWrapper,
  BannerWrapper,
  DownloadWrapper,
  HandleBtnLeft,
  HandleBtnRight,
} from './style';
export default memo(function GGTopBanner(props) {
  const { banners = [] } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerRef = useRef();

  const beforeChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  return (
    <TopBannerWrapper
      bgImg={
        banners.length &&
        banners[currentIndex].imageUrl + '?imageView&blur=40x20'
      }
    >
      <div className='wrap-v2 box'>
        <BannerWrapper>
          <Carousel
            effect='fade'
            autoplay={true}
            dots={{ className: 'dot' }}
            ref={bannerRef}
            beforeChange={beforeChange}
          >
            {banners.map((item) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img src={item.imageUrl} className='image' alt=' ' />
                </div>
              );
            })}
          </Carousel>
        </BannerWrapper>
        <DownloadWrapper>
          <div className='go-download'></div>
          <div className='detail'>PC 安卓 iPhone WP iPad Mac 六大客户端</div>
        </DownloadWrapper>
        <HandleBtnLeft
          className='HandleBtn banner_go_left'
          onClick={(e) => bannerRef.current.prev()}
        ></HandleBtnLeft>
        <HandleBtnRight
          className='HandleBtn banner_go_right'
          onClick={(e) => bannerRef.current.next()}
        ></HandleBtnRight>
      </div>
    </TopBannerWrapper>
  );
});

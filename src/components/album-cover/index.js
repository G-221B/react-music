import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format_utils';

import { AlbumCoverWrapper } from './style';

export default memo(function GGAblumCover(props) {
  const { info, size, width, bgp } = props;
  return (
    <AlbumCoverWrapper width={width} bgp={bgp}>
      <div className='album-item'>
        <div className='item-top'>
          <img src={getSizeImage(info.picUrl, size)} alt='' />
          <a href='#/' className='image_cover cover'>
            {''}
          </a>
        </div>
        <p className='text-nowrap'>{info.name}</p>
        <span className='text-nowrap'>{info.artist.name}</span>
      </div>
    </AlbumCoverWrapper>
  );
});

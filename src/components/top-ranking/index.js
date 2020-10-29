import React, { memo } from 'react';
import classnames from 'classnames';

import { TopRankingWrapper } from './style';
import { getSizeImage } from '@/utils/format_utils';

export default memo(function GGTopRanking(props) {
  const { info } = props;
  const { tracks = [] } = info;
  console.log(info);
  return (
    <TopRankingWrapper>
      <div className='header'>
        <div className='header-left'>
          <img src={getSizeImage(info.coverImgUrl, 80)} alt='' />
          <a href='#/' className='image_cover cover'>
            {''}
          </a>
        </div>
        <div className='header-right'>
          <a href='/#' className='title'>
            {info.name}
          </a>
          <div className='header-icon'>
            <i className='video sprite_02'></i>
            <i className='add sprite_02'></i>
          </div>
        </div>
      </div>
      <div className='song-list'>
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className='song-item' key={item.id}>
              <span className={classnames({ numActive: index < 3 }, 'num')}>
                {index + 1}
              </span>
              <div className='song-right'>
                <a href='#/' className='text-nowrap'>
                  {item.name}
                </a>
                <div className='icon'>
                  <i className='sprite_02 play'></i>
                  <i className='sprite_icon2 add_playlist'></i>
                  <i className='sprite_02 collect'></i>
                </div>
              </div>
            </div>
          );
        })}
        <a href='#/' className='find-all'>
          {'查看全部>'}
        </a>
      </div>
    </TopRankingWrapper>
  );
});

import React, { memo } from 'react';

import { SetterSingerWrapper } from './style';
export default memo(function GGSetterSinger() {
  return (
    <SetterSingerWrapper>
      <div className='header'>
        <h2>入驻歌手</h2>
        <a href='#/'>{'查看全部>'}</a>
      </div>
      <div className='singer-list'>
        {[0, 1, 2, 3, 4].map((item) => {
          return (
            <div className='singer-item' key={item}>
              <div className='left'>
                <img
                  src='http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62'
                  alt=''
                />
              </div>
              <div className='right'>
                <h2>张惠妹aMEI</h2>
                <span>台湾歌手张惠妹</span>
              </div>
            </div>
          );
        })}
      </div>
    </SetterSingerWrapper>
  );
});

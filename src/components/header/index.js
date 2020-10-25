import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '@/common/local-data';

import { SearchOutlined } from '@ant-design/icons';
import {
  HeaderWrapper,
  LeftWrapper,
  Rightwrapper,
} from '@/components/header/style';

export default memo(function GGHeader() {
  const selectLink = (item, index) => {
    if (index < 3) {
      return (
        <NavLink
          exact={true}
          to={item.path}
          activeClassName='header-link-active'
        >
          {item.title}
        </NavLink>
      );
    } else {
      return <a href={item.path}>{item.title}</a>;
    }
  };
  return (
    <HeaderWrapper>
      <div className='main wrap-v1'>
        <LeftWrapper>
          <a href='#/' className='logo sprite_01'>
            {' '}
          </a>
          <div className='select-list'>
            {headerLinks.map((item, index) => {
              return (
                <div className='select-item' key={item.title}>
                  {selectLink(item, index)}
                </div>
              );
            })}
          </div>
        </LeftWrapper>
        <Rightwrapper>
          <div className='search'>
            <SearchOutlined className='search-icon' />
            <input type='text' placeholder='音乐/视频/电台/用户' />
          </div>
          <a href='#/' className='center'>
            创作者中心
          </a>
          <a href='#/' className='login'>
            登陆
          </a>
        </Rightwrapper>
      </div>
    </HeaderWrapper>
  );
});

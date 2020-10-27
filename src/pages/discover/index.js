import React, { memo } from 'react';

import { discoverMenu } from '@/common/local-data';

import { DiscoverWrapper, TopNav } from './style';
import { NavLink, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default memo(function GGDiscover(props) {
  return (
    <DiscoverWrapper>
      <div className='wrap-v1'>
        <TopNav>
          {discoverMenu.map((item) => {
            return (
              <NavLink
                to={item.link}
                key={item.title}
                className='list-item'
                exact={true}
              >
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </TopNav>
      </div>
      <Switch>{renderRoutes(props.route.routes)}</Switch>
    </DiscoverWrapper>
  );
});

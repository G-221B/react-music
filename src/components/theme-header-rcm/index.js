import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ThemeHeaderRcmWrapper } from './style';

function GGThemeHeaderRcm(props) {
  return (
    <ThemeHeaderRcmWrapper>
      <div className='theme-left'>
        <i className='icon-dot sprite_02'></i>
        <h2>{props.title}</h2>
        <div className='nav-list'>
          {props.list.map((item) => {
            return (
              <div key={item.title}>
                <a href='#/'>{item.title}</a>
                <span>|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className='theme-right'>
        <a href='#/' className='more'>
          更多
        </a>
      </div>
    </ThemeHeaderRcmWrapper>
  );
}
GGThemeHeaderRcm.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string.isRequired,
};
GGThemeHeaderRcm.defaultProps = {
  list: [],
};
export default memo(GGThemeHeaderRcm);

import styled from 'styled-components';

import moreIcon from '@/assets/img/sprite_02.png';

export const ThemeHeaderRcmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  line-height: 35px;
  border-bottom: 2px solid #c20c0c;
  .theme-left {
    position: relative;
    display: flex;
    .icon-dot {
      width: 35px;
      height: 35px;
      background-position: -225px -154px;
    }
    h2 {
      font-size: 20px;
    }
    .nav-list {
      margin-left: 20px;
      display: flex;
      span {
        margin: 0 10px;
      }
    }
  }
  .theme-right {
    position: relative;
    margin-right: 25px;
    &::after {
      position: absolute;
      top: 50%;
      right: -20px;
      transform: translateY(-50%);
      display: block;
      content: '';
      background: url(${moreIcon}) no-repeat 0 -240px;
      width: 12px;
      height: 12px;
    }
  }
`;

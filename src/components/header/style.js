import styled from 'styled-components';

import sprite_01 from '@/assets/img/sprite_01.png';

export const HeaderWrapper = styled.div`
  background-color: #242424;
  border-bottom: 5px solid #c20c0c;
  .main {
    display: flex;
    justify-content: space-between;
    height: 70px;
    color: #fff;
  }
`;
export const LeftWrapper = styled.div`
  display: flex;
  font-size: 14px;
  .logo {
    display: inline-block;
    width: 177px;
    height: 69px;
    background-position: 0 0;
  }
  .select-list {
    display: flex;
    .select-item {
      position: relative;
      a {
        display: inline-block;
        padding: 27px 19px;
        box-sizing: border-box;
        color: #cccccc;
        text-decoration: none;
      }
      .header-link-active {
        color: #fff;
        background-color: #000000;
        &::after {
          display: block;
          content: ' ';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          transform: rotate(45deg);
          width: 0;
          height: 0;
          border-left: 10px solid #c20c0c;
          border-bottom: 10px solid transparent;
        }
      }
      &:last-child {
        position: relative;
        &::after {
          display: block;
          content: '';
          position: absolute;
          top: 20px;
          right: -28px;
          width: 28px;
          height: 19px;
          background: url(${sprite_01}) no-repeat -192px 0;
        }
      }
    }
  }
`;
export const Rightwrapper = styled.div`
  display: flex;
  .search {
    position: relative;
    width: 158px;
    height: 32px;
    margin-top: 19px;
    border-radius: 32px;
    background-color: #fff;
    .search-icon {
      margin: 7px 0 0 7px;
      color: black;
      font-size: 20px;
    }
    input {
      position: absolute;
      top: 10px;
      left: 30px;
      width: 115px;
      height: 16px;
      background-color: #fff;
    }
  }
  .center {
    display: inline-block;
    width: 90px;
    height: 32px;
    margin: 19px 20px 0px 20px;
    border-radius: 20px;
    border: 1px solid #4f4f4f;
    line-height: 32px;
    text-align: center;
    text-decoration: none;
    color: #ccc;
    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }
  .login {
    line-height: 70px;
    &:hover {
      color: #999;
    }
  }
`;

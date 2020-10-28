import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  .nav-box {
    background-color: #c20c0c;
  }
`;

export const TopNav = styled.div`
  margin-left: 183px;
  .list-item {
    display: inline-block;
    height: 30px;
    padding: 0 20px;
    margin-top: 2px;
    text-align: center;
    color: #fff;
    span {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 10px;
    }
    &.active span {
      background-color: #9b0909;
    }
  }
`;

import styled from 'styled-components';

export const NewAblumWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    margin-top: 20px;
    padding: 20px 0;
    justify-content: space-around;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    .btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 14px;
      cursor: pointer;
    }
    .btn-right {
      background-position: -305px -77px;
      right: 6px;
      &:hover {
        background-position: -325px -77px;
      }
    }
    .btn-left {
      background-position: -265px -77px;
      left: 6px;
      &:hover {
        background-position: -285px -77px;
      }
    }
    .album-box {
      width: 645px;
      font-size: 12px;
      .album-list {
        display: flex !important;
        justify-content: space-around;
      }
    }
  }
`;

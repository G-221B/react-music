import styled from 'styled-components';

import downloadImg from '@/assets/img/download.png';

export const TopBannerWrapper = styled.div`
  position: relative;
  height: 285px;
  width: 100%;
  color: #fff;
  font-size: 50px;
  background: url(${(props) => props.bgImg}) no-repeat center center;
  background-size: 6000px 6000px;
  .box {
    display: flex;
    .HandleBtn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 37px;
      height: 63px;
      cursor: pointer;
      background-position: 0 0;
      &:hover {
        background-color: #333;
        opacity: 0.3;
      }
    }
  }
`;
export const BannerWrapper = styled.div`
  width: 726px;
  height: 285px;
  overflow: hidden;
  .banner-item {
    height: 285px;
    background-color: gray;
    .image {
      width: 100%;
      height: 100%;
    }
  }
  .dot {
    li {
      width: 6px !important;
      height: 6px;
      margin-left: 15px;
      border-radius: 50%;
      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }
    }
    .slick-active {
      button {
        background-color: #c20c0c !important;
      }
    }
  }
`;
export const DownloadWrapper = styled.div`
  position: relative;
  width: 254px;
  height: 285px;
  background: url(${downloadImg}) no-repeat 0 0;
  .go-download {
    position: absolute;
    bottom: 44px;
    left: 19px;
    background: url(${downloadImg}) no-repeat 0 -289px;
    width: 215px;
    height: 56px;
    opacity: 0;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
  .detail {
    position: absolute;
    bottom: 15px;
    width: 100%;
    font-size: 12px;
    color: #8d8d8d;
    text-align: center;
  }
`;
export const HandleBtnLeft = styled.div`
  left: 379px;
`;
export const HandleBtnRight = styled.div`
  right: 379px;
`;

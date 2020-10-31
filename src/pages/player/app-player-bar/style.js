import styled from 'styled-components';

import sprite_playbar from '@/assets/img/statbar.png';
import sprite_icon from '@/assets/img/sprite_icon.png';

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;
  .container {
    display: flex;
    align-items: center;
    margin-top: 5px;
    height: 53px;
  }
`;
export const Content = styled.div`
  .btn {
    cursor: pointer;
  }
  .btn-prev {
    background-position: 0px -130px;
    width: 28px;
    height: 28px;

    &:hover {
      background-position: -30px -130px;
    }
  }
  .btn-switch {
    background-position: -2px
      ${(props) => (props.isPlaying ? '-166px' : '-205px')};
    width: 32px;
    height: 33px;
    margin: 0 10px;
  }
  .btn-next {
    background-position: -80px -130px;
    width: 28px;
    height: 28px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`;

export const PlayInfo = styled.div`
  display: flex;
  align-items: center;
  color: #9b9b9b;
  .img-box {
    margin: 0 8px;
    cursor: pointer;
  }
  .info-box {
    .song-name {
      color: #fff;
      margin: 0 14px;
    }
    .progress {
      display: flex;
      margin: -5px 8px 0 0;
      span {
        margin-top: 3px;
      }
      .divide {
        margin: 0 4px;
        margin-top: 3px;
      }
      .ant-slider {
        width: 493px;
        margin: 5px 8px;
        .ant-slider-rail {
          height: 8px;
          background: url(${sprite_playbar}) repeat 0 0;
        }
        .ant-slider-handle {
          background: url(${sprite_icon}) no-repeat 0 -252px;
          width: 22px;
          height: 22px;
          border: none;
        }
        .ant-slider-track {
          height: 8px;
          background: url(${sprite_playbar}) repeat 0 -66px;
        }
      }
    }
  }
`;

export const Operator = styled.div`
  display: flex;
  align-items: center;
  margin-left: 18px;
  button {
    cursor: pointer;
  }
  .operator-left {
    .add {
      background-position: -92px -166px;
      width: 18px;
      height: 19px;
      margin-right: 8px;
      &:hover {
        background-position: -92px -192px;
      }
    }
    .share {
      background-position: -118px -167px;
      width: 17px;
      height: 18px;
      &:hover {
        background-position: -118px -193px;
      }
    }
  }
  .operator-right {
    margin-left: 18px;
    .voice {
      background-position: -5px -250px;
      width: 19px;
      height: 21px;
      &:hover {
        background-position: -34px -250px;
      }
    }
    .mode {
      background-position: -69px -251px;
      width: 20px;
      height: 19px;
      margin: 0 8px;
      &:hover {
        background-position: -96px -251px;
      }
    }
    .playlist {
      background-position: -45px -71px;
      width: 56px;
      height: 23px;
      &:hover {
        background-position: -45px -101px;
      }
    }
  }
`;

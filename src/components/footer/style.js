import styled from 'styled-components';

import footer_sprite from '@/assets/img/foot_sprite.png';

export const FooterWarpper = styled.div`
  height: 153px;
  padding-top: 20px;
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;
  color: #666;
  .box {
    display: flex;
    justify-content: space-between;
    .box-left {
      .music-link {
        display: flex;
        a {
          color: #999;
        }
        span {
          color: #999;
          margin: 0 10px;
        }
      }
      p {
        margin-top: 10px;
        span {
          margin-right: 18px;
        }
      }
    }
    .image-link {
      display: flex;
      margin-top: 15px;
      .image-item {
        text-align: center;
        width: 90px;
        height: 70px;
        font-size: 10px;
        p {
          margin-top: 8px;
        }
        .image {
          display: block;
          margin: 0 auto;
          width: 50px;
          height: 45px;
        }
        :nth-child(1) .image {
          background: url(${footer_sprite}) no-repeat -63px -456.5px;
          background-size: 110px 552px;
        }
        :nth-child(2) .image {
          background: url(${footer_sprite}) no-repeat -63px -101px;
          background-size: 110px 552px;
        }
        :nth-child(3) .image {
          background: url(${footer_sprite}) no-repeat 0 0;
          background-size: 110px 552px;
        }
        :nth-child(4) .image {
          background: url(${footer_sprite}) no-repeat -60px -50px;
          background-size: 110px 552px;
        }
        :nth-child(5) .image {
          background: url(${footer_sprite}) no-repeat 0 -101px;
          background-size: 110px 552px;
        }
      }
    }
  }
`;

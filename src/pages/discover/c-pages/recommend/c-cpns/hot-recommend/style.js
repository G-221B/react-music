import styled from 'styled-components';

export const HotRecommendWrapper = styled.div`
  .recommend-list {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 3px;
    flex-wrap: wrap;
    .recommend-item {
      position: relative;
      width: 140px;
      margin-top: 24px;
      .item-detail {
        font-size: 14px;
        color: black;
      }
      .over {
        position: absolute;
        top: 0;
        left: 0;
        width: 140px;
        height: 140px;
        background-position: 0 0;
        cursor: pointer;
        .over-bottom {
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-position: 0 -537px;
          height: 27px;
          line-height: 30px;
          color: #ccc;
          .over-left {
            display: flex;
            .listen {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              display: block;
              width: 14px;
              height: 11px;
              background-position: 0 -24px;
              margin: 0 6px 0 10px;
            }
          }
          .over-right {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            background-position: 0 0;
            width: 16px;
            height: 17px;
            &:hover {
              background-position: 0 -60px;
            }
          }
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const SetterSingerWrapper = styled.div`
  padding: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    h2 {
      font-size: 14px;
      font-weight: 700;
    }
  }
  .singer-list {
    margin-top: 15px;
    .singer-item {
      display: flex;
      margin-top: 15px;
      border: 1px solid #e9e9e9;
      background-color: #fafafa;
      .right {
        font-size: 12px;
        padding: 10px;
        h2 {
          font-size: 14px;
          font-weight: 700;
        }
        .span {
          margin-top: 8px;
        }
      }
      .left {
        width: 62px;
        height: 62px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 126px;
  background-position: 0 0;
  .detail {
    padding: 16px 20px;
    box-sizing: border-box;
  }
  .login {
    background-position: 0 -195px;
    width: 100px;
    margin: 0 auto;
    line-height: 31px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-position: -110px -195px;
    }
  }
`;

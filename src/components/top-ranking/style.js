import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  flex: 1;
  .header {
    display: flex;
    padding: 20px 0 0 19px;
    .header-left {
      position: relative;
      width: 80px;
      height: 80px;
      .cover {
        background-position: -145px -57px;
      }
    }
    .header-right {
      margin-top: 8px;
      margin-left: 10px;
      .title {
        font-size: 14px;
        color: black;
        font-weight: 600;
      }
      .header-icon {
        display: flex;
        margin-top: 10px;
        i {
          cursor: pointer;
        }
        .video {
          background-position: -267px -205px;
          width: 22px;
          height: 22px;
          margin-right: 8px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .add {
          background-position: -300px -207px;
          width: 20px;
          height: 19px;
          &:hover {
            background-position: -300px -237px;
          }
        }
      }
    }
  }
  .song-list {
    margin-top: 21px;
    .song-item {
      display: flex;
      height: 32px;
      line-height: 32px;
      &:hover .song-right .icon {
        display: flex;
      }
      .song-right {
        display: flex;
        justify-content: space-between;
        width: 190px;
        a {
          color: black;
        }
        .icon {
          display: none;
          position: relative;
          align-items: center;
          line-height: 32px;
          i {
            margin-right: 10px;
          }
          .play {
            background-position: -267px -268px;
            width: 17px;
            height: 17px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .add_playlist {
            background-position: 0 -700px;
            width: 14px;
            height: 15px;
          }
          .collect {
            background-position: -297px -270px;
            width: 16px;
            height: 14px;
          }
        }
      }
      .numActive {
        color: #c10d0c;
      }
      .num {
        display: inline-block;
        width: 40px;
        text-align: center;
        font-size: 16px;
      }
    }
    .find-all {
      display: inline-block;
      width: 200px;
      padding: 0 15px;
      line-height: 32px;
      text-align: right;
      color: black;
    }
  }
`;

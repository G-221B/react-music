import styled from 'styled-components';

export const AlbumCoverWrapper = styled.div`
  .album-item {
    width: ${(props) => `${props.width}px`};
    font-size: 12px;
    .item-top {
      position: relative;
      .cover {
        background-position: 0 ${(props) => `${props.bgp}px`};
      }
    }
    p {
      color: #000;
    }
    span {
      color: #666;
    }
  }
`;

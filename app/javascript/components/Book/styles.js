import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div.book-image {
    > img {
      height: 185px;
      width: 160px;
    }
  }

  > div.book-infos {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    line-height: 1.5rem;
  }
`
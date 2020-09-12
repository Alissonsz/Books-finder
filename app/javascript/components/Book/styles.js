import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.8);
  }

  > div.book-image {
    > img {
      height: 185px;
      width: 160px;
      padding-left: 1rem;
    }
  }

  > div.book-infos {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    line-height: 1.5rem;
    padding-left: 1rem;
  }
`
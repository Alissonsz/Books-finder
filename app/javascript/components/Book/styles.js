import styled from 'styled-components';
import { AiOutlineDownload } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  > div.book-image {
    > img {
      height: 185px;
      width: 160px;
      margin-left: 1rem;
      border: 2px solid grey;
      border-radius: 5px;
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

export const DownloadIconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  width: 20%;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const DownloadIcon = styled(AiOutlineDownload)`
  width: 60px;
  height: 60px;
  fill: grey;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
    fill: black;
  }
`
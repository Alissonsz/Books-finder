import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 15px;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
  }
`
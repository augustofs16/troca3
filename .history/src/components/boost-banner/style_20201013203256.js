import styled from 'styled-components';

export const MainBanner = styled.div`
  background: ${color};
  width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Infos = styled.div({ color } => { background: color })`
  display: flex;
  flex-flow: row wrap;
`;

export const Img = styled.img`
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 #336;
`;
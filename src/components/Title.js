import styled from 'styled-components';

export const Title = styled.h1`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[0]}px;
`;
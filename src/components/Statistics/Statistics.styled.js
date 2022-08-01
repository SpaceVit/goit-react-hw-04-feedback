import styled from 'styled-components';

export const StatsList = styled.ul`
  margin: padding: ${props => props.theme.space[0]}px;
  padding: padding: ${props => props.theme.space[3]}px;
  justify-content: center;
  align-items: center;
  & > li {
    margin-bottom: ${props => props.theme.space[1]}px;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.mainText};
  }
  & > li:last-child {
    margin-bottom: ${props => props.theme.space[0]}px;
  }
`;

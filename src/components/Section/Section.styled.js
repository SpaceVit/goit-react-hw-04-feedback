import styled from 'styled-components';

export const Container = styled.section`
  padding: ${props => props.theme.space[1]}px;
  & h2 {
    text-align: center;
    margin: ${props => props.theme.space[0]}px;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

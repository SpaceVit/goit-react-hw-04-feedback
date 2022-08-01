import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 0 10px;
  width: 80px;
  background-color: ${props => props.theme.colors.avatarBackground};
  color: ${props => props.theme.colors.secondaryText};
  height: 100%;
  border: 1px solid black;
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.cardItemBackground};
  }
`;

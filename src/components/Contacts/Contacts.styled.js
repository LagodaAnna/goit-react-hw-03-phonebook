import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[4]};
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: start;
  max-width: 400px;
  font-weight: ${p => p.theme.fontWeights.bold};

  &:not(:first-child) {
    margin-top: ${p => p.theme.space[3]};
  }
`;

export const Name = styled.span`
  flex-basis: 40%;
`;

export const Number = styled.span`
  flex-basis: 40%;
`;

export const Button = styled.button`
  flex-basis: 20%;
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-right: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[4]};
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.buttonBg};
  box-shadow: ${p => p.theme.shadows.normal};
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: ${p => p.theme.shadows.hover};
  }
`;

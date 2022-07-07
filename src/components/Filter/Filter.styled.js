import styled from 'styled-components';

export const Label = styled.label`
  margin-right: ${p => p.theme.space[6]};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Input = styled.input`
  margin-left: ${p => p.theme.space[5]};
  padding: ${p => p.theme.space[3]};
  background-color: ${p => p.theme.colors.filterBg};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.filter};
  border: transparent;
  outline: none;
`;

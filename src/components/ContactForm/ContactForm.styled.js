import styled from 'styled-components';

export const Form = styled.form`
  margin-top: ${p => p.theme.space[3]};
`;

export const Label = styled.label`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[4]};
`;

export const Input = styled.input`
  width: 200px;
  padding-right: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 1px solid;
`;

export const Button = styled.button`
  display: block;
  margin-top: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};
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

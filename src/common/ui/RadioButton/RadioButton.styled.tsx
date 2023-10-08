import styled from '@emotion/styled';

export const Radio = styled.input`
  appearance: none;
  margin: 0;
  font: inherit;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.colors.accent.base};
  border-radius: 50%;
  position: relative;

  :before {
    content: '';
    position: absolute;
    inset: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent.base};
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }

  :checked::before {
    transform: scale(1);
  }
`;

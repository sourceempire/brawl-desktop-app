import styled, { css } from 'styled-components/macro';
import Icons from 'assets/icons/Icons';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    height: ${theme.spacing.baseX7}px;
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    padding: 0 ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};

    :hover {
      outline: 1px solid rgba(255, 255, 255, 0.4);
    }
  `}
`;

export const UserImage = styled.img`
  object-fit: cover;

  ${({ theme }) => css`
    width: ${theme.spacing.baseX5}px;
    height: ${theme.spacing.baseX5}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const UserTagWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  ${({ theme }) => css`
    margin-left: ${theme.spacing.baseX2}px;
    ${theme.textStyles.body}
  `}
`;

export const UserTag = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({ theme }) => css`
    padding-right: ${theme.spacing.base}px;
  `}
`;

export const RequestSentText = styled.div`
  opacity: 0.5;
  ${({ theme }) => css`
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const RemoveRequestIcon = styled(Icons.Abort)`
  padding: 1px;
`;

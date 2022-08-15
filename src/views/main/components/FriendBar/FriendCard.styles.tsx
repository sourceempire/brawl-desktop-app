import React from 'react';
import { Animation } from 'common/ui-components';
import styled, { css } from 'styled-components/macro';
import simpleLoading from 'assets/animations/simple-loading.json';
import Icons from 'assets/icons/Icons';

export const FriendCard = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    padding: ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};

    :hover {
      outline: 1px solid ${theme.colors.lightTint};
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

const UserTagWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  ${({ theme }) => css`
    ${theme.textStyles.body}
    margin-left: ${theme.spacing.baseX2}px;
  `}
`;

const UserTagText = styled.div`
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

export const UserTag = ({ children }: { children: React.ReactNode }) => (
  <UserTagWrapper>
    <UserTagText>{children}</UserTagText>
  </UserTagWrapper>
);

export const RequestSentText = styled.div`
  opacity: 0.5;
  ${({ theme }) => css`
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const RemoveRequestIcon = styled(Icons.Abort)`
  padding: 1px;
`;

const LoadingAnimation = styled(Animation)`
  ${({ theme }) => css`
    width: ${theme.spacing.baseX5}px;
    height: ${theme.spacing.baseX4}px;
  `}
`;

export const SimpleLoading = () => <LoadingAnimation src={simpleLoading} />;

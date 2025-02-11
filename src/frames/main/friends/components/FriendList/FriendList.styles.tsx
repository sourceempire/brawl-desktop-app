import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UserCardSkeleton } from '../Shared.styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.base}px;
  `}
`;

export const Friends = styled.div`
  display: grid;
  ${({ theme }) => css`
    grid-gap: ${theme.spacing.base}px;
    margin-bottom: ${theme.spacing.baseX3}px;
  `}
`;

export const NoFriendsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.baseX8}px;
  `}
`;

export const NoFriendsText = styled.div`
  text-align: center;
  ${({ theme }) => css`
    ${theme.textStyles.body};
    margin-bottom: ${theme.spacing.baseX2}px;
  `};
`;

export const FriendListSkeleton = ({ cardCount }: { cardCount: number }) => (
  <>
    {Array(cardCount)
      .fill('')
      .map((_, index) => (
        <UserCardSkeleton key={index} />
      ))}
  </>
);

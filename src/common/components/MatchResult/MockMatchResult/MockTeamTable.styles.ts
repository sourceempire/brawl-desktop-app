import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { LeaderStar } from 'frames/main/friends/components/Shared.styles';

const tableCellHeight = 45;

export const Wrapper = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: 80% repeat(1, 1fr);
  grid-template-rows: repeat(6, ${tableCellHeight}px);
  width: 100%;
  font-size: 15px;
`;

export const TeamLogo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 6px;
`;

export const ProfileImage = styled.img`
  height: 33px;
  width: 33px;
  object-fit: contain;
  ${({ theme }) => css`
    margin-left: ${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const ProfileWrapper = styled.div`
  position: relative;
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
  `}
`;

export const TeamLeaderStar = styled(LeaderStar)`
  transform: translate(40%, 0%);
`;

type TableCellProps = {
  bold?: boolean;
};

export const TableCell = styled.div<TableCellProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, bold }) => css`
    ${bold &&
    css`
      font-weight: bold;
    `}

    :nth-of-type(1) {
      justify-content: flex-start;
    }

    :nth-of-type(4n + 3),
    :nth-of-type(4n + 4) {
      background-color: ${theme.colors.surfaceElement.base};
      border-radius: ${theme.borderRadius.default};
    }

    :nth-of-type(7n + 5) {
      color: ${theme.colors.accent.base};
    }
  `}
`;

export const TableHeader = styled(TableCell)``;

export const TableData = styled(TableCell)`
  position: relative;
`;

import styled from '@emotion/styled';
import { css } from '@emotion/react';

const tableCellHeight = 45;

export const Wrapper = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: 200px repeat(6, 1fr);
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
    margin-right: ${theme.spacing.baseX2}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;

type TableCellProps = {
  bold?: boolean;
};

export const TableCell = styled.div<TableCellProps>`
  display: flex;
  align-items: center;
  padding-right: 6px;

  ${({ theme, bold }) => css`
    ${bold &&
    css`
      font-weight: bold;
    `}
    :nth-child(7n + 1) {
      border-radius: ${theme.borderRadius.default};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-left: -6px;
      padding-left: 6px;
    }
    :nth-child(7n + 7) {
      border-radius: ${theme.borderRadius.default};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-right: -6px;
      padding-right: 6px;
    }

    :nth-child(14n + 8),
    :nth-child(14n + 9),
    :nth-child(14n + 10),
    :nth-child(14n + 11),
    :nth-child(14n + 12),
    :nth-child(14n + 13),
    :nth-child(14n + 14) {
      background-color: ${theme.colors.surface.base};
    }

    :nth-child(7n + 5) {
      color: ${theme.colors.accent.base};
    }
  `}
`;

export const TableHeader = styled(TableCell)``;

export const TableData = styled(TableCell)`
  position: relative;
`;

export const MVPCount = styled.div`
  position: relative;
  left: 1px;
  bottom: 10px;
  font-size: 11px;
`;

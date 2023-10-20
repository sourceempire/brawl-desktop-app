import styled from '@emotion/styled';
import { css } from '@emotion/react';

const tableCellHeight = 45;

export const Wrapper = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(1, 1fr);
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
    margin-left: ${theme.spacing.base}px;
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

    :nth-child(2),
    :nth-child(4),
    :nth-child(6) {
      background-color: ${theme.colors.surfaceElement.base};
      border-radius: ${theme.borderRadius.default};
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

import styled, { css } from 'styled-components/macro';
import { Button, Input } from 'common/components';
import { Select } from 'common/components/Select';
import SmallCross from 'assets/icons/SmallCross.svg';

export const Wrapper = styled.div`
  padding: 0 24px;
`;

export const TournamentGallery = styled.div<{ featuredExpanded: boolean }>`
  transition: transform 0.3s;
  transform: ${({ featuredExpanded }) =>
    featuredExpanded ? 'translateY(0)' : 'translateY(-166px)'};
  padding-bottom: 48px;
`;

export const FilterBar = styled.div`
  margin-top: 24px;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
`;

export const FilterBullets = styled.div<{ noChildren: boolean }>`
  ${({ noChildren }) =>
    noChildren &&
    css`
      height: 30px;
      margin-bottom: 6px;
    `}
`;

type FilterBulletProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const FilterBullet = styled.div<FilterBulletProps>`
  display: inline-block;
  margin-right: 6px;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  height: 30px;
  border-radius: 15px;
  min-width: 30px;
  line-height: 30px;
  padding-right: 18px;
  margin-bottom: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.hover};
  }

  &:before {
    content: url(${SmallCross});
    padding: 12px;
  }
`;

export const FilterControls = styled.div`
  display: flex;
`;

export const SearchInput = styled(Input)`
  display: inline-block;
  width: 166px;
  margin: 0 3px;
`;

export const FilterButton = styled(Button)`
  margin: 0 3px;
`;

export const FilterSort = styled(Select)`
  margin-left: 3px;
`;

export const TournamentList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 18px;
  row-gap: 18px;
`;

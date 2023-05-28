import styled, { css } from 'styled-components/macro';
import { Button, Icons, Input, Select } from 'common/ui';
import { TournamentHub } from 'types/tournaments/TournamentInfo';

export const FeaturedTournamentToggle = styled.div`
  ${(props) => props.theme.textStyles.menu}
  margin: 18px 0;
  display: flex;
  align-items: center;
`;

export const SelectArrow = styled(Icons.SelectArrow)<{ expanded: boolean }>`
  height: 8px;
  width: 8px;
  transform: ${({ expanded }) => (expanded ? 'rotate(0)' : 'rotate(-180deg)')};
  ${({ theme }) => css`
    fill: ${theme.colors.white};
    margin-left: ${theme.spacing.base}px;
  `}
`;

export const TournamentGallery = styled.div<{
  featuredTournamentHubs: TournamentHub[];
  featuredExpanded: boolean;
}>`
  transition: transform 0.3s;
  transform: ${({ featuredExpanded, featuredTournamentHubs }) =>
    featuredExpanded && featuredTournamentHubs ? 'translateY(0)' : 'translateY(-250px)'};
  padding-bottom: 48px;
`;

export const FilterBar = styled.div`
  margin-top: 24px;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
`;

export const FilterBullets = styled.div`
  min-height: 30px;
  max-width: 750px;
  margin-bottom: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const FilterBullet = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 15px;
  padding-left: 32px;
  padding-right: 18px;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary.base};

    :hover {
      background-color: ${theme.colors.secondary.hover};
    }
  `}
`;

export const CrossIcon = styled(Icons.Cross)`
  position: absolute;
  height: 8px;
  width: 8px;
  left: 12px;

  ${({ theme }) => css`
    fill: ${theme.colors.textSecondaryLight};
  `}
`;

export const FilterControls = styled.div`
  display: flex;
  gap: 6px;
`;

export const SearchInput = styled(Input)`
  display: inline-block;
  width: 166px;
`;

export const FilterButton = styled(Button)`
  fill: ${({ theme }) => theme.colors.white};
`;

export const FilterSort = styled(Select)``;

export const TournamentList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 18px;
  row-gap: 18px;
`;

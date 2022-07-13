import { Button, Input } from 'common/ui-components';
import styled from 'styled-components/macro';
import SmallCross from 'assets/icons/SmallCross.svg';

export const Wrapper = styled.div`
  padding: 0 24px;
  margin-bottom: 48px;
`;

type TournamentGalleryProps = {
  featuredExpanded: boolean;
};
export const TournamentGallery = styled.div<TournamentGalleryProps>`
  transition: transform 0.3s;
  transform: ${(props) => (props.featuredExpanded ? 'translateY(0)' : 'translateY(-166px)')};
`;

export const FilterBar = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

export const FilterBullets = styled.div``;

type FilterBulletProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const FilterBullet = styled.div<FilterBulletProps>`
  display: inline-block;
  margin-right: 6px;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 30px;
  border-radius: 15px;
  min-width: 30px;
  line-height: 30px;
  padding-right: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightTint};
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

export const TournamentList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 18px;
  row-gap: 18px;
`;

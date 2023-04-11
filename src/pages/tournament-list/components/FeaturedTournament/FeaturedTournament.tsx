import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
import { getTournamentModeShort } from 'utils/tournamentUtils';
import {
  Column1,
  Column2,
  Countdown,
  Hero,
  HeroWrapper,
  Info,
  Name,
  PrizePool,
  PrizePoolAmount,
  SelectArrow,
  TournamentInfo,
  VisibilityToggle,
  Wrapper
} from './FeaturedTournament.styles';

type Props = {
  tournamentInfo: TournamentHub;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FeaturedTournament({
  tournamentInfo,
  onClick,
  expanded,
  setExpanded
}: Props) {
  return (
    <Wrapper>
      <VisibilityToggle onClick={() => setExpanded((e) => !e)}>
        Featured Tournament
        <SelectArrow expanded={expanded} />
      </VisibilityToggle>
      <HeroWrapper>
        <Hero onClick={onClick} visible={expanded} image={tournamentInfo.image}>
          <Countdown>In 3 days</Countdown>
          <Info>
            <Column1>
              <Name>{tournamentInfo.name}</Name>
              <TournamentInfo>
                Starts {formatDateAndTime(tournamentInfo.startTime)} | Registration closes{' - '}
                {formatDateAndTime(tournamentInfo.registrationCloseTime)} | Entry fee €
                {tournamentInfo.entranceFee} / person | {getTournamentModeShort(tournamentInfo)}
              </TournamentInfo>
            </Column1>
            <Column2>
              <PrizePoolAmount>€{tournamentInfo.entranceFee}</PrizePoolAmount>
              <PrizePool>Prize Pool</PrizePool>
            </Column2>
          </Info>
        </Hero>
      </HeroWrapper>
    </Wrapper>
  );
}

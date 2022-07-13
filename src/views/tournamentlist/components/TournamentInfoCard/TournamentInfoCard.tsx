import { csgoMatchSettingsModeShortForm, isCSGOMatchSettings } from 'types/MatchSettings';
import { TournamentInfo } from 'types/tournaments/TournamentInfo';
import { capitalize } from 'utils/stringUtils';
import {
  Column1,
  Column2,
  Countdown,
  EntryFee,
  Game,
  Header,
  Info,
  Line,
  Name,
  NumberOfTeams,
  PrizePool,
  PrizePoolHeader,
  Region,
  Row1,
  Row2,
  Time,
  Wrapper
} from './TournamentInfoCard.styles';

type Props = {
  tournamentInfo: TournamentInfo;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
};

export default function TournamentInfoCard({ tournamentInfo, onClick }: Props) {
  return (
    <Wrapper padding={false} onClick={onClick}>
      <Header image={tournamentInfo.image}>
        <Countdown>In 14 days</Countdown>
      </Header>
      <Line />
      <Info>
        <Row1>
          <Column1>
            <Game>
              {tournamentInfo.gameName}
              {tournamentMatchSettings(tournamentInfo)}
            </Game>
            <Name>{tournamentInfo.name}</Name>
          </Column1>
          <Column2>
            <PrizePoolHeader>Prize Pool</PrizePoolHeader>
            <PrizePool>€{tournamentInfo.currentPrizePool}</PrizePool>
          </Column2>
        </Row1>
        <Row2>
          <Column1>
            <EntryFee>Entry Fee: €{tournamentInfo.entranceFee}</EntryFee>
            <Time>{new Date(tournamentInfo.startTime).toISOString()}</Time>
          </Column1>
          <Column2>
            <Region>{capitalize(tournamentInfo.region)}</Region>
            <NumberOfTeams>{tournamentInfo.teamsAllowed} Teams</NumberOfTeams>
          </Column2>
        </Row2>
      </Info>
    </Wrapper>
  );
}

function tournamentMatchSettings(tournamentInfo: TournamentInfo) {
  if (isCSGOMatchSettings(tournamentInfo.matchSettings)) {
    return ` (${csgoMatchSettingsModeShortForm(tournamentInfo.matchSettings.mode)})`;
  } else {
    return '';
  }
}

import { useBracketFeed } from 'api/feeds';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { isSingleElimination } from 'types/tournaments/Bracket';
import {
  BorderText,
  InfoWrapper,
  RoundInfo,
  StatusIcon,
  Tournament,
  TournamentName,
  TournamentStatus
} from './TournamentCard.styles';

type Props = {
  tournamentId: string;
  tournamentHubImage: string;
  isUserInTournament: boolean;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
};

const TournamentCard = ({
  tournamentId,
  tournamentHubImage,
  isUserInTournament,
  onClick
}: Props) => {
  const { tournament } = useTournamentFeed(tournamentId);
  const { brackets } = useBracketFeed(tournamentId);

  return (
    <Tournament
      image={tournamentHubImage}
      isUserInTournament={isUserInTournament}
      onClick={onClick}>
      {isUserInTournament ? <BorderText>Your tournament</BorderText> : null}
      {brackets && isSingleElimination(brackets) ? (
        <TournamentStatus>
          <StatusIcon isFinished={brackets.isFinished} />
          {brackets.isFinished ? 'Ended' : 'Ongoing'}
        </TournamentStatus>
      ) : null}
      <InfoWrapper>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        {brackets && isSingleElimination(brackets) ? (
          <RoundInfo>
            Round {brackets.currentRoundIndex + 1} of {brackets.numberOfRounds}
          </RoundInfo>
        ) : null}
      </InfoWrapper>
    </Tournament>
  );
};

export default TournamentCard;

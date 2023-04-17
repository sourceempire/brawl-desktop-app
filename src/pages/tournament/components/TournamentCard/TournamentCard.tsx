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
  const { bracket } = useBracketFeed(tournamentId);

  return (
    <Tournament
      image={tournamentHubImage}
      isUserInTournament={isUserInTournament}
      onClick={onClick}>
      {isUserInTournament ? <BorderText>Your tournament</BorderText> : null}
      {bracket && isSingleElimination(bracket) ? (
        <TournamentStatus>
          <StatusIcon isFinished={bracket.isFinished} />
          {bracket.isFinished ? 'Ended' : 'Ongoing'}
        </TournamentStatus>
      ) : null}
      <InfoWrapper>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        {bracket && isSingleElimination(bracket) ? (
          <RoundInfo>
            Round {bracket.currentRoundIndex + 1} of {bracket.numberOfRounds}
          </RoundInfo>
        ) : null}
      </InfoWrapper>
    </Tournament>
  );
};

export default TournamentCard;

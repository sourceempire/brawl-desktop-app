import { useEffect, useState } from 'react';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { getBracket } from 'api/requests/TournamentRequests';
import { Bracket as BracketType, isSingleElimination } from 'types/tournaments/Bracket';
import {
  InfoWrapper,
  RoundInfo,
  StatusIcon,
  StatusText,
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
  const [bracket, setBracket] = useState<BracketType>();

  useEffect(() => {
    getBracket(tournamentId)
      .then((result) => {
        setBracket(result.bracket);
      })
      .catch(console.error);
  }, [tournamentId]);

  return (
    <Tournament
      image={tournamentHubImage}
      isUserInTournament={isUserInTournament}
      onClick={onClick}>
      {isUserInTournament ? (
        <fieldset>
          <legend className="left right">Your tournament</legend>
        </fieldset>
      ) : null}
      {bracket && isSingleElimination(bracket) ? (
        <TournamentStatus>
          <StatusIcon isFinished={bracket.isFinished} />
          <StatusText>{bracket.isFinished ? 'Ended' : 'Ongoing'}</StatusText>
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

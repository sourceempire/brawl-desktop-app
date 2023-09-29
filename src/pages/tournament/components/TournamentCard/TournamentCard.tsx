import useBracketFeed from 'api/feeds/hooks/useBracketFeed';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { isSingleElimination } from 'types/tournaments/Bracket';
import {
  BorderText,
  InfoWrapper,
  RoundInfo,
  StatusIcon,
  StyledImage,
  Wrapper,
  TournamentName,
  TournamentStatus
} from './TournamentCard.styles';

type Props = {
  tournamentId: string;
  imageId: string;
  isUserInTournament: boolean;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
};

const TournamentCard = ({ tournamentId, imageId, isUserInTournament, onClick }: Props) => {
  const { tournament } = useTournamentFeed({ tournamentId });
  const { bracket, isLoading } = useBracketFeed({ tournamentId });

  return (
    <Wrapper isUserInTournament={isUserInTournament} onClick={onClick}>
      <StyledImage imageId={imageId} />
      {isUserInTournament ? <BorderText>Your tournament</BorderText> : null}
      {!isLoading && isSingleElimination(bracket) ? (
        <TournamentStatus>
          <StatusIcon isFinished={bracket.isFinished} />
          {bracket.isFinished ? 'Ended' : 'Ongoing'}
        </TournamentStatus>
      ) : null}
      <InfoWrapper>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        {!isLoading && isSingleElimination(bracket) ? (
          <RoundInfo>
            Round {bracket.currentRoundIndex + 1} of {bracket.numberOfRounds}
          </RoundInfo>
        ) : null}
      </InfoWrapper>
    </Wrapper>
  );
};

export default TournamentCard;

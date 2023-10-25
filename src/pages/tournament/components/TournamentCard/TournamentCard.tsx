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
  TournamentStatus,
  ImageContainer
} from './TournamentCard.styles';

type Props = {
  tournamentId: string;
  imageId: string;
  isUserInTournament: boolean;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
};

const TournamentCard = ({ tournamentId, imageId, isUserInTournament, onClick }: Props) => {
  const { tournament, isLoading: isLoadingTournament } = useTournamentFeed({ tournamentId });
  const { bracket, isLoading: isLoadingBraket } = useBracketFeed({ tournamentId });

  if (isLoadingTournament || isLoadingBraket) return null;

  return (
    <Wrapper isUserInTournament={isUserInTournament} onClick={onClick}>
      <ImageContainer>
        <StyledImage imageId={imageId} />
      </ImageContainer>

      {isUserInTournament ? <BorderText>Your tournament</BorderText> : null}
      {!isLoadingBraket && isSingleElimination(bracket) ? (
        <TournamentStatus>
          <StatusIcon isFinished={bracket.isFinished} />
          {bracket.isFinished ? 'Ended' : 'Ongoing'}
        </TournamentStatus>
      ) : null}
      <InfoWrapper>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        {!isLoadingBraket && isSingleElimination(bracket) ? (
          <RoundInfo>
            Round {bracket.currentRoundIndex + 1} of {bracket.numberOfRounds}
          </RoundInfo>
        ) : null}
      </InfoWrapper>
    </Wrapper>
  );
};

export default TournamentCard;

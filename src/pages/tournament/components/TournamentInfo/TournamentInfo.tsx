import { useBracketFeed } from 'api/feeds';
import { isSingleElimination } from 'types/tournaments/Bracket';
import { Tournament } from 'types/tournaments/TournamentInfo';
import CountDown from '../CountDown';
import { TeamContainer } from './TeamContainer';
import { MiddleInfo, SmallText, TournamentName, Wrapper } from './TournamentInfo.styles';

type Props = {
  tournament: Tournament;
  currentMatchId: string | null;
};

const TournamentInfo = ({ tournament, currentMatchId }: Props) => {
  const { bracket, isLoading } = useBracketFeed({ tournamentId: tournament.id });

  return (
    <Wrapper>
      {currentMatchId ? (
        <TeamContainer currentMatchId={currentMatchId} teamNumber={1} gameId={tournament.gameId} />
      ) : (
        <div />
      )}

      <MiddleInfo>
        <TournamentName>
          {tournament.name} {tournament.tournamentNumber}
        </TournamentName>
        {!isLoading && isSingleElimination(bracket) ? (
          <SmallText>
            Round {bracket.currentRoundIndex + 1} of {bracket.numberOfRounds} starts in
          </SmallText>
        ) : null}
        <CountDown startTime={tournament.startTime} />
      </MiddleInfo>

      {currentMatchId ? (
        <TeamContainer currentMatchId={currentMatchId} teamNumber={2} gameId={tournament.gameId} />
      ) : (
        <div />
      )}
    </Wrapper>
  );
};

export default TournamentInfo;

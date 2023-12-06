import { useBracketFeed } from 'api/feeds';
import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { useParams } from 'react-router-dom';
import { isSingleElimination } from 'types/tournaments/Bracket';
import Bracket from '../Bracket';
import { Wrapper } from './SpectatorView.styles';
import PageContainer from 'common/components/PageContainer';
import { Tab, Tabs } from 'common/ui';

export function SpectatorView() {
  return (
    <PageContainer>
      <Tabs underlined={true}>
        <Tab name="Brackets">
          <Page />
        </Tab>
        <Tab name="Prizes">
          <Page />
        </Tab>
      </Tabs>
    </PageContainer>
  );
}

function Page() {
  const { tournamentId } = useParams() as { tournamentId: string };

  const { tournament, isLoading: isLoadingTournament } = useTournamentFeed({ tournamentId });
  const { bracket, isLoading: isLoadingBracket } = useBracketFeed({ tournamentId });

  if (isLoadingTournament || isLoadingBracket) return null;

  return (
    <Wrapper>
      {!isLoadingBracket && isSingleElimination(bracket) ? (
        <Bracket tournamentId={tournament.id} />
      ) : null}
    </Wrapper>
  );
}

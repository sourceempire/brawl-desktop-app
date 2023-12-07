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
          <BracketsContent />
        </Tab>
        <Tab name="Prizes">
          <PrizesContent />
        </Tab>
      </Tabs>
    </PageContainer>
  );
}

function BracketsContent() {
  const { tournamentId } = useParams() as { tournamentId: string };

  const { tournament, isLoading: isLoadingTournament } = useTournamentFeed({ tournamentId });
  const { bracket, isLoading: isLoadingBracket } = useBracketFeed({ tournamentId });

  if (isLoadingTournament) return null;

  // ADD SKELETON
  if (isLoadingBracket) return null;

  return (
    <Wrapper>
      {isSingleElimination(bracket) ? <Bracket tournamentId={tournament.id} /> : null}
    </Wrapper>
  );
}

function PrizesContent() {
  return <Wrapper>This is the prizes page</Wrapper>;
}

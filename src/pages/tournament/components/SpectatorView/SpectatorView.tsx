import useTournamentFeed from 'api/feeds/hooks/useTournamentFeed';
import { useParams } from 'react-router-dom';
import Bracket from '../Bracket';
import { Wrapper } from './SpectatorView.styles';
import PageContainer from 'common/components/PageContainer';
import { Tab, Tabs } from 'common/ui';
import { Prizes } from '../Prizes';

type Props = {
  tournamentId: string;
};

export const SpectatorView = () => {
  const { tournamentId } = useParams() as { tournamentId: string };

  const { tournament, isLoading: isLoadingTournament } = useTournamentFeed({ tournamentId });

  if (isLoadingTournament) return null;

  return (
    <PageContainer>
      <Tabs underlined={true}>
        <Tab name="Brackets">
          <BracketsContent tournamentId={tournament.id} />
        </Tab>
        <Tab name="Prizes">
          <PrizesContent tournamentId={tournament.id} />
        </Tab>
      </Tabs>
    </PageContainer>
  );
};

const BracketsContent = ({ tournamentId }: Props) => {
  return (
    <Wrapper>
      <Bracket tournamentId={tournamentId} />
    </Wrapper>
  );
};

const PrizesContent = ({ tournamentId }: Props) => {
  return (
    <Wrapper>
      <Prizes tournamentId={tournamentId} />
    </Wrapper>
  );
};

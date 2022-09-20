import useNewsFeed, { News as NewsType } from 'api/feeds/hooks/useNewsFeed';
import Game, { GameName } from 'types/Game';
import { CSGOMatchSettings } from 'types/MatchSettings';
import { TournamentInfo } from 'types/tournaments/TournamentInfo';
import Hero from '../Hero/Hero';
import LatestWinners from '../LatestWinners/LatestWinners';
import News from '../News/News';
import { PromotedTournament, Wrapper } from './HomePage.styles';

const HomePage = () => {
  // const { news: newsList } = useNewsFeed();

  return (
    <Wrapper>
      <PromotedTournament tournamentInfo={exampleTournamentInfo()}></PromotedTournament>
      <Hero></Hero>
      <LatestWinners></LatestWinners>
      {/* {newsList.map((news) => (
        <News key={news.id} news={news as NewsType}></News>
      ))} */}
    </Wrapper>
  );
};

const exampleTournamentInfo = (): TournamentInfo => ({
  id: 'eee18f6d-2a99-4176-b01d-271e12836929',
  name: 'Sweden Masters Invitational',
  gameId: '4747a477-3445-4b0a-9db9-bf0e68238208',
  gameName: GameName[Game.CSGO],
  startTime: '2022-09-29 14:30:00',
  entranceFee: '50.00',
  matchSettings: { __type: 'csgo', mode: 'competitive', seriesType: 'bo1' } as CSGOMatchSettings,
  currentPrizePool: '200.00',
  region: 'Europe',
  teamsAllowed: 4,
  teamSize: 5,
  lockTime: 10 * 60,
  registrationClosed: false,
  image: 'https://picsum.photos/600/200?random=9'
});

export default HomePage;

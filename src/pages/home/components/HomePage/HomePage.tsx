// import useNewsFeed, { News as NewsType } from 'api/feeds/hooks/useNewsFeed';
import { useFeaturedTourmanentsFeed } from 'api/feeds';
import { useNavigate } from 'react-router-dom';
import PageContainer from 'common/components/PageContainer';
import Hero from '../Hero/Hero';
import LatestWinners from '../LatestWinners/LatestWinners';

// import News from '../News/News';
import { PromotedTournament, Wrapper } from './HomePage.styles';

const HomePage = () => {
  const navigate = useNavigate();

  // const { news: newsList } = useNewsFeed();
  const { featuredTournamentHubs } = useFeaturedTourmanentsFeed();
  const shownTournamentHub = featuredTournamentHubs.length > 0 ? featuredTournamentHubs[0] : null;

  return (
    <PageContainer>
      <Wrapper>
        {shownTournamentHub && (
          <PromotedTournament
            tournamentInfo={shownTournamentHub}
            onClick={() => navigate(`tournaments/hub/${shownTournamentHub.id}`)}
          />
        )}
        <Hero></Hero>
        <LatestWinners></LatestWinners>

        {/* {newsList.map((news) => (
        <News key={news.id} news={news as NewsType}></News>
      ))} */}
      </Wrapper>
    </PageContainer>
  );
};

export default HomePage;

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

  return (
    <PageContainer>
      <Wrapper>
        {featuredTournamentHubs?.[0] && (
          <PromotedTournament
            tournamentInfo={featuredTournamentHubs[0]}
            onClick={() => navigate(`tournaments/hub/${featuredTournamentHubs[0].id}`)}
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

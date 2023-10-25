// import useNewsFeed, { News as NewsType } from 'api/feeds/hooks/useNewsFeed';
import { useFeaturedTourmanentsFeed } from 'api/feeds';
import { useNavigate } from 'react-router-dom';
import PageContainer from 'common/components/PageContainer';
import Hero from '../Hero/Hero';
import LatestWinners from '../LatestWinners/LatestWinners';

import { DatePicker } from '@sourceempire/brawl-ui';
// import News from '../News/News';
import { PromotedTournament, Wrapper } from './HomePage.styles';
import { useState } from 'react';

const HomePage = () => {
  const navigate = useNavigate();

  // const { news: newsList } = useNewsFeed();
  const { featuredTournamentHubs } = useFeaturedTourmanentsFeed();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

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
        <DatePicker selectedDate={selectedDate} onChange={(date) => setSelectedDate(date)} />

        {/* {newsList.map((news) => (
        <News key={news.id} news={news as NewsType}></News>
      ))} */}
      </Wrapper>
    </PageContainer>
  );
};

export default HomePage;

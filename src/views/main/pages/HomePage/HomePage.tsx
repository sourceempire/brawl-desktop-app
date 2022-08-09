import { useEffect } from 'react';
import useNewsFeed from 'api/feeds/hooks/useNewsFeed';
import { notify } from 'common/notification';
import { Wrapper } from './HomePage.styles';

const HomePage = () => {
  const { news, isLoading: isLoadingNews } = useNewsFeed();

  useEffect(() => {
    notify.info('Testing errorrs');
  }, []);

  return (
    <Wrapper>
      <p>Main View</p>
      <p>Version: {process.env.REACT_APP_VERSION}</p>
      <br />
      <br />
      <br />
      <br />
      <p>Testing news feed: (Printing titles)</p>
      <br />
      <br />
      {isLoadingNews ? (
        <p>Loading News</p>
      ) : (
        <ul>
          {news.map((newsSingular) => (
            <li key={newsSingular.id}>{newsSingular.title}</li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default HomePage;

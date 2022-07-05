import useNewsFeed from 'api/feeds/hooks/useNewsFeed';
import { useAuth } from 'api/requests';
import { Wrapper } from './HomePage.styles';

const HomePage = () => {
  const { logout } = useAuth();

  const { news, isLoading: isLoadingNews } = useNewsFeed();

  return (
    <Wrapper>
      <p>Main View</p>
      <p>Version: {process.env.REACT_APP_VERSION}</p>
      <button onClick={logout}>Log out</button>
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

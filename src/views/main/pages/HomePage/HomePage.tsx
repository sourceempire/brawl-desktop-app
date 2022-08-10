import { useEffect } from 'react';
import useNewsFeed from 'api/feeds/hooks/useNewsFeed';
import notify from 'common/notifications';
import styled from 'styled-components';
import { Wrapper } from './HomePage.styles';
import Icons from 'assets/icons/Icons';

const HomePage = () => {
  const { news, isLoading: isLoadingNews } = useNewsFeed();

  useEffect(() => {
    notify.info('Message', { timer: 3000 });
    notify.error('ERROR', { timer: 4000 });
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
      <IconGallery>
        {Object.values(Icons).map((Icon) => (
          <span
            key={Icon.displayName}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '11px',
              width: '48px',
              padding: '6px',
              textAlign: 'center',
              overflowWrap: 'anywhere'
            }}>
            <Icon
              style={{ width: '24px', height: '24px', margin: '6px' }}
              fill="#fff"
              fillOpacity="1"
            />
            <span>{Icon.displayName}</span>
          </span>
        ))}
      </IconGallery>
    </Wrapper>
  );
};

// Only temp, but cool nontheless
const IconGallery = styled.div`
  @keyframes colors {
    0% {
      fill: white;
    }
    25% {
      fill: ${({ theme }) => theme.colors.primary};
    }
    50% {
      fill: ${({ theme }) => theme.colors.accent};
    }
    75% {
      fill: ${({ theme }) => theme.colors.secondary};
    }
    100% {
      fill: white;
    }
  }

  svg {
    animation-name: colors;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
`;

export default HomePage;

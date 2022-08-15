import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { Title } from './FriendBar.styles';
import { Wrapper } from './Friends.styles';

const Friends = () => {
  const { user: loggedInUser } = useLoggedInUser();

  return (
    <Wrapper>
      <Title>Friends 1/3</Title>
    </Wrapper>
  );
};

export default Friends;

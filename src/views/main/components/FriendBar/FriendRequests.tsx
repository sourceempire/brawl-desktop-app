import { useState } from 'react';
import useFriendRequestFeed from 'api/feeds/hooks/useFriendRequestsFeed';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { Title } from './FriendBar.styles';
import FriendRequestCard from './FriendRequestCard';
import { ArrowDown, Wrapper } from './FriendRequests.styles';

const FriendRequests = () => {
  const { user: loggedInUser } = useLoggedInUser();
  const { requestUsers, isLoading } = useFriendRequestFeed({ userId: loggedInUser.id });
  const [isExpanded, setExpanded] = useState(true);

  if (isLoading) return null;
  if (requestUsers.length < 1) return null;

  const numberOfRequests = requestUsers.length;

  return (
    <Wrapper isExpanded={isExpanded}>
      <Title onClick={() => setExpanded(!isExpanded)}>
        Friend Requests ({numberOfRequests})
        <ArrowDown />
      </Title>
      {requestUsers.map((user) => (
        <FriendRequestCard key={user.id} user={user} />
      ))}
    </Wrapper>
  );
};

export default FriendRequests;

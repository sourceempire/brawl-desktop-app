import { useState } from 'react';
import { acceptFriendRequest, declineFriendRequest } from 'api/requests/FriendRequests';
import popup from 'common/popup';
import { Icons } from 'common/ui';
import { PublicUser } from 'types/user/User';
import { UserTag } from '../FriendCard/FriendCard.styles';
import { ProfileImage, SimpleLoading, UserCard } from '../Shared.styles';
import { AcceptAction, DeclineAction, RequestActions } from './FriendRequestCard.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';
import { theme } from 'assets/styles/Theme';

type Props = {
  user: PublicUser;
};

const FriendRequestCard = ({ user }: Props) => {
  const [isLoadingRequest, setLoadingRequest] = useState(false);

  const makeRequest = async (request: typeof acceptFriendRequest) => {
    setLoadingRequest(true);
    try {
      await request(user.id);
    } catch (error) {
      setLoadingRequest(false);
      console.error(error);
      popup.error('Something went wrong');
    }
  };

  return (
    <UserCard>
      <ProfileImage src={tempProfileImage} />
      <UserTag>{user.userTag}</UserTag>
      {isLoadingRequest ? (
        <SimpleLoading />
      ) : (
        <RequestActions>
          <AcceptAction
            onClick={() => makeRequest(acceptFriendRequest)}
            icon={<Icons.Check />}
            isCircle
          />
          <DeclineAction
            onClick={() => makeRequest(declineFriendRequest)}
            icon={<Icons.Cross fill={theme.colors.white} height={14} />}
            isCircle
          />
        </RequestActions>
      )}
    </UserCard>
  );
};

export default FriendRequestCard;

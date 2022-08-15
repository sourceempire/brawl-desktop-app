import { useState } from 'react';
import {
  type FriendRequest,
  acceptFriendRequest,
  declineFriendRequest
} from 'api/requests/FriendRequests';
import { PublicUser } from 'api/requests/UserRequests';
import notify from 'common/notifications';
import { ProfileImage } from './FriendBar.styles';
import { FriendCard, SimpleLoading, UserTag } from './FriendCard.styles';
import { AcceptAction, DeclineAction, RequestActions } from './FriendRequestCard.styles';
import Icons from 'assets/icons/Icons';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  user: PublicUser;
};

const FriendRequestCard = ({ user }: Props) => {
  const [isLoading, setLoading] = useState(false);

  const makeRequest = async (request: FriendRequest) => {
    setLoading(true);
    try {
      await request(user.id);
    } catch (error) {
      setLoading(false);
      console.error(error);
      notify.error('Something went wrong');
    }
  };

  return (
    <FriendCard key={user.id}>
      <ProfileImage src={tempProfileImage} />
      <UserTag>{user.userTag}</UserTag>
      {isLoading ? (
        <SimpleLoading />
      ) : (
        <RequestActions>
          <AcceptAction
            onClick={() => makeRequest(acceptFriendRequest)}
            icon={<Icons.Check />}
            size="small"
            isCircle
          />
          <DeclineAction
            onClick={() => makeRequest(declineFriendRequest)}
            icon={<Icons.Cross />}
            size="small"
            isCircle
          />
        </RequestActions>
      )}
    </FriendCard>
  );
};

export default FriendRequestCard;

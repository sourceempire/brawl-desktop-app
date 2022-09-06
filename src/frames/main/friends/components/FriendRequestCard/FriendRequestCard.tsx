import { useState } from 'react';
import {
  type FriendRequest,
  acceptFriendRequest,
  declineFriendRequest
} from 'api/requests/FriendRequests';
import { PublicUser } from 'api/requests/UserRequests';
import EllipsisText from 'common/components/EllipsisText';
import popup from 'common/popup';
import { ProfileImage, SimpleLoading, UserCard } from '../Shared.styles';
import { AcceptAction, DeclineAction, RequestActions } from './FriendRequestCard.styles';
import Icons from 'assets/icons/Icons';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  user: PublicUser;
};

const FriendRequestCard = ({ user }: Props) => {
  const [isLoadingRequest, setLoadingRequest] = useState(false);

  const makeRequest = async (request: FriendRequest) => {
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
      <EllipsisText>{user.userTag}</EllipsisText>
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
            icon={<Icons.Cross />}
            isCircle
          />
        </RequestActions>
      )}
    </UserCard>
  );
};

export default FriendRequestCard;

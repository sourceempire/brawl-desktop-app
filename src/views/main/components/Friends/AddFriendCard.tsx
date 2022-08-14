import { PotentialFriend, sendFriendRequest } from 'api/requests/FriendRequests';
import ActionButton from 'common/ui-components/components/ActionButton';
import {
  RemoveRequestIcon,
  RequestSentText,
  UserImage,
  UserTag,
  UserTagWrapper,
  Wrapper
} from './AddFriendCard.styles';
import Icons from 'assets/icons/Icons';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  user: PotentialFriend;
  onFriendRequestSuccess: () => void;
};

export const AddFriendCard = ({ user, onFriendRequestSuccess }: Props) => {
  const sendRequest = (requestFriendId: string) => {
    sendFriendRequest(requestFriendId).then(onFriendRequestSuccess).catch(console.error);
  };

  return (
    <Wrapper>
      <UserImage src={tempProfileImage} />
      <UserTagWrapper>
        <UserTag>{user.userTag}</UserTag>
      </UserTagWrapper>

      {user.isRequestSent ? (
        <>
          <RequestSentText>Request sent</RequestSentText>
          <ActionButton
            icon={<RemoveRequestIcon />}
            onClick={() => console.log('revert friend request')}
            hint="Remove request"
          />
        </>
      ) : (
        <ActionButton icon={<Icons.AddFriend />} onClick={() => sendRequest(user.id)} />
      )}
    </Wrapper>
  );
};

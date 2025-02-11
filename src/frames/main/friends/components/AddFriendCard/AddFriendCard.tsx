import { useEffect, useState } from 'react';
import {
  PotentialFriend,
  cancelFriendRequest,
  sendFriendRequest
} from 'api/requests/FriendRequests';
import popup from 'common/popup';
import { ActionButton } from 'common/ui';
import { ProfileImage, SimpleLoading, UserCard } from '../Shared.styles';
import { RequestSentText, UserTag } from './AddFriendCard.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';
import { Icons } from '@sourceempire/brawl-ui';

type Props = {
  user: PotentialFriend;
  onFriendRequestSuccess: () => void;
  onFriendRequestCancel: () => void;
};

export const AddFriendCard = ({ user, onFriendRequestSuccess, onFriendRequestCancel }: Props) => {
  const [isSendingRequest, setSendingRequest] = useState(false);
  const [isCancelingRequest, setCancelingRequest] = useState(false);

  const handleError = (error: unknown) => {
    console.error(error);
    popup.error('Something went wrong', { timer: 5000 });
    setSendingRequest(false);
  };

  const sendRequest = async () => {
    setSendingRequest(true);
    try {
      await sendFriendRequest(user.id);
      onFriendRequestSuccess();
    } catch (error) {
      setSendingRequest(true);
      handleError(error);
    }
  };

  const cancelRequest = async () => {
    setCancelingRequest(true);
    try {
      await cancelFriendRequest(user.id);
      onFriendRequestCancel();
    } catch (error) {
      setCancelingRequest(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (user.isRequestSent && isSendingRequest) {
      setSendingRequest(false);
    }
  }, [isSendingRequest, user.isRequestSent]);

  useEffect(() => {
    if (!user.isRequestSent && isCancelingRequest) {
      setCancelingRequest(false);
    }
  }, [isCancelingRequest, user.isRequestSent]);

  return (
    <UserCard>
      <ProfileImage size="small" src={tempProfileImage} />
      <UserTag>{user.userTag}</UserTag>

      {isSendingRequest || isCancelingRequest ? (
        <SimpleLoading />
      ) : user.isRequestSent ? (
        <>
          <RequestSentText>Request pending</RequestSentText>
          <ActionButton icon={<Icons.UserMinus />} onClick={cancelRequest} hint="Cancel request" />
        </>
      ) : (
        <ActionButton hint="Add friend" icon={<Icons.UserPlus />} onClick={sendRequest} />
      )}
    </UserCard>
  );
};

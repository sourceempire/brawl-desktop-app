import { forwardRef, useImperativeHandle } from 'react';
import { useUserStatusFeed } from 'api/feeds';
import { PublicUser } from 'api/requests/UserRequests';
import { useUpdateEffect } from 'utils/hooks';
import { UserStatusEnum } from '../UserStatus';
import { ProfileImage } from './FriendBar.styles';
import { FriendUserCard, FriendUserStatus, ProfileImageWrapper } from './FriendCard.styles';
import { UserTag } from './Shared.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type FriendCardRef = {
  status: UserStatusEnum;
};

type Props = {
  user: PublicUser;
  onStatusChange: () => void;
};

const FriendCard = ({ user, onStatusChange }: Props, ref: React.ForwardedRef<FriendCardRef>) => {
  const { isLoading: isLoadingStatus, status } = useUserStatusFeed({ userId: user.id });

  useImperativeHandle(ref, () => ({ status }));

  useUpdateEffect(() => {
    onStatusChange();
  }, [status]);

  if (isLoadingStatus) return null;

  return (
    <FriendUserCard status={status}>
      <ProfileImageWrapper>
        <ProfileImage src={tempProfileImage} />
        <FriendUserStatus status={status} hideText />
      </ProfileImageWrapper>

      <UserTag>{user.userTag}</UserTag>
    </FriendUserCard>
  );
};

export default forwardRef(FriendCard);

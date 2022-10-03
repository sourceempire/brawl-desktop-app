import { useUserFeed } from 'api/feeds';
import { UserId } from 'types/user/User';
import { PlayerProfileImage, UserTag } from './PlayerInfo.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  userId: UserId;
};

const PlayerInfo = ({ userId }: Props) => {
  const { user, isLoading } = useUserFeed({ userId });

  if (isLoading) return null;

  return (
    <>
      <PlayerProfileImage src={tempProfileImage} size="large" />
      <UserTag>{user.userTag}</UserTag>
    </>
  );
};

export default PlayerInfo;

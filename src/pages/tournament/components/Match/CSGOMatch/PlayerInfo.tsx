import { useUserFeed } from 'api/feeds';
import { UserId } from 'types/user/User';
import { PlayerProfileImage, UserTag } from './PlayerInfo.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  userId: UserId;
  transparent: boolean;
};

const PlayerInfo = ({ userId, transparent }: Props) => {
  const { user, isLoading } = useUserFeed({ userId });

  if (isLoading) return null;

  return (
    <>
      <PlayerProfileImage src={tempProfileImage} size="large" transparent={transparent} />
      <UserTag transparent={transparent}>{user.userTag}</UserTag>
    </>
  );
};

export default PlayerInfo;

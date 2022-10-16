import { useUserFeed } from 'api/feeds';
import { UserId } from 'types/user/User';
import { LeaderIcon, PlayerProfileImage, ProfileImageWrapper, UserTag } from './PlayerInfo.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  userId: UserId;
  transparent: boolean;
  reversed?: boolean;
};

const PlayerInfo = ({ userId, transparent, reversed }: Props) => {
  const { user, isLoading } = useUserFeed({ userId });

  if (isLoading) return null;

  return (
    <>
      <ProfileImageWrapper>
        <LeaderIcon reversed={reversed} />
        <PlayerProfileImage src={tempProfileImage} size="large" transparent={transparent} />
      </ProfileImageWrapper>
      <UserTag transparent={transparent}>{user.userTag}</UserTag>
    </>
  );
};

export default PlayerInfo;

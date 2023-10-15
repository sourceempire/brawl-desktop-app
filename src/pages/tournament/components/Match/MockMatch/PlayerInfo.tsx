import { useUserFeed } from 'api/feeds';
import { UserId } from 'types/user/User';
import { LeaderIcon, PlayerProfileImage, ProfileImageWrapper, UserTag } from './PlayerInfo.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  userId: UserId;
  isLeader: boolean;
  transparent?: boolean;
  reversed?: boolean;
};

const PlayerInfo = ({ userId, isLeader, transparent, reversed }: Props) => {
  const { user, isLoading } = useUserFeed({ userId });

  if (isLoading) return null;

  return (
    <>
      <ProfileImageWrapper>
        <PlayerProfileImage
          src={user.imageUrl ? user.imageUrl : tempProfileImage}
          size="large"
          transparent={transparent}
        />
        {isLeader && <LeaderIcon reversed={reversed} />}
      </ProfileImageWrapper>
      <UserTag transparent={transparent} reversed={reversed}>
        {user.userTag}
      </UserTag>
    </>
  );
};

export default PlayerInfo;

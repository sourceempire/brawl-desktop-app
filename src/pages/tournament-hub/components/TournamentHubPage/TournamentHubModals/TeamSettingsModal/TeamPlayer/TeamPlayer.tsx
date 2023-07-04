import { usePartyFeed, useUserFeed } from 'api/feeds';
import { LeaderStar, ProfileImage, Wrapper } from './TeamPlayer.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  userId: string;
};

const TeamSettingsModal = ({ userId }: Props) => {
  const { user } = useUserFeed({ userId });
  const { party } = usePartyFeed();

  const isLeader = userId === party.leaderId;

  if (!user) return null;

  return (
    <Wrapper>
      {isLeader && <LeaderStar />}
      <ProfileImage src={user.imageUrl ? user.imageUrl : tempProfileImage} />
    </Wrapper>
  );
};

export default TeamSettingsModal;

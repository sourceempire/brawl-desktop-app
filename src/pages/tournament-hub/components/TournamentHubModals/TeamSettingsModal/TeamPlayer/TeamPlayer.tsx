import { usePartyFeed, useUserFeed } from 'api/feeds';
import { PlayerProfileImage, Wrapper } from './TeamPlayer.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';
import { LeaderStar } from 'frames/main/friends/components/Shared.styles';

type Props = {
  userId: string;
};

const TeamPlayer = ({ userId }: Props) => {
  const { user } = useUserFeed({ userId });
  const { party } = usePartyFeed();

  const isLeader = party ? userId === party.leaderId : userId;

  if (!user) return null;

  return (
    <Wrapper>
      {isLeader && <LeaderStar size="medium" />}
      <PlayerProfileImage src={user.imageUrl ? user.imageUrl : tempProfileImage} />
    </Wrapper>
  );
};

export default TeamPlayer;

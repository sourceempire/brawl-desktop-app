import { ImageSkeleton, TextSkeletion, TimeAgoSkeletion, Wrapper } from './NotificationCard.styles';

export const NotificationCardSkeletion = () => {
  return (
    <Wrapper isRead>
      <ImageSkeleton />
      <div>
        <TextSkeletion />
        <TimeAgoSkeletion />
      </div>
    </Wrapper>
  );
};

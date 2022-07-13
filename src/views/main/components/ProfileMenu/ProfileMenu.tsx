import {
  ArrowIcon,
  ProfileImagePlaceholder,
  UserStatusPlaceholder,
  Wrapper
} from './ProfileMenu.styles';

const ProfileMenu = () => {
  return (
    <Wrapper>
      <ArrowIcon />
      <ProfileImagePlaceholder>
        <UserStatusPlaceholder />
      </ProfileImagePlaceholder>
    </Wrapper>
  );
};

export default ProfileMenu;

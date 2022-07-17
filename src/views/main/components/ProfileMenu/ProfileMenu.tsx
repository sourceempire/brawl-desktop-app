import { useState } from 'react';
import { useAuth } from 'api/requests';
import ContextMenu from 'common/ui-components/components/ContextMenu';
import {
  ArrowIcon,
  MenuItem,
  ProfileImagePlaceholder,
  UserStatusPlaceholder,
  Wrapper
} from './ProfileMenu.styles';

/**
 * TODO -> Make the position of the context menu dynamic
 *
 * TODO -> Make the context menu hide when clicking the profile image if the context menu is shown
 */
const ProfileMenu = () => {
  const { logout } = useAuth();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <Wrapper onClick={() => setShowMenu(true)}>
        <ArrowIcon />
        <ProfileImagePlaceholder>
          <UserStatusPlaceholder />
        </ProfileImagePlaceholder>
      </Wrapper>
      {showMenu && (
        <ContextMenu
          position={{ right: 24, top: 80 }}
          arrowPosition={{ right: 20 }}
          onClickOutside={() => setShowMenu(false)}>
          <MenuItem onClick={logout}>Log out</MenuItem>
        </ContextMenu>
      )}
    </>
  );
};

export default ProfileMenu;

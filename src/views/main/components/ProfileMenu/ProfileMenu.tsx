import { useState } from 'react';
import ContextMenu from 'common/ui-components/components/ContextMenu';
import {
  ArrowIcon,
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
          Hello There
        </ContextMenu>
      )}
    </>
  );
};

export default ProfileMenu;

import { useRef, useState } from 'react';
import { UserRequests } from 'api/requests';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { ContextMenu } from 'common/components';
import { Position } from 'common/components/ContextMenu/ContextMenu.types';
import popup from 'common/popup';
import { Avatar } from 'types/user/User';
import {
  AvatarImage,
  ImageContainer,
  RemoveButton,
  RemoveButtonIcon,
  Wrapper
} from './AvatarChoice.styles';

type Props = {
  avatar: Avatar;
  onClick: (avatarId: string) => void;
};

const AvatarChoice = ({ avatar, onClick }: Props) => {
  const user = useLoggedInUser();

  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const [showImageMenu, setShowImageMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<Position>({ left: 0, top: 0 });

  const handleContextMenu = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setMenuPosition({ left: event.clientX, top: event.clientY });
    setShowImageMenu(true);
  };

  const removeImage = () => {
    UserRequests.deleteAvatar(avatar.id).catch((error) => popup.error(error.error));
  };

  return (
    <>
      <Wrapper disabled={user.imageUrl === avatar.imageUrl}>
        <ImageContainer>
          <AvatarImage
            ref={imageRef}
            src={avatar.imageUrl}
            onClick={() => onClick(avatar.id)}
            onContextMenu={handleContextMenu}
          />
        </ImageContainer>

        <RemoveButton disabled={avatar.default} onClick={removeImage}>
          <RemoveButtonIcon />
        </RemoveButton>
      </Wrapper>

      {showImageMenu && !avatar.default && (
        <ContextMenu
          position={menuPosition}
          onClickOutside={() => setShowImageMenu(false)}
          ignoredElementOnClickOutside={imageRef.current}>
          <div>Hej</div>
        </ContextMenu>
      )}
    </>
  );
};

export default AvatarChoice;

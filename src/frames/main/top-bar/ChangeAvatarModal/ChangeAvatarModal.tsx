import { useEffect, useMemo, useState } from 'react';
import useUserAvatarsFeed from 'api/feeds/hooks/useUserAvatarsFeed';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import * as UserRequests from 'api/requests/UserRequests';
import { Modal } from 'common/components';
import popup from 'common/popup';
import AvatarChoice from './AvatarChoice';
import { Wrapper as AvatarChoiceWrapper, ImageContainer } from './AvatarChoice.styles';
import AvatarCropper from './AvatarCropper';
import { DefaultAvatarChoice, Wrapper } from './ChangeAvatarModal.styles';
import NewAvatarAction from './NewAvatarAction';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChangeAvatarModal = ({ isOpen, onClose }: Props) => {
  const user = useLoggedInUser();
  const { avatars } = useUserAvatarsFeed(user.id);

  const [fileToUpload, setFileToUpload] = useState<File>();

  const setFile = (file: File) => {
    setFileToUpload(file);
  };

  const chooseAvatar = (avatarId: string) => {
    UserRequests.chooseAvatar(avatarId).catch((error: any) => popup.error(error.error));
    onClose();
  };

  const removeAvatar = () => {
    UserRequests.removeAvatar().catch((error: any) => popup.error(error.error));
    onClose();
  };

  useEffect(() => {
    if (!fileToUpload) return;
  }, [fileToUpload]);

  return (
    <Modal isOpen={isOpen} title="Select an avatarr" onRequestClose={onClose}>
      {fileToUpload && (
        <AvatarCropper file={fileToUpload} clearFile={() => setFileToUpload(undefined)} />
      )}

      <Wrapper hide={fileToUpload !== undefined}>
        <NewAvatarAction setFile={setFile} />
        {avatars.map((avatar) => (
          <AvatarChoice key={avatar.id} avatar={avatar} onClick={chooseAvatar} />
        ))}
        <AvatarChoiceWrapper disabled={!user.imageUrl}>
          <ImageContainer>
            <DefaultAvatarChoice src={tempProfileImage} onClick={removeAvatar} />
          </ImageContainer>
        </AvatarChoiceWrapper>
      </Wrapper>
    </Modal>
  );
};

export default ChangeAvatarModal;

import { useEffect, useState } from 'react';
import useUserAvatarsFeed from 'api/feeds/hooks/useUserAvatarsFeed';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import * as UserRequests from 'api/requests/UserRequests';
import { Modal } from 'common/components';
import popup from 'common/popup';
import AvatarCropper from './AvatarCropper';
import { AvatarChoice, Wrapper } from './ChangeAvatarModal.styles';
import NewAvatarAction from './NewAvatarAction';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChangeAvatarModal = ({ isOpen, onClose }: Props) => {
  const { user } = useLoggedInUser();
  const { avatars } = useUserAvatarsFeed(user.id);

  const [fileToUpload, setFileToUpload] = useState<File>();

  const setFile = (file: File) => {
    setFileToUpload(file);
  };

  const chooseAvatar = (avatarId: string) => {
    UserRequests.chooseAvatar(avatarId).catch(popup.error);
    onClose();
  };

  const removeAvatar = () => {
    UserRequests.removeAvatar().catch(popup.error);
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
        <AvatarChoice src={tempProfileImage} onClick={removeAvatar} />
        {avatars
          .sort(
            (avatarA, avatarB) =>
              new Date(avatarB.createdAt).getTime() - new Date(avatarA.createdAt).getTime()
          )
          .map((avatar) => (
            <AvatarChoice
              key={avatar.id}
              src={avatar.imageUrl}
              onClick={() => chooseAvatar(avatar.id)}
            />
          ))}
      </Wrapper>
    </Modal>
  );
};

export default ChangeAvatarModal;

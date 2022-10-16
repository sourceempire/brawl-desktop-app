import { useEffect, useState } from 'react';
import { Modal } from 'common/components';
import AvatarCropper from './AvatarCropper';
import { AvatarChoice, Wrapper } from './ChangeAvatarModal.styles';
import NewAvatarAction from './NewAvatarAction';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChangeAvatarModal = ({ isOpen, onClose }: Props) => {
  const [fileToUpload, setFileToUpload] = useState<File>();

  const setFile = (file: File) => {
    setFileToUpload(file);
  };

  useEffect(() => {
    if (!fileToUpload) return;
  }, [fileToUpload]);

  return (
    <Modal isOpen={isOpen} title="Select an avatar" onRequestClose={onClose}>
      {fileToUpload ? (
        <AvatarCropper file={fileToUpload} clearFile={() => setFileToUpload(undefined)} />
      ) : (
        <Wrapper>
          <NewAvatarAction setFile={setFile} />
          <AvatarChoice />
          <AvatarChoice />
          <AvatarChoice />
          <AvatarChoice />
          <AvatarChoice />
        </Wrapper>
      )}
    </Modal>
  );
};

export default ChangeAvatarModal;

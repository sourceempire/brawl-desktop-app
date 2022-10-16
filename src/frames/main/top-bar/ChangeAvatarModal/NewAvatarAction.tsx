import { useState } from 'react';
import { NewAvatarIcon } from './ChangeAvatarModal.styles';
import { Wrapper } from './NewAvatarAction.styles';

const fileInputId = 'avatar-upload';
const acceptedFormats = ['image/png', 'image/jpeg'].join(',');

type Props = {
  setFile: (file: File) => void;
};

const NewAvatarAction = ({ setFile }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFile(file);
  };

  return (
    <>
      <input type="file" id={fileInputId} hidden onChange={handleChange} accept={acceptedFormats} />
      <Wrapper htmlFor={fileInputId}>
        <NewAvatarIcon />
      </Wrapper>
    </>
  );
};

export default NewAvatarAction;

import { useEffect, useRef, useState } from 'react';
import * as UserRequests from 'api/requests/UserRequests';
import { Cropper, ReactCropperElement } from 'react-cropper';
import popup from 'common/popup';
import { Button } from 'common/ui';
import { ImageContainer, Wrapper } from './AvatarCropper.styles';

import 'cropperjs/dist/cropper.css';

type Props = {
  file: File;
  clearFile: () => void;
};

const AvatarCropper = ({ file, clearFile }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>();

  const cropperRef = useRef<ReactCropperElement>(null);
  const [croppedCanvas, setCroppedCanvas] = useState<HTMLCanvasElement>();

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  const onCrop = () => {
    const cropper = cropperRef?.current?.cropper;
    if (!cropper) return;

    setCroppedCanvas(cropper.getCroppedCanvas());
  };

  const handleUpload = () => {
    if (!croppedCanvas) return;

    croppedCanvas.toBlob((blob) => {
      if (!blob) return;

      UserRequests.uploadAvatar(blob)
        .then(clearFile)
        .catch((error) => popup.error(error.error, { timer: 3000 }));
    }, 'image/webp');
  };

  if (!imageUrl) return null;

  const isFirstCropMade = croppedCanvas !== undefined;

  return (
    <Wrapper>
      <ImageContainer>
        <Cropper
          style={{ height: '100%', width: '100%' }}
          src={imageUrl}
          dragMode="move"
          initialAspectRatio={1}
          viewMode={1}
          cropBoxResizable={false}
          cropBoxMovable={false}
          guides={false}
          center={false}
          cropend={onCrop}
          {...(isFirstCropMade ? {} : { crop: onCrop })}
          ref={cropperRef}
        />
      </ImageContainer>

      <Button onClick={clearFile}>Cancel</Button>
      <Button onClick={handleUpload} primary>
        Upload
      </Button>
    </Wrapper>
  );
};

export default AvatarCropper;

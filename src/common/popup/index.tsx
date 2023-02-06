import ReactDOM from 'react-dom/client';
import { PopupLevel } from 'types/Popup';
import { Popup } from './Popup';

type PopupOptions = {
  timer?: number;
  onClose?: () => void;
};

const setPopupMessage = (message: string, level: PopupLevel, options?: PopupOptions) => {
  const existingPopup = document.querySelector('.popup');
  if (existingPopup) {
    document.body.removeChild(existingPopup);
  }
  const element = document.createElement('div');
  element.classList.add('popup');
  document.body.appendChild(element);
  const root = ReactDOM.createRoot(element as HTMLDivElement);

  root.render(
    <Popup
      text={message}
      level={level}
      timer={options?.timer}
      onClose={() => {
        options?.onClose?.();
        root.unmount();
        document.body.removeChild(element);
      }}
    />
  );
};

const popup = {
  info: (message: string, options?: PopupOptions) =>
    setPopupMessage(message, PopupLevel.INFO, options),
  warning: (message: string, options?: PopupOptions) =>
    setPopupMessage(message, PopupLevel.WARNING, options),
  error: (message: string, options?: PopupOptions) =>
    setPopupMessage(message, PopupLevel.ERROR, options)
};

export default popup;

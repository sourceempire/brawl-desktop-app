import ReactDOM from 'react-dom/client';
import { Popup } from './Popup';
import { PopupListHandler } from './PopupListHandler';
import { PopupLevel, PopupOptions } from './types';

const handler = new PopupListHandler();

const createPopupMessage = (message: string, level: PopupLevel, options?: PopupOptions) => {
  const element = document.createElement('div');
  const root = ReactDOM.createRoot(document.body.appendChild(element));

  const onChange = (updatedPopups: HTMLDivElement[]) => {
    if (!updatedPopups.includes(element)) return;
    const index = updatedPopups.indexOf(element);

    // Popups positioned by index, top 200px from top, each 60px further down, with the list moving 10px closer to the top for each element to make room for more.
    const top = 200 + index * 60 - (updatedPopups.length - 1 * 10);

    root.render(
      <Popup
        text={message}
        level={level}
        top={top}
        timer={options?.timer}
        onRequestClose={() => {
          handler.deletePopup(element);
          handler.removeChangeListener(onChange);
        }}
        onClose={() => {
          document.body.removeChild(element);
          root.unmount();
        }}
      />
    );
  };

  handler.addChangeListener(onChange);
  handler.addPopup(element);
};

const popup = {
  info: (message: string, options?: PopupOptions) =>
    createPopupMessage(message, PopupLevel.INFO, options),
  warning: (message: string, options?: PopupOptions) =>
    createPopupMessage(message, PopupLevel.WARNING, options),
  error: (message: string, options?: PopupOptions) =>
    createPopupMessage(message, PopupLevel.ERROR, options)
};

export default popup;

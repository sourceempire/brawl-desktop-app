import ReactDOM from 'react-dom/client';
import { Popup } from './Popup';
import { PopupLevel, PopupListChangeListener, PopupOptions } from './Popup.types';

class PopupListHandler {
  private popups = new Array<HTMLDivElement>();
  listeners: Set<PopupListChangeListener> = new Set<PopupListChangeListener>();

  dispatchChangeEvent = () => {
    this.listeners.forEach((callback) => callback(this.popups));
  };

  addChangeListener = (callback: PopupListChangeListener) => {
    this.listeners.add(callback);
  };

  removeChangeListener = (callback: PopupListChangeListener) => {
    this.listeners.delete(callback);
  };

  addPopup = (popup: HTMLDivElement) => {
    this.popups.push(popup);
    this.dispatchChangeEvent();
  };

  deletePopup = (popup: HTMLDivElement) => {
    this.popups.splice(this.popups.indexOf(popup), 1);
    this.dispatchChangeEvent();
  };
}

const handler = new PopupListHandler();

const createPopupMessage = (message: string, level: PopupLevel, options?: PopupOptions) => {
  const element = document.createElement('div');
  const root = ReactDOM.createRoot(document.body.appendChild(element));

  const onChange = (updatedPopups: HTMLDivElement[]) => {
    if (!updatedPopups.includes(element)) return;
    const index = updatedPopups.indexOf(element);

    // Popups positioned by index, top 200px from top, each 60px further down, with
    // the list moving 10px closer to the top for each element to make room for more.
    const top = 200 + index * 60 - (updatedPopups.length - 1) * 10;

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

export default {
  info: (message: string, options?: PopupOptions) =>
    createPopupMessage(message, PopupLevel.INFO, options),
  warning: (message: string, options?: PopupOptions) =>
    createPopupMessage(message, PopupLevel.WARNING, options),
  error: (message: string, options?: PopupOptions) =>
    createPopupMessage(message, PopupLevel.ERROR, options)
};

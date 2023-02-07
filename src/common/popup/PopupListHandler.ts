import { PopupListChangeListener } from './types';

export class PopupListHandler {
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

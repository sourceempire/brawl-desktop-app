export enum IconEnum {
  Abort = 'Abort',
  AddFriend = 'AddFriend',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  Calendar = 'Calendar',
  Check = 'Check',
  Clock = 'Clock',
  Cog = 'Cog',
  Controller = 'Controller',
  Copy = 'Copy',
  Cross = 'Cross',
  CrossedSwords = 'CrossedSwords',
  CrossHair = 'CrossHair',
  DatePickerArrow = 'DatePickerArrow',
  DefuseKit = 'DefuseKit',
  Explosion = 'Explosion',
  Filter = 'Filter',
  Friends = 'Friends',
  Key = 'Key',
  LockClosed = 'LockClosed',
  LockOpen = 'LockOpen',
  Notification = 'Notification',
  Party = 'Party',
  Plus = 'Plus',
  Profile = 'Profile',
  RemoveFriend = 'RemoveFriend',
  Search = 'Search',
  SelectArrow = 'SelectArrow',
  SideDecider = 'SideDecider',
  Skull = 'Skull',
  Star = 'Star',
  Sword = 'Sword',
  Ticket = 'Ticket',
  Trophy = 'Trophy'
}

export type SVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
> & {
  url: string;
};

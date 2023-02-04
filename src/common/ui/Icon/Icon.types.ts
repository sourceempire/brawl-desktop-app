export enum IconEnum {
  Abort = 'Abort',
  AddFriend = 'AddFriend',
  ArrowDown = 'ArrowDown',
  Check = 'Check',
  Clock = 'Clock',
  Cog = 'Cog',
  Copy = 'Copy',
  Cross = 'Cross',
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

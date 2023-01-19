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
  Notification = 'Notification',
  Party = 'Party',
  Plus = 'Plus',
  Profile = 'Profile',
  RemoveFriend = 'RemoveFriend',
  Search = 'Search',
  SelectArrow = 'SelectArrow',
  Skull = 'Skull',
  SmallCross = 'SmallCross',
  Star = 'Star',
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

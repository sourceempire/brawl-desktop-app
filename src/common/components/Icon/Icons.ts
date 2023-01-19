import { IconEnum, SVGComponent } from './Icon.types';
import * as AbortIcon from './icons/Abort.svg';
import * as AddFriendIcon from './icons/AddFriend.svg';
import * as ArrowDownIcon from './icons/ArrowDown.svg';
import * as CheckIcon from './icons/Check.svg';
import * as ClockIcon from './icons/Clock.svg';
import * as CogIcon from './icons/Cog.svg';
import * as CopyIcon from './icons/Copy.svg';
import * as CrossIcon from './icons/Cross.svg';
import * as DatePickerArrowIcon from './icons/DatePickerArrow.svg';
import * as DefuseKitIcon from './icons/DefuseKit.svg';
import * as ExplosionIcon from './icons/Explosion.svg';
import * as FilterIcon from './icons/Filter.svg';
import * as FriendsIcon from './icons/Friends.svg';
import * as KeyIcon from './icons/Key.svg';
import * as NotificationIcon from './icons/Notification.svg';
import * as PartyIcon from './icons/Party.svg';
import * as PlusIcon from './icons/Plus.svg';
import * as ProfileIcon from './icons/Profile.svg';
import * as RemoveFriendIcon from './icons/RemoveFriend.svg';
import * as SearchIcon from './icons/Search.svg';
import * as SelectArrowIcon from './icons/SelectArrow.svg';
import * as SkullIcon from './icons/Skull.svg';
import * as SmallCrossIcon from './icons/SmallCross.svg';
import * as StarIcon from './icons/Star.svg';
import * as TicketIcon from './icons/Ticket.svg';
import * as TrophyIcon from './icons/Trophy.svg';

const Icons: { [key in IconEnum]: SVGComponent } = {
  [IconEnum.Abort]: createSVGIcon(AbortIcon),
  [IconEnum.AddFriend]: createSVGIcon(AddFriendIcon),
  [IconEnum.ArrowDown]: createSVGIcon(ArrowDownIcon),
  [IconEnum.Check]: createSVGIcon(CheckIcon),
  [IconEnum.Clock]: createSVGIcon(ClockIcon),
  [IconEnum.Cog]: createSVGIcon(CogIcon),
  [IconEnum.Copy]: createSVGIcon(CopyIcon),
  [IconEnum.Cross]: createSVGIcon(CrossIcon),
  [IconEnum.DatePickerArrow]: createSVGIcon(DatePickerArrowIcon),
  [IconEnum.DefuseKit]: createSVGIcon(DefuseKitIcon),
  [IconEnum.Explosion]: createSVGIcon(ExplosionIcon),
  [IconEnum.Filter]: createSVGIcon(FilterIcon),
  [IconEnum.Friends]: createSVGIcon(FriendsIcon),
  [IconEnum.Key]: createSVGIcon(KeyIcon),
  [IconEnum.Notification]: createSVGIcon(NotificationIcon),
  [IconEnum.Party]: createSVGIcon(PartyIcon),
  [IconEnum.Plus]: createSVGIcon(PlusIcon),
  [IconEnum.Profile]: createSVGIcon(ProfileIcon),
  [IconEnum.RemoveFriend]: createSVGIcon(RemoveFriendIcon),
  [IconEnum.Search]: createSVGIcon(SearchIcon),
  [IconEnum.SelectArrow]: createSVGIcon(SelectArrowIcon),
  [IconEnum.Skull]: createSVGIcon(SkullIcon),
  [IconEnum.SmallCross]: createSVGIcon(SmallCrossIcon),
  [IconEnum.Star]: createSVGIcon(StarIcon),
  [IconEnum.Ticket]: createSVGIcon(TicketIcon),
  [IconEnum.Trophy]: createSVGIcon(TrophyIcon)
};

function createSVGIcon(icon: typeof AbortIcon) {
  const svgComponent = icon.ReactComponent as SVGComponent;
  svgComponent.url = icon.default;
  return svgComponent;
}

// Add the name of the Icon to the React Display Name property
Object.entries(Icons).forEach(([name, component]) => {
  component.displayName = name;
});

export default Icons;

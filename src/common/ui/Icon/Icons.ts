import { IconEnum, SVGComponent } from './Icon.types';
import * as Abort from './icons/Abort.svg';
import * as AddFriend from './icons/AddFriend.svg';
import * as ArrowDown from './icons/ArrowDown.svg';
import * as ArrowLeft from './icons/ArrowLeft.svg';
import * as ArrowRight from './icons/ArrowRight.svg';
import * as Calendar from './icons/Calendar.svg';
import * as Check from './icons/Check.svg';
import * as Clock from './icons/Clock.svg';
import * as Cog from './icons/Cog.svg';
import * as Controller from './icons/Controller.svg';
import * as Copy from './icons/Copy.svg';
import * as Cross from './icons/Cross.svg';
import * as CrossedSwords from './icons/CrossedSwords.svg';
import * as CrossHair from './icons/CrossHair.svg';
import * as DatePickerArrow from './icons/DatePickerArrow.svg';
import * as DefuseKit from './icons/DefuseKit.svg';
import * as Explosion from './icons/Explosion.svg';
import * as Filter from './icons/Filter.svg';
import * as Friends from './icons/Friends.svg';
import * as Key from './icons/Key.svg';
import * as LockClosed from './icons/LockClosed.svg';
import * as LockOpen from './icons/LockOpen.svg';
import * as Notification from './icons/Notification.svg';
import * as Party from './icons/Party.svg';
import * as Plus from './icons/Plus.svg';
import * as Profile from './icons/Profile.svg';
import * as RemoveFriend from './icons/RemoveFriend.svg';
import * as Search from './icons/Search.svg';
import * as SelectArrow from './icons/SelectArrow.svg';
import * as SideDecider from './icons/SideDecider.svg';
import * as Skull from './icons/Skull.svg';
import * as Star from './icons/Star.svg';
import * as Sword from './icons/Sword.svg';
import * as Ticket from './icons/Ticket.svg';
import * as Trophy from './icons/Trophy.svg';

const Icons: { [key in IconEnum]: SVGComponent } = {
  [IconEnum.Abort]: createSVGIcon(Abort),
  [IconEnum.AddFriend]: createSVGIcon(AddFriend),
  [IconEnum.ArrowDown]: createSVGIcon(ArrowDown),
  [IconEnum.ArrowLeft]: createSVGIcon(ArrowLeft),
  [IconEnum.ArrowRight]: createSVGIcon(ArrowRight),
  [IconEnum.Calendar]: createSVGIcon(Calendar),
  [IconEnum.Check]: createSVGIcon(Check),
  [IconEnum.Clock]: createSVGIcon(Clock),
  [IconEnum.Cog]: createSVGIcon(Cog),
  [IconEnum.Controller]: createSVGIcon(Controller),
  [IconEnum.Copy]: createSVGIcon(Copy),
  [IconEnum.Cross]: createSVGIcon(Cross),
  [IconEnum.CrossedSwords]: createSVGIcon(CrossedSwords),
  [IconEnum.CrossHair]: createSVGIcon(CrossHair),
  [IconEnum.DatePickerArrow]: createSVGIcon(DatePickerArrow),
  [IconEnum.DefuseKit]: createSVGIcon(DefuseKit),
  [IconEnum.Explosion]: createSVGIcon(Explosion),
  [IconEnum.Filter]: createSVGIcon(Filter),
  [IconEnum.Friends]: createSVGIcon(Friends),
  [IconEnum.Key]: createSVGIcon(Key),
  [IconEnum.LockClosed]: createSVGIcon(LockClosed),
  [IconEnum.LockOpen]: createSVGIcon(LockOpen),
  [IconEnum.Notification]: createSVGIcon(Notification),
  [IconEnum.Party]: createSVGIcon(Party),
  [IconEnum.Plus]: createSVGIcon(Plus),
  [IconEnum.Profile]: createSVGIcon(Profile),
  [IconEnum.RemoveFriend]: createSVGIcon(RemoveFriend),
  [IconEnum.Search]: createSVGIcon(Search),
  [IconEnum.SelectArrow]: createSVGIcon(SelectArrow),
  [IconEnum.SideDecider]: createSVGIcon(SideDecider),
  [IconEnum.Skull]: createSVGIcon(Skull),
  [IconEnum.Star]: createSVGIcon(Star),
  [IconEnum.Sword]: createSVGIcon(Sword),
  [IconEnum.Ticket]: createSVGIcon(Ticket),
  [IconEnum.Trophy]: createSVGIcon(Trophy)
};

function createSVGIcon(icon: typeof Abort) {
  const svgComponent = icon.ReactComponent as SVGComponent;
  svgComponent.url = icon.default;
  return svgComponent;
}

// Add the name of the Icon to the React Display Name property
Object.entries(Icons).forEach(([name, component]) => {
  component.displayName = name;
});

export default Icons;

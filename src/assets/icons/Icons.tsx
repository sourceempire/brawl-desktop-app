import { SVGComponent } from './Icons.types';

import AbortUrl, { ReactComponent as AbortComponent } from './Abort.svg';
const Abort = AbortComponent as SVGComponent;
Abort.url = AbortUrl;

import AddFriendUrl, { ReactComponent as AddFriendComponent } from './AddFriend.svg';
const AddFriend = AddFriendComponent as SVGComponent;
AddFriend.url = AddFriendUrl;

import ArrowDownUrl, { ReactComponent as ArrowDownComponent } from './ArrowDown.svg';
const ArrowDown = ArrowDownComponent as SVGComponent;
ArrowDown.url = ArrowDownUrl;

import CheckUrl, { ReactComponent as CheckComponent } from './Check.svg';
const Check = CheckComponent as SVGComponent;
Check.url = CheckUrl;

import ClockUrl, { ReactComponent as ClockComponent } from './Clock.svg';
const Clock = ClockComponent as SVGComponent;
Clock.url = ClockUrl;

import CogUrl, { ReactComponent as CogComponent} from './Cog.svg';
const Cog = CogComponent as SVGComponent;
Cog.url = CogUrl;

import CopyUrl, {ReactComponent as CopyComponent} from './Copy.svg';
const Copy = CopyComponent as SVGComponent;
Copy.url = CopyUrl;

import CrossUrl, { ReactComponent as CrossComponent } from './Cross.svg';
const Cross = CrossComponent as SVGComponent;
Cross.url = CrossUrl;

import DatePickerArrowUrl, { ReactComponent as DatePickerArrowComponent } from './DatePickerArrow.svg';
const DatePickerArrow = DatePickerArrowComponent as SVGComponent;
DatePickerArrow.url = DatePickerArrowUrl;

import DefuseKitUrl, { ReactComponent as DefuseKitComponent } from './DefuseKit.svg';
const DefuseKit = DefuseKitComponent as SVGComponent;
DefuseKit.url = DefuseKitUrl;

import ExplosionUrl, { ReactComponent as ExplosionComponent } from './Explosion.svg';
const Explosion = ExplosionComponent as SVGComponent;
Explosion.url = ExplosionUrl;

import FilterUrl, { ReactComponent as FilterComponent } from './Filter.svg';
const Filter = FilterComponent as SVGComponent;
Filter.url = FilterUrl;

import FriendsUrl, { ReactComponent as FriendsComponent } from './Friends.svg';
const Friends = FriendsComponent as SVGComponent;
Friends.url = FriendsUrl;

import KeyUrl, { ReactComponent as KeyComponent } from './Key.svg';
const Key = KeyComponent as SVGComponent;
Key.url = KeyUrl;

import NotificationUrl, { ReactComponent as NotificationComponent } from './Notification.svg';
const Notification = NotificationComponent as SVGComponent;
Notification.url = NotificationUrl;

import PartyUrl, { ReactComponent as PartyComponent } from './Party.svg';
const Party = PartyComponent as SVGComponent;
Party.url = PartyUrl

import PlusUrl, { ReactComponent as PlusComponent } from './Plus.svg';
const Plus = PlusComponent as SVGComponent;
Plus.url = PlusUrl;

import ProfileUrl, { ReactComponent as ProfileComponent } from './Profile.svg';
const Profile = ProfileComponent as SVGComponent;
Profile.url = ProfileUrl;

import RemoveFriendUrl, { ReactComponent as RemoveFriendComponent } from './RemoveFriend.svg';
const RemoveFriend = RemoveFriendComponent as SVGComponent;
RemoveFriend.url = RemoveFriendUrl;

import SearchUrl, { ReactComponent as SearchComponent } from './Search.svg';
const Search = SearchComponent as SVGComponent;
Search.url = SearchUrl;

import SelectArrowUrl, { ReactComponent as SelectArrowComponent } from './SelectArrow.svg';
const SelectArrow = SelectArrowComponent as SVGComponent;
SelectArrow.url = SelectArrowUrl;

import SkullUrl, { ReactComponent as SkullComponent } from './Skull.svg';
const Skull = SkullComponent as SVGComponent;
Skull.url = SkullUrl;

import SmallCrossUrl, { ReactComponent as SmallCrossComponent } from './SmallCross.svg';
const SmallCross = SmallCrossComponent as SVGComponent;
SmallCross.url = SmallCrossUrl;

import StarUrl, {ReactComponent as StarComponent} from './Star.svg'
const Star = StarComponent as SVGComponent;
Star.url = StarUrl

import TicketUrl, { ReactComponent as TicketComponent } from './Ticket.svg';
const Ticket = TicketComponent as SVGComponent;
Ticket.url = TicketUrl;

import TrophyUrl, { ReactComponent as TrophyComponent } from './Trophy.svg';
const Trophy = TrophyComponent as SVGComponent;
Trophy.url = TrophyUrl;

const Icons = {
  Abort,
  AddFriend,
  ArrowDown,
  Check,
  Clock,
  Cog,
  Copy,
  Cross,
  DatePickerArrow,
  DefuseKit,
  Explosion,
  Filter,
  Friends,
  Key,
  Notification,
  Party,
  Plus,
  Profile,
  RemoveFriend,
  Search,
  SelectArrow,
  Skull,
  SmallCross,
  Star,
  Ticket,
  Trophy
};

// Add the name of the Icon to the React Display Name property
Object.entries(Icons).forEach(([name, component]) => {
  component.displayName = name;
})

export default Icons;
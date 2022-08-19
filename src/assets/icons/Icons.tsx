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

import CrossUrl, { ReactComponent as CrossComponent } from './Cross.svg';
const Cross = CrossComponent as SVGComponent;
Cross.url = CrossUrl;

import DatePickerArrowUrl, { ReactComponent as DatePickerArrowComponent } from './DatePickerArrow.svg';
const DatePickerArrow = DatePickerArrowComponent as SVGComponent;
DatePickerArrow.url = DatePickerArrowUrl;

import FilterUrl, { ReactComponent as FilterComponent } from './Filter.svg';
const Filter = FilterComponent as SVGComponent;
Filter.url = FilterUrl;

import FriendsUrl, { ReactComponent as FriendsComponent } from './Friends.svg';
const Friends = FriendsComponent as SVGComponent;
Friends.url = FriendsUrl;

import KeyUrl, { ReactComponent as KeyComponent } from './Key.svg';
const Key = KeyComponent as SVGComponent;
Key.url = KeyUrl;

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

import SmallCrossUrl, { ReactComponent as SmallCrossComponent } from './SmallCross.svg';
const SmallCross = SmallCrossComponent as SVGComponent;
SmallCross.url = SmallCrossUrl;

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
  Cross,
  DatePickerArrow,
  Filter,
  Friends,
  Key,
  Profile,
  RemoveFriend,
  Search,
  SelectArrow,
  SmallCross,
  Ticket,
  Trophy
};

// Add the name of the Icon to the React Display Name property
Object.entries(Icons).forEach(([name, component]) => {
  component.displayName = name;
})

export default Icons;
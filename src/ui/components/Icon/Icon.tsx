import { FunctionComponent } from 'react';
import KeyIcon from 'ui/icons/Key';
import ProfileIcon from 'ui/icons/Profile';
import { IconProps, IconType } from 'ui/types';

const iconsObject: { [type in IconType]: FunctionComponent<IconProps> } = {
  [IconType.PROFILE]: ProfileIcon,
  [IconType.KEY]: KeyIcon
};

const Icon = ({ type, iconProps }: { type: IconType; iconProps?: IconProps }) => {
  const Component = iconsObject[type];
  return <Component {...iconProps} />;
};

export default Icon;

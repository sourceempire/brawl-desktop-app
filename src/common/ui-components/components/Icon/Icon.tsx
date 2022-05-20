import { FunctionComponent } from 'react';
import CheckIcon from 'common/ui-components/icons/Check';
import KeyIcon from 'common/ui-components/icons/Key';
import ProfileIcon from 'common/ui-components/icons/Profile';
import { IconProps, IconType } from 'common/ui-components/types';

const iconsObject: { [type in IconType]: FunctionComponent<IconProps> } = {
  [IconType.PROFILE]: ProfileIcon,
  [IconType.KEY]: KeyIcon,
  [IconType.CHECK]: CheckIcon
};

const Icon = ({ type, iconProps }: { type: IconType; iconProps?: IconProps }) => {
  const Component = iconsObject[type];
  return <Component {...iconProps} />;
};

export default Icon;

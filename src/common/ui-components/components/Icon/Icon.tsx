import { FunctionComponent } from 'react';
import KeyIcon from 'common/ui-components/icons/Key';
import ProfileIcon from 'common/ui-components/icons/Profile';
import { IconProps, IconType } from 'common/ui-components/types';

const iconsObject: { [type in IconType]: FunctionComponent<IconProps> } = {
  [IconType.PROFILE]: ProfileIcon,
  [IconType.KEY]: KeyIcon
};

const Icon = ({ type, iconProps }: { type: IconType; iconProps?: IconProps }) => {
  const Component = iconsObject[type];
  return <Component {...iconProps} />;
};

export default Icon;

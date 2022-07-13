import { FunctionComponent } from 'react';
import ArrowDown from 'common/ui-components/icons/ArrowDown';
import CheckIcon from 'common/ui-components/icons/Check';
import KeyIcon from 'common/ui-components/icons/Key';
import ProfileIcon from 'common/ui-components/icons/Profile';
import { IconProps, IconType } from 'common/ui-components/types';

const iconsObject: { [type in IconType]: FunctionComponent<IconProps> } = {
  [IconType.PROFILE]: ProfileIcon,
  [IconType.KEY]: KeyIcon,
  [IconType.CHECK]: CheckIcon,
  [IconType.ARROW_DOWN]: ArrowDown
};

type Props = IconProps & { type: IconType };

const Icon = (props: Props) => {
  const { className } = props;
  const Component = iconsObject[props.type];

  return <Component className={className} />;
};

export default Icon;

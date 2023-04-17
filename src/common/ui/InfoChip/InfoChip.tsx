import { SVGComponent } from '../Icon';
import { Chip, ChipHeader, ChipIcon, ChipSubText, Text } from './InfoChip.styles';

type Props = {
  header: string;
  subtext: string;
  icon: SVGComponent;
  iconSize: string;
  chipBackground: string;
};

export function InfoChip({ header, subtext, icon, iconSize, chipBackground }: Props) {
  return (
    <Chip chipBackground={chipBackground}>
      <ChipIcon icon={icon} iconSize={iconSize} />
      <Text>
        <ChipHeader>{header}</ChipHeader>
        <ChipSubText>{subtext}</ChipSubText>
      </Text>
    </Chip>
  );
}

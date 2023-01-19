import Icons from 'common/components/Icon/Icons';
import { TournamentHub } from 'types/tournaments/TournamentInfo';
import {
  Bullet,
  BulletIcon,
  BulletText,
  Bullets,
  Countdown,
  Hero,
  HeroWrapper,
  Info,
  Name,
  Subtitle,
  Title,
  VisibilityToggle,
  Wrapper
} from './FeaturedTournament.styles';

type Props = {
  tournamentInfo: TournamentHub;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FeaturedTournament({
  tournamentInfo,
  onClick,
  expanded,
  setExpanded
}: Props) {
  return (
    <Wrapper>
      <VisibilityToggle onClick={() => setExpanded((e) => !e)}>
        Featured Tournament
      </VisibilityToggle>
      <HeroWrapper>
        <Hero onClick={onClick} visible={expanded} image={tournamentInfo.image}>
          <Countdown>In 3 days</Countdown>
          <Info>
            <Name>ISC European Championship</Name>
            <Bullets>
              <Bullet>
                <BulletIcon src={Icons.Trophy.url} />
                <BulletText>
                  <Title>€2500</Title>
                  <Subtitle>Current Prize Pool</Subtitle>
                </BulletText>
              </Bullet>
              <Bullet>
                <BulletIcon src={Icons.Ticket.url} />
                <BulletText>
                  <Title>€10</Title>
                  <Subtitle>Entry Fee</Subtitle>
                </BulletText>
              </Bullet>
              <Bullet>
                <BulletIcon src={Icons.Clock.url} />
                <BulletText>
                  <Title>4 Nov 12:00 AM</Title>
                  <Subtitle>Tournament Starts</Subtitle>
                </BulletText>
              </Bullet>
            </Bullets>
          </Info>
        </Hero>
      </HeroWrapper>
    </Wrapper>
  );
}

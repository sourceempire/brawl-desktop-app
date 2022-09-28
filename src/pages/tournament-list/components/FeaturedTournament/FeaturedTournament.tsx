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
import Icons from 'assets/icons/Icons';
import Ticket from 'assets/icons/Ticket.svg';
import Trophy from 'assets/icons/Trophy.svg';

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
                <BulletIcon src={Trophy} />
                <BulletText>
                  <Title>€2500</Title>
                  <Subtitle>Current Prize Pool</Subtitle>
                </BulletText>
              </Bullet>
              <Bullet>
                <BulletIcon src={Ticket} />
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

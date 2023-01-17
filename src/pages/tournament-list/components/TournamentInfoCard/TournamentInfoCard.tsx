import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { convertDateAndTime } from 'utils/dateUtils';
import { getTournamentModeShort } from 'utils/tournamentUtils';
import {
  Column1,
  Column2,
  Column3,
  EntryFee,
  EntryFeeIcon,
  GameMode,
  GameModeIcon,
  Header,
  Info,
  Line,
  Name,
  PrizePool,
  PrizePoolHeader,
  PrizePoolIcon,
  Row1,
  Row2,
  StatusIconLocked,
  StatusIconOpen,
  StatusText,
  Time,
  TournamentStatus,
  TwoColHeader,
  Wrapper
} from './TournamentInfoCard.styles';
import LockClosed from 'assets/icons/LockClosed.svg';
import LockOpen from 'assets/icons/LockOpen.svg';

type Props = {
  tournamentInfo: TournamentHub;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  className?: string;
};

export default function TournamentInfoCard({ tournamentInfo, onClick, className }: Props) {
  return (
    <Wrapper padding={false} onClick={onClick} className={className}>
      <Header image={tournamentInfo.image}>
        <Name>{tournamentInfo.name}</Name>
      </Header>
      <Line />
      <Info>
        <Row1>
          <Column1>
            <TournamentStatus>
              {tournamentInfo.registrationClosed ? (
                <StatusIconLocked src={LockClosed} />
              ) : (
                <StatusIconOpen src={LockOpen} />
              )}
              {tournamentInfo.registrationClosed ? (
                <StatusText>Registration Closed</StatusText>
              ) : (
                <StatusText>Registration Open</StatusText>
              )}
            </TournamentStatus>
          </Column1>
          <Column2>
            <Time>Starts {convertDateAndTime(tournamentInfo.startTime)}</Time>
          </Column2>
        </Row1>
        <Row2>
          <Column1>
            <PrizePool>€{tournamentInfo.currentPrizePool}</PrizePool>
            <TwoColHeader>
              <PrizePoolIcon />
              <PrizePoolHeader>Prize Pool*</PrizePoolHeader>
            </TwoColHeader>
          </Column1>
          <Column2>
            <EntryFee>€{tournamentInfo.entranceFee} /person</EntryFee>
            <TwoColHeader>
              <EntryFeeIcon />
              <PrizePoolHeader>Entry Fee</PrizePoolHeader>
            </TwoColHeader>
          </Column2>
          <Column3>
            <GameMode>{getTournamentModeShort(tournamentInfo)}</GameMode>
            <TwoColHeader>
              <GameModeIcon />
              <PrizePoolHeader>Game Mode</PrizePoolHeader>
            </TwoColHeader>
          </Column3>
        </Row2>
      </Info>
    </Wrapper>
  );
}

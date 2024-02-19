import { TournamentHub } from 'types/tournaments/TournamentInfo';
import { formatDateAndTime } from 'utils/dateUtils';
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
  PrizePool,
  PrizePoolHeader,
  PrizePoolIcon,
  Row1,
  Row2,
  StartTime,
  StatusIconLocked,
  StatusIconOpen,
  StatusText,
  TournamentImage,
  TournamentName,
  TournamentStatus,
  TwoColHeader,
  Wrapper
} from './TournamentInfoCard.styles';
import { useRef, useState } from 'react';
import { useHint } from 'common/hooks';
import Money from 'types/Money';
import { PrizePoolRange } from 'common/components/PrizePoolRange';

type Props = {
  tournamentInfo: TournamentHub;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  className?: string;
};

export default function TournamentInfoCard({ tournamentInfo, onClick, className }: Props) {
  const [isEntryFeeHintVisible, setEntryFeeHintVisible] = useState(false);
  const entryFeeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { Hint: EntryFeeHint } = useHint({
    hintText: `€${new Money(tournamentInfo.entryFeeCut).format()} fee taken`,
    isVisible: isEntryFeeHintVisible,
    timeToVisibility: 300,
    relatedElementRef: entryFeeRef
  });

  return (
    <Wrapper padding={false} onClick={onClick} className={className}>
      <Header>
        <TournamentImage imageId={tournamentInfo.imageId} />
        <TournamentName>{tournamentInfo.name}</TournamentName>
      </Header>
      <Line />
      <Info>
        <Row1>
          <Column1>
            <TournamentStatus>
              {tournamentInfo.registrationClosed ? <StatusIconLocked /> : <StatusIconOpen />}
              {tournamentInfo.registrationClosed ? (
                <StatusText>Registration Closed</StatusText>
              ) : (
                <StatusText>Registration Open</StatusText>
              )}
            </TournamentStatus>
          </Column1>
          <Column2>
            <StartTime>Starts {formatDateAndTime(tournamentInfo.startTime)}</StartTime>
          </Column2>
        </Row1>
        <Row2>
          <Column1>
            <PrizePool>
              {tournamentInfo.registrationClosed && (
                <PrizePoolRange tournamentHubId={tournamentInfo.id} />
              )}
              {!tournamentInfo.registrationClosed && `€${tournamentInfo.currentPrizePool}`}
            </PrizePool>
            <TwoColHeader>
              <PrizePoolIcon />
              <PrizePoolHeader>Prize Pool*</PrizePoolHeader>
            </TwoColHeader>
          </Column1>
          <Column2
            onMouseEnter={() => setEntryFeeHintVisible(true)}
            onMouseLeave={() => setEntryFeeHintVisible(false)}>
            <EntryFee>
              {tournamentInfo &&
                `€${new Money(
                  tournamentInfo.entryFee + tournamentInfo.entryFeeCut
                ).format()} / player`}
            </EntryFee>
            <TwoColHeader>
              <EntryFeeIcon />
              <PrizePoolHeader ref={entryFeeRef}>
                Buy-In
                {EntryFeeHint}
              </PrizePoolHeader>
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

import React, { useState } from 'react';
import { Button, Modal } from 'common/ui';
import Rules from 'pages/tournament/components/Rules';
import { ModalButton } from '/Users/martinwillman/Documents/desktop-app/src/pages/tournament-hub/components/TournamentHubPage/TournamentHubModals/ModalButton/ModalButton';
import { ButtonsWrapper, Cheating, Content, Participation, Wrapper } from './RulesModal.styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const RulesModal = ({ isOpen, onRequestClose }: Props) => {
  //TODO -> Replace type with gameId from matchSettings
  const [visibleText, setVisibleText] = useState('general');
  const isGeneralActive = visibleText === 'general';
  const isParActive = visibleText === 'participation';
  const isCheatingActive = visibleText === 'cheating';

  //TODO -> Get this from server
  const ParticipationMD = `
  # To ensure a fair and enjoyable experience for all participants, please read and adhere to the following rules:

  # 1. Eligibility
  
  The tournament is open to players who meet the following criteria:
  
  ## 1.1 Must have a valid Steam account with CS:GO game and a Brawl Gaming account.
  
  ## 1.2 Must be of legal age in their respective country of residence or have parental/guardian consent
  
  ## 1.3 Must be able to provide proof of identity if requested by Brawl Gaming
  
  # 2 Team Requirements
  
  Players may participate in the tournament as part of a team or as individual players. For team participation, the following rules apply:
  
  ## 2.1 Teams must consist of one (1) to five (5) players
  
  ## 2.2 Teams must choose a unique team name
  
  ## 2.3 Teams must designate a team captain as the main point of contact with tournament organizers
  
  ## 2.4 All team members must play under the same team name throughout the tournament
  
  # 3 Tournament Format
  
  The tournament format will be communicated by the Brawl Gaming prior to the start of the tournament. This may include details such as the type of tournament (e.g., single elimination, round robin), match format (e.g., best of 1, best of 3), and map pool (e.g., active duty maps).
  
  # 4 Fair Play
  
  All participants are expected to adhere to the principles of fair play and good sportsmanship. Cheating, hacking, or exploiting any bugs or glitches in the game is strictly prohibited and will result in immediate disqualification from the tournament.
  
  # 5 Conduct
  
  Participants must maintain respectful and professional behavior at all times, both in-game and in any tournament-related communication (e.g., chat, voice chat, forums). Any form of harassment, discrimination, or offensive language will not be tolerated and may result in disqualification from the tournament.
  
  #6 Tournament Schedule
  Participants must be available to play matches according to the tournament schedule provided by the Brawl Gaming. Failure to show up for a scheduled match without prior notification may result in forfeiture of the match.
  
  #7 Technical Requirements
  Participants are responsible for ensuring that their gaming setup meets the technical requirements to play CS:GO and participate in the tournament, including a stable internet connection, a working microphone, and any necessary software or updates.
  
  # 8 Results
  
  After each match, the results will be displayed for each team
  
  # Organizer's Decision
  
  The decisions of the tournament organizers are final and binding. Any disputes or issues that arise during the tournament will be resolved by Brawl Gaming.
  
  # Prizes
  
  The tournament may offer prizes to the winners, as communicated by the Brawl Gaming. Prizes are subject to change and may be awarded in accordance with the tournament results and rules.<br>
  
  By participating in the Brawl Gaming tournament, all participants agree to abide by these rules and any additional rules communicated by the Brawl Gaming. Failure to comply with these rules may result in disqualification from the tournament. Good luck and Have fun!
  `;

  const CheatingMD = `
  # General all forms of cheating in Brawl Gaming matches are forbidden and will be penalized by the Brawl Gaming.
  
  Players found cheating outside of the Brawl Gaming may be barraged on the Brawl Gaming depending on the evidence available. Note, we do not accept publicly submitted demo or screenshot evidence in these cases.
  
  Should it become known to the Brawl Gaming administrators that any form of cheating was used to the advantage of a player or a team during an Brawl Gaming match, the Brawl Gaming reserves the right to punish them to the full extent of the rules available. By breaking any rule a player risks being barred or completely excluded from a specific league or from all leagues. This also includes his or her team.
  # 1 General
  Any use of such programs will be penalized within the rule 7.8. Cheating. Even testing of such programs in a match not happening within the Brawl Gaming will be prosecuted.
  ## 1.2  Game Modifications and Changes
  In general, all programs which are not part of the original game, including custom-data and modifications, are not allowed in any Brawl Gaming game. Exceptions will be outlined in each ladder’s own specific rules or below in 2.2.1. Legal programs and configuration modifications.
  ### 1.2.1.  Legal programs and configuration modifications
  All external voice programs are allowed (e.g. Battlecom, Gamevoice, Teamspeak, Ventrilo etc.). Script changes and changes to the game’s configuration are allowed, unless they are partly or completely forbidden by the game-specific rules.
  ### 1.2.2.  Illegal programs and configuration modifications
  Programs that provide an advantage during game play (e.g. drivers that allow the removing of walls such as ASUS or Wallhack) are forbidden. Any programs that change the game itself are forbidden.
  ### 1.2.3.  New programs and/or modifications
  New programs and/or modifications are forbidden, as long as they are not specifically listed as legal.
  ### 1.2.4.  Compulsory programs
  Additional programs have been developed for some games. These mostly serve the purpose of ensuring fair play. These additional compulsory programs are listed in the game-specific rules.
  ### 1.2.5.  Server modifications
  Server modifications that are neither explicitly mentioned as legal nor as illegal in the set of rules are only allowed if they do not affect the normal gameplay.
`;

  return (
    <Modal
      title="Rules"
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
      }}
      width="100%"
      margin="50px">
      <Wrapper>
        <ButtonsWrapper>
          <ModalButton
            active={isGeneralActive}
            onClick={() => setVisibleText('general')}
            text={'General'}
          />
          <ModalButton
            active={isParActive}
            onClick={() => setVisibleText('participation')}
            text={'Participation'}
          />
          <ModalButton
            active={isCheatingActive}
            onClick={() => setVisibleText('cheating')}
            text={'Cheating'}
          />
        </ButtonsWrapper>
        <Content>
          {isGeneralActive && <Rules />}
          {isParActive && <Participation className="">{ParticipationMD}</Participation>}
          {isCheatingActive && <Cheating className="">{CheatingMD}</Cheating>}
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default RulesModal;

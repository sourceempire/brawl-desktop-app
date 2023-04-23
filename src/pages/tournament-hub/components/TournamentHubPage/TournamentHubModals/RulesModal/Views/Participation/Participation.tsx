import { ParticipationMarkdown } from './Participation.styles';

const Participation = () => {
  const markdown = `
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
  # 6 Tournament Schedule
  Participants must be available to play matches according to the tournament schedule provided by the Brawl Gaming. Failure to show up for a scheduled match without prior notification may result in forfeiture of the match.
  # 7 Technical Requirements 
  Participants are responsible for ensuring that their gaming setup meets the technical requirements to play CS:GO and participate in the tournament, including a stable internet connection, a working microphone, and any necessary software or updates.
  # 8 Results
  After each match, the results will be displayed for each team
  # Organizer's Decision
  The decisions of the tournament organizers are final and binding. Any disputes or issues that arise during the tournament will be resolved by Brawl Gaming.
  # Prizes
  The tournament may offer prizes to the winners, as communicated by the Brawl Gaming. Prizes are subject to change and may be awarded in accordance with the tournament results and rules.<br>

  By participating in the Brawl Gaming tournament, all participants agree to abide by these rules and any additional rules communicated by the Brawl Gaming. Failure to comply with these rules may result in disqualification from the tournament. Good luck and Have fun!
`;

  return <ParticipationMarkdown skipHtml={true}>{markdown}</ParticipationMarkdown>;
};

export default Participation;

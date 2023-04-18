import { ParticipationMarkdown } from './Participation.styles';

const Participation = () => {
  const markdown = `
  General all forms of cheating in ESL matches are forbidden and will be penalized by the Electronic Sports League.
  
  Players found cheating outside of the ESL may be barraged on the ESL depending on the evidence available. Note, we do not accept publicly submitted demo or screenshot evidence in these cases.
  
  Should it become known to the ESL administrators that any form of cheating was used to the advantage of a player or a team during an ESL match, the ESL reserves the right to punish them to the full extent of the rules available (see 7.8. Cheating). By breaking any rule a player risks being barred or completely excluded from a specific league or from all leagues. This also includes his or her team.
  2.1.1.  Bypassing Wire Anti-Cheat
  The use of programs (or "hacks") to circumvent, modify or in any way manipulate Wire Anti-Cheat is forbidden.
  
  Any use of such programs will be penalized within the rule 7.8. Cheating. Even testing of such programs in a match not happening within the ESL will be prosecuted.
  2.2.  Game Modifications and Changes
  In general, all programs which are not part of the original game, including custom-data and modifications, are not allowed in any ESL game. Exceptions will be outlined in each ladder’s own specific rules or below in 2.2.1. Legal programs and configuration modifications.
  2.2.1.  Legal programs and configuration modifications
  All external voice programs are allowed (e.g. Battlecom, Gamevoice, Teamspeak, Ventrilo etc.). Script changes and changes to the game’s configuration are allowed, unless they are partly or completely forbidden by the game-specific rules.
  2.2.2.  Illegal programs and configuration modifications
  Programs that provide an advantage during game play (e.g. drivers that allow the removing of walls such as ASUS or Wallhack) are forbidden. Any programs that change the game itself are forbidden.
  2.2.3.  New programs and/or modifications
  New programs and/or modifications are forbidden, as long as they are not specifically listed as legal.
  2.2.4.  Compulsory programs
  Additional programs have been developed for some games. These mostly serve the purpose of ensuring fair play. These additional compulsory programs are listed in the game-specific rules.
  2.2.5.  Server modifications
  Server modifications that are neither explicitly mentioned as legal nor as illegal in the set of rules are only allowed if they do not affect the normal gameplay.
`;

  return <ParticipationMarkdown skipHtml={true}>{markdown}</ParticipationMarkdown>;
};

export default Participation;

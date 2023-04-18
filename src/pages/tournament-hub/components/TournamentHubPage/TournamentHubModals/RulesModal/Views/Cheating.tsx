import { CheatingMarkdown } from './Cheating.styles';

const Cheating = () => {
  const markdown = `
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

  return <CheatingMarkdown skipHtml={true}>{markdown}</CheatingMarkdown>;
};

export default Cheating;

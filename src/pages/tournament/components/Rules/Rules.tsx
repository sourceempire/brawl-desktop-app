import { RulesMarkdown } from './Rules.styles';

const Rules = () => {

  const markdown = `
  # General Rules for Counter Strike Global Offensive Competitions
   
  The following rules apply for all Counter Strike Global Offensive competitions that are organized and 
  professionally broadcasted by Brawl Gaming. The following rules apply for all Counter Strike Global 
  Offensive competitions that are organized and professionally broadcasted by Brawl Gaming.

  Besides these general regulations for amateur tournaments, there are several individual rules for 
  each competition. You will find these on the particular tournament page. Besides these general 
  regulations for amateur tournaments, there are several individual rules for each competition. You will 
  find these on the particular tournament page. Besides these general regulations for amateur 
  tournaments, there are several individual rules for each competition.

  # 1. General

  1.1 Participants & Teams

  Every real person - unless oficcially banned - with a valid steam account is allowed to participate 
  in the competition and will be calles ”participant” in the following. Participants joining a team in 
  order to fullfill the minimum required amount of team members will be called a ”team” in the 
  following. Please follow the rules. Every real person - unless oficcially banned - with a valid steam
  account is allowed to participate in the competition and will be calles ”participant” in the 
  following. Participants joining a team in order to fullfill the minimum required amount of team 
  members will be called a ”team” in the following. Please follow the rules.

  1.2 Commitments

  Every team and participant has to try to win every game at every stage of the competition. 
  Purposefully losing for any reason is strictly forbidden. Every team and participant has to try to win 
  every game. Every team and participant has to try to win every game at every stage of the competition. 
  Purposefully losing for any reason is strictly forbidden. Every team and participant has to try to
  win every game.

  1.3 Commitments

  Every team and participant has to try to win every game at every stage of the competition. 
  Purposefully losing for any reason is strictly forbidden. Every team and participant has to try to win 
  every game. Every team and participant has to try to win every game at every stage of the competition. 
  Purposefully losing for any reason is strictly forbidden. Every team and participant has to try to
  win every game.
`


  return (
    <RulesMarkdown skipHtml={true}>
      {markdown}
    </RulesMarkdown>
  );
};

export default Rules;

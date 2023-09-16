interface RuleInfo {
  name: string;
  content: string;
}

export type Rules = {
  cheating: RuleInfo;
  general: RuleInfo;
  participation: RuleInfo;
};

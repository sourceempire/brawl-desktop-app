export type Party = {
  id: string;
  invites: string[];
  isFull: false;
  leaderId: string;
  partySize: number;
  players: string[];
  teamName: string | null;
};

export type PartyState =
  | {
      isInParty: false;
    }
  | {
      isInParty: true;
      party: Party;
    };

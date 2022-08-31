export type Party = {
  id: string;
  invites: [];
  isFull: false;
  leaderId: string;
  partySize: number;
  players: string[];
  teamName: string | null;
};

export type PartyState = {
  isInParty: boolean;
  party?: Party;
};

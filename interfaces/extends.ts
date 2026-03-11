// Where type uses & and |, interfaces use extends.

export interface Message {
  id: string;
  sender: string;
  recipient: string;
  timestamp: number;
}

export interface TextMessage extends Message {
  text: string;
  carrier: string;
}

export interface EmailMessage extends Message {
  subject: string;
  body: string;
}

//Extends Multiple interfaces
export interface CanReply {
  reply(text: string): string;
}

export interface CanSummarize {
  summarize(conversation: string[]): string;
}

export interface CanAct {
  takeAction(action: string): void;
}

// don't touch above this line

export interface SmartReplyBot extends CanReply, CanSummarize, CanAct {
  name: string;
  status: "online" | "offline" | "starting";
  shutdown: () => string;
}


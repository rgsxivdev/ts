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


/////////////////////
//Extends Multiple interfaces
//////////////////////
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
///////////////////////////////////
// Overriding Interface Properties
//////////////////////////////////
const events = [
  {
    type: "error",
    timestamp: 1291954900,
    payload: "Minor timeout",
    affectedService: "chat",
    severity: "low",
    code: 408,
  },
  {
    type: "error",
    timestamp: 1058510394,
    payload: "Auth failure",
    affectedService: "auth",
    severity: "high",
    code: 401,
  },
  {
    type: "outage",
    timestamp: 1291954900,
    payload: {},
    affectedService: "billing",
    severity: "critical",
    durationSeconds: 600,
  }
]

export interface SystemEvent {
  type: string;
  timestamp: number;
  payload: string | object;
  affectedService: string;
  severity: "low" | "medium" | "high" | "critical";
}

// don't touch above this line

export interface ErrorEvent extends SystemEvent {
  type: "error";
  payload: string
  code: number
}

export interface OutageEvent extends SystemEvent {
  type: "outage";
  severity: "critical";
  durationSeconds: number
}

export function getHighPriorityEvents(events: SystemEvent[]) {
  return events.filter(event => event.severity === "high" || event.severity === "critical")
}

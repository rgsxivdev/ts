export type SupportAgent = {
  id: number;
  role: "agent";
  assignedTickets: number;
};

export type EndUser = {
  id: number;
  role: "customer";
  submittedTickets: number;
};

// don't touch above this line

// We need to explicitly define SupportAdmin even though its familiar with SupportAgent because if we do 
// SupportAdmin = SupportAgent & {role:"admin"} that results in role being never since you can't overwrite the role
// from SupportAgent. TS basically thinks role is "agent AND admin" which is not allowed.
export type SupportAdmin = { id: number, role: "admin", assignedTickets: number }
export type SupportAgentUser = SupportAgent | SupportAdmin | EndUser;

export function getTicketCount(user: SupportAgentUser): number {
  if (user.role === "agent" || user.role === "admin") {
    return user.assignedTickets;
  }
  return user.submittedTickets;
}


// An interface specifically works for objects but other than that it's very similar to a type.
// Use type most of the time, interface for objects maybe

export interface UserFeedback { rating: number, comment: string }
export interface SupportSession { id: string, startedAt: number, endedAt: number, feedback: UserFeedback }
export function getSessionDuration(session: SupportSession) {
  // ?
  return session.endedAt - session.startedAt;
}


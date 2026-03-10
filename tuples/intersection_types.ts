export type SupportBot = {
  id: string;
  name: string;
  status: string;
  language: string;
};

// Here you can use SupportBot as the base and then supply additional properties.
export type TextBot = SupportBot & { messageLog: string[], sendMessage(message: string): string }
export type VoiceBot = SupportBot & { callLog: string[], phoneNumber: string, dialNumber(phoneNumber: string): string }

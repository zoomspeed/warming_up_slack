export const typeDefs = [
  "type Channel {\n  id: Int!\n  channelName: String!\n  messages: [Message]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype GetMessagesReponse {\n  ok: Boolean!\n  error: String\n  messages: [Message]\n}\n\ntype Query {\n  GetMessages(innerChannelId: Int!): GetMessagesReponse!\n  SendMessage(nickname: String!, contents: String!, innerChannelId: Int!): SendMessageResponse!\n}\n\ntype SendMessageResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Message {\n  id: Int!\n  nickname: String!\n  contents: String!\n  innerChannel: Channel!\n  innerChannelId: Int!\n  createdAt: String!\n  updatedAt: String\n}\n"
];
/* tslint:disable */

export interface Query {
  GetMessages: GetMessagesReponse;
  SendMessage: SendMessageResponse;
}

export interface GetMessagesQueryArgs {
  innerChannelId: number;
}

export interface SendMessageQueryArgs {
  nickname: string;
  contents: string;
  innerChannelId: number;
}

export interface GetMessagesReponse {
  ok: boolean;
  error: string | null;
  messages: Array<Message> | null;
}

export interface Message {
  id: number;
  nickname: string;
  contents: string;
  innerChannel: Channel;
  innerChannelId: number;
  createdAt: string;
  updatedAt: string | null;
}

export interface Channel {
  id: number;
  channelName: string;
  messages: Array<Message> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface SendMessageResponse {
  ok: boolean;
  error: string | null;
}
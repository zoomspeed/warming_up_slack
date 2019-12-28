import { Resolvers } from "src/types/resolvers";
import { SendMessageQueryArgs, SendMessageResponse } from "src/types/graphql";
import Channel from "../../../../src/entities/Channel";
import Message from "../../../../src/entities/Message";

const resolvers: Resolvers = {
  Mutation: {
    SendMessage: async (
      _,
      args: SendMessageQueryArgs
    ): Promise<SendMessageResponse> => {
      try {
        const { nickname, contents, innerChannelId } = args;

        const channel = await Channel.findOne({ id: innerChannelId });

        if (!channel) {
          return {
            ok: false,
            error: "존재하지 않는 채널입니다."
          };
        }

        await Message.create({
          nickname,
          contents,
          innerChannelId: channel.id,
          innerChannel: channel
        }).save();

        return {
          ok: true,
          error: null
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;

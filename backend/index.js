import * as dotenv from "dotenv";
dotenv.config();
import { Client, GatewayIntentBits } from "discord.js";
import { Server } from "socket.io";

const botToken = process.env.DISCORD_BOT_TOKEN;

const channelId = process.env.DISCORD_CHANNEL_ID;

const frontend = process.env.FRONTEND_URL || "http://localhost:5173";
const PORT = process.env.port || 5000;


// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

let messages = []; // Array to store received messages

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // connect to channel
  const channel = client.channels.cache.get(channelId);

  if (channel) {
    //fetch the previous 100 messages
    const fetchedMessages = await channel.messages.fetch({ limit: 100 });
    messages.push( 
      ...fetchedMessages.map((message) => {
        return {
          author: message.author.tag,
          content: message.content,
          id: message.id,
          timestamp: new Date(message.createdTimestamp).toLocaleString(),
          // attach_name: message.attachments.map((attachment) => attachment.name),
          // attach_url: message.attachments.map((attachment) => attachment.url),
          attachments: message.attachments.map((attachment) => ( {
            name: attachment.name,
            url: attachment.url
          })
          )
        };
      })
    );
  }
});

client.on("messageCreate", async (message) => {
  // Don't respond to messages sent by the bot itself
  if (message.author.bot) return;

  // Check if the message is in the specified channel
  if (message.channelId === channelId) {
    
    // Format the time
    const formattedTime = new Date(message.createdTimestamp).toLocaleString();

    const newMessage = {
      author: message.author.tag,
      content: message.content,
      id: message.id,
      timestamp:  new Date(message.createdTimestamp).toLocaleString(),
      // attach_name: message.attachments.map((attachment) => attachment.name),
      // attach_url: message.attachments.map((attachment) => attachment.url),

      attachments: message.attachments.map((attachment) => ( {
        name: attachment.name,
        url: attachment.url
      })
      )
    };

    io.emit("new-message", newMessage);

    console.log(
      `${message.author.username} send: ${message.content} at:  ${formattedTime}`
    );

    console.log(newMessage.attachments);
  }
});

const io = new Server({
  cors: {
   // origin: frontend,
   origin: "*" //just for test
  },
});
io.on("connection", (socket) => {
  console.log("a user connected");

  //send initial messages
  socket.emit("initial-messages", messages);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

//our socket server listens at port 5000
io.listen(PORT);

client.login(botToken);

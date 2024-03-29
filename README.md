This is an application that streams messages in a discord channel to a web frontend. 
The frontend is build with React while the backend is build with Nodejs. 

The building process was done in roughly three steps:
* creating the discord bot
* leveraging discord.js and socket.io in the backend to pull messages from the discord channel and establish a two way communication stream
* setup the client using the library socket.io-client to consume messages in the backend

Relevant concepts covered
* discord.js
* socket.io library

You can use the app to stream messages from any other channel, provided you enter your <strong>channel id (DISCORD_CHANNEL_ID)</strong> as well as your <strong>Bot token (DISCORD_BOT_TOKEN) </strong> as backend environmental variables.



#### Acknowledgments:  ❤️
* Thanks to lamadev for this [beautiful tutorial](https://www.youtube.com/watch?v=7vVqMR96T5o&t=2224s) on using socket.io 
* Thanks to railway for setting up this challenge

#### Possible updates
* Introduce a filter
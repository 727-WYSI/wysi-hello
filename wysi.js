const Discord = require('discord.js');
const client = new Discord.Client();

const welcomeMessage = 'Welcome to the server, @username! We hope you have a good time here. wysi';
const goodbyeMessage = 'Goodbye, @username! wysi wysi 727';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('guildMemberAdd', member => {
  const welcomeChannel = getChannelById(member.guild, 'YOUR_WELCOME_CHANNEL_ID');
  if (!welcomeChannel) return;
  
  const message = welcomeMessage.replace('@username', member.user.tag);
  welcomeChannel.send(message);
});
client.on('guildMemberRemove', member => {
  const goodbyeChannel = getChannelById(member.guild, 'YOUR_GOODBYE_CHANNEL_ID');
  if (!goodbyeChannel) return;
  
  const message = goodbyeMessage.replace('@username', member.user.tag);
  goodbyeChannel.send(message);
});
function getChannelById(guild, channelId) {
  return guild.channels.cache.find(channel => channel.id === channelId);
}
client.login('YOUR_DISCORD_BOT_TOKEN');

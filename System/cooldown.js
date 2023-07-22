/* @by:Ari_Senpai 
IG: https://www.instagram.com/ari_senpai_01/
YT: https://www.youtube.com/@arisenpai_6595
*/
const commandCooldowns = {};
function checkCooldown(command, cooldownTime) {
  const currentTime = Date.now();
  const lastExecutionTime = commandCooldowns[command] || 0;
  if (currentTime - lastExecutionTime < cooldownTime) {
    const remainingCooldown = lastExecutionTime + cooldownTime - currentTime;
    return remainingCooldown;
  }
  commandCooldowns[command] = currentTime;
  return 0; // No remaining cooldown time (command can be executed)
}
module.exports = {
  checkCooldown,
};

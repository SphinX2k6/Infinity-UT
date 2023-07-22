const commandCooldowns = {};

function checkCooldown(command, cooldownTime) {
  const currentTime = Date.now();
  const lastExecutionTime = commandCooldowns[command] || 0;

  if (currentTime - lastExecutionTime < cooldownTime) {
    // Calculate the remaining cooldown time in milliseconds
    const remainingCooldown = lastExecutionTime + cooldownTime - currentTime;
    return remainingCooldown;
  }

  // Set the last execution time for the command to the current time
  commandCooldowns[command] = currentTime;
  return 0; // No remaining cooldown time (command can be executed)
}

module.exports = {
  checkCooldown,
};

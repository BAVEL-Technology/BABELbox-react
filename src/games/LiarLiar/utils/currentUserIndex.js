export const findCurrentUserIndex = (players, player) => {
  return players.indexOf(
    players.filter(
      (player) => (player.id = player)
    )[0]
  );
}

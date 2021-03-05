export const findCurrentUserIndex = (players, player) => {
  players.indexOf(
    players.filter(
      (player) => (player.id = player)
    )[0]
  );
}

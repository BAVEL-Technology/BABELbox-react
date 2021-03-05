export const findCurrentUserIndex = (players, player) => {
  
  return players.indexOf(
    players.filter(
      (p) => (p.id === player)
    )[0]
  );
}

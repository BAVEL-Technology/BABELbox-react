const getAvatar = () => {
  const avatars = ["🐵", "🦊", "🐨", "🐲", "🥸", "🤓", "🤖", "👺", "🤡"];
  return avatars[Math.floor(Math.random() * avatars.length)];
};

export default getAvatar;
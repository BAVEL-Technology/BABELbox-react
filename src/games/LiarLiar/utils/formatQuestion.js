export default function formatQuestion (question) {
  const regex = /<BLANK>/g;
  return question?.replaceAll(regex, '______');
}
export const formatQuestion = (question) => {
  const regex = "<(.*?)>";
  question?.replaceAll(regex, '_____')
}
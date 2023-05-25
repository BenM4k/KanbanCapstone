// Function to count the number of likes
export default function countLikes(data) {
  let totalLikes = 0;
  for (let i = 0; i < data.length; i += 1) {
    totalLikes += data[i].likes;
  }
  return totalLikes;
}
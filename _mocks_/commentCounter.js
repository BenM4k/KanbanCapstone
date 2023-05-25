// Function to count the number of comments
export default function countComments(data) {
  if (!data || data.length === 0) {
    return 0;
  }
  return data.length;
}

// Import the functions and the mock data
import countLikes from '../../_mocks_/itemCounter.js';

const mockData = [
  {
    likes: 5,
    item_id: 'item1',
  },
  {
    likes: 3,
    item_id: 'item1',
  },
];

describe('countLikes', () => {
  test('should return the correct number of likes', () => {
    expect(countLikes(mockData)).toBe(8);
  });
});
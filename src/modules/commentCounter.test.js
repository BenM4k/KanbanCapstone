// Import the functions and the mock data
import countComments from '../../_mocks_/itemCounter.js';

const mockData = [
  {
    likes: 1,
    item_id: 'item1',
    comment: 'This is nice!',
    creation_date: '2021-01-10',
    username: 'John',
  },
  {
    likes: 1,
    item_id: 'item1',
    comment: 'Great content!',
    creation_date: '2021-02-10',
    username: 'Jane',
  },
];

describe('countComments', () => {
  test('should return the correct number of comments', () => {
    expect(countComments(mockData)).toBe(2);
  });
});

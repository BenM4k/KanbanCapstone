import { postData } from './api.js';

const microverseApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YmJfq02jOUfGZEDWh0Nq/';

export function postComment(show, uname, comment) {
  const data = {
    item_id: show.title.split(' ').join(''),
    username: uname,
    comment,
  };

  // console.log(data);
  postData(`${microverseApi}comments`, data);
}

export function postLike(show) {
  const data = {
    item_id: show.title.split(' ').join(''),
  };
  postData(`${microverseApi}likes`, data);
}

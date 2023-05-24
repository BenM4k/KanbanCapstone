import { getData, postData } from './api.js';

const microverseApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YmJfq02jOUfGZEDWh0Nq/';

export function fetchComments(show) {
  getData(`${microverseApi}${show.title}`);
}

export function fetchLikes() {
  getData(`${microverseApi}likes`);
}

export function postComment(show, uname, comment) {
  const data = {
    item_id: show.title,
    username: uname,
    comment,
  };

  postData(`${microverseApi}comments`, data);
}

export function postLike(show) {
  const data = {
    item_id: show.title,
  };
  postData(`${microverseApi}likes`, data);
}

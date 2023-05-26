import { postData, getData } from './api.js';

const microverseApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YmJfq02jOUfGZEDWh0Nq/';

export function updateCommentsUI(comments) {
  const popupCommentsList = document.getElementById('popup-comments-list');
  popupCommentsList.innerHTML = '';

  comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.innerText = comment.comment;
    popupCommentsList.appendChild(commentItem);
  });
}

export function postComment(show, uname, comment, updateCommentsCounter) {
  const data = {
    item_id: show.title.split(' ').join(''),
    username: uname,
    comment,
  };

  postData(`${microverseApi}comments`, data)
    .then(() => {
      updateCommentsCounter(); // Call the function to update the comments counter
      return getData(`${microverseApi}comments`); // Fetch updated comments data
    })
    .then((data) => {
      const comments = data.filter(
        (item) => item.item_id === show.title.split(' ').join(''),
      );
      updateCommentsUI(comments); // Update the comments UI
    });
}

export function postLike(show, updateLikesCounter) {
  const data = {
    item_id: show.title.split(' ').join(''),
  };
  postData(`${microverseApi}likes`, data).then(() => {
    updateLikesCounter();
  });
}
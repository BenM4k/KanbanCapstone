import createPopup from './popup.js';
import { postLike } from './fetch.js';
import { getData } from './api.js';

const microverseApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YmJfq02jOUfGZEDWh0Nq/';

export default async function render(show, container) {
  const list = document.createElement('li');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const likes = document.createElement('div');
  const likesImg = document.createElement('img');
  const likesNbr = document.createElement('span');
  const comments = document.createElement('p');

  list.classList.add('video');
  img.classList.add('video-preview');
  div.classList.add('title');
  likes.classList.add('likes');
  likesImg.classList.add('likes-img');
  likesNbr.classList.add('likes-number');
  comments.classList.add('comments');

  img.src = `${show.img}`;
  p.innerText = `${show.title}`;
  likesImg.src = 'assets/heart.png';
  comments.innerText = 'Comments';

  likes.appendChild(likesImg);
  likes.appendChild(likesNbr);

  div.appendChild(p);
  div.appendChild(likes);

  list.appendChild(img);
  list.appendChild(div);
  list.appendChild(comments);

  comments.addEventListener('click', () => {
    createPopup(show);
  });

  container.appendChild(list);

  getData(`${microverseApi}likes`).then((data) => {
    data.forEach((item) => {
      if (item.item_id === show.title.split(' ').join('')) {
        likesNbr.textContent = item.likes;
      }
    });
  });

  likesImg.addEventListener('click', () => {
    postLike(show);
  });
}
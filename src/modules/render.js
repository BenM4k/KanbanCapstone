import createPopup from './popup.js';
import { postLike, getLikes } from './fetch.js';

export default async function render(show, container) {
  const list = document.createElement('li');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const likes = document.createElement('div');
  const likesImg = document.createElement('i');
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
  likesImg.classList.add("fa");
  likesImg.classList.add("fa-heart-o");
  likesImg.classList.add("fa-2x");
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

  const likesData = await getLikes(show.title.split(' ').join(''));

  if (likesData.item_id === show.title.split(' ').join('')) {
    likesNbr.textContent = likesData.likes;
  }

  likesImg.addEventListener('click', async () => {
    await postLike(show.title.split(' ').join(''));
    const likesData = await getLikes(show.title.split(' ').join(''));

    if (likesData.item_id === show.title.split(' ').join('')) {
      likesNbr.textContent = likesData.likes;
    }
  });
}
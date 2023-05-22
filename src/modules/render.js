export default function render(show, container) {
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
  likesNbr.innerText = `${show.likes} likes`;
  likesImg.src = 'assets/heart.png';
  comments.innerText = 'Comments';

  likes.appendChild(likesImg);
  likes.appendChild(likesNbr);

  div.appendChild(p);
  div.appendChild(likes);

  list.appendChild(img);
  list.appendChild(div);
  list.appendChild(comments);

  container.appendChild(list);
}
export default async function render(show, container) {
  const list = document.createElement('li');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const likes = document.createElement('div');
  const likesImg = document.createElement('img');
  const likesNbr = document.createElement('span');
  const comments = document.createElement('p');
  const popupCard = document.querySelector('.popup-card');
  const removePopup = document.querySelector('.fa-times');

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

  comments.addEventListener('click', () => {
    const image = document.querySelector('.popup-thumbnail img');
    const popupTitle = document.querySelector('h2');

    image.src = `${show.img}`;
    popupTitle.innerText = `${show.title}`;
    popupCard.style.display = 'flex';
    const popupImg = document.querySelector('.popup-img');
    popupImg.src = `${show.img}`;
  });

  removePopup.addEventListener('click', () => {
    popupCard.style.display = 'none';
  });

  container.appendChild(list);
}
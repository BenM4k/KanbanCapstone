const comments = JSON.parse(localStorage.getItem('comments')) || [];
// Grab the element from the HTML document
const userInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const addBtn = document.querySelector('#add-btn');
const errorMsg = document.querySelector('#error-msg');

const showComments = () => {
  // Grab the element from the HTML document
  const commentsList = document.querySelector('.comments-list');

  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<p><span>${new Date().toJSON().slice(0, 10)}</span> &nbsp; ${comment.user} :  &nbsp; ${comment.comment}</p>`;
    commentsList.appendChild(listItem);
  });
};

const addComment = (user, comment) => {
  comments.push({ user, comment });
  localStorage.setItem('comments', JSON.stringify(comments));
  showComments();
};

addBtn.addEventListener('click', () => {
  if (userInput.value.trim() === '' || messageInput.value.trim() === '') {
    errorMsg.style.display = 'block';
  } else {
    addComment(userInput.value.trim(), messageInput.value.trim());
    userInput.value = '';
    messageInput.value = '';
    errorMsg.style.display = 'none';
  }
});

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
    const popupImg = document.querySelector('.popup-img');
    const popupTitle = document.querySelector('h2');

    popupImg.src = `${show.img}`;
    popupTitle.innerText = `${show.title}`;
    popupCard.style.display = 'flex';
  });

  removePopup.addEventListener('click', () => {
    popupCard.style.display = 'none';
  });

  container.appendChild(list);
}
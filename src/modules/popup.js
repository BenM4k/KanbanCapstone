import { getComments, postComment, displayComments } from './fetch.js';

export default async function createPopup(show) {
  // initialization
  const card = document.querySelector('.popup-card');
  const popupHeader = document.createElement('div');
  const popupThumbnail = document.createElement('div');
  const image = document.createElement('img');
  const icon = document.createElement('span');
  const title = document.createElement('h2');
  const p = document.createElement('p');
  const commentList = document.createElement('ul');
  const footer = document.createElement('div');
  const footerTitle = document.createElement('h3');
  const form = document.createElement('form');
  const errorMessage = document.createElement('span');
  const name = document.createElement('input');
  const message = document.createElement('textarea');
  const submit = document.createElement('button');

  // popup header

  popupHeader.classList.add('popup-header');
  popupThumbnail.classList.add('popup-thumbnail');
  image.classList.add('popup-img');
  icon.classList.add('fas');
  icon.classList.add('fa-times');

  image.src = `${show.img}`;
  image.alt = `${show.title}`;

  popupThumbnail.appendChild(image);
  popupHeader.appendChild(popupThumbnail);
  popupHeader.appendChild(icon);

  // popup footer
  footer.classList.add('popup-footer');
  errorMessage.classList.add('error-msg');
  name.type = 'text';
  name.placeholder = 'Your name';
  name.classList.add('input');
  name.id = 'name';
  name.required = true;

  message.cols = '20';
  message.rows = '6';
  message.placeholder = 'Your message...';
  message.classList.add('input');
  message.id = 'message';
  message.required = true;

  submit.type = 'submit';
  submit.id = 'add-btn';

  errorMessage.textContent = 'Please enter your name and message!!';
  errorMessage.style.display = 'none';
  footerTitle.textContent = 'Add a comment';
  submit.textContent = 'Comments';

  form.appendChild(errorMessage);
  form.appendChild(name);
  form.appendChild(message);
  form.appendChild(submit);

  footer.appendChild(footerTitle);
  footer.appendChild(form);

  // comment list

  const commentsData = await getComments(show.title.trim().split(' ').join(''));
  displayComments(commentsData, p, commentList);

  // popup
  // card.classList.add('popup-card');

  title.textContent = `${show.title}`;

  card.appendChild(popupHeader);
  card.appendChild(title);
  card.appendChild(p);
  card.appendChild(commentList);
  card.appendChild(footer);

  card.style.display = 'flex';

  icon.addEventListener('click', () => {
    card.style.display = 'none';
    card.textContent = '';
  });

  submit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (name.value !== '' && message.value !== '') {
      await postComment(show.title.split(' ').join(''), name.value, message.value);
      name.value = '';
      message.value = '';

      const commentsData = await getComments(show.title.trim().split(' ').join(''));
      commentList.textContent = '';
      displayComments(commentsData, p, commentList);
    } else {
      errorMessage.style.color = 'red';
      errorMessage.style.marginBottom = '10px';
      errorMessage.style.display = 'block';
    }
  });
}
import render from './modules/render.js';
import { links } from './modules/shows.js';
import { getData } from './modules/api.js';

const grid = document.querySelector('.video-grid');
const shows = document.querySelector('.shows');
shows.textContent = `${links.length}`;

links.forEach((link) => {
  getData(link).then((link) => {
    const show = {
      id: link.id,
      title: link.name,
      img: link.image.original,
    };

    render(show, grid);
  });
});
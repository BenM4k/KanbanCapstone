import render from './modules/render.js';
import { links } from './modules/shows.js';
import { getData } from './modules/api.js';

const grid = document.querySelector('.video-grid');

links.forEach((link) => {
  getData(link).then((link) => {
    const show = {
      id: link.id,
      title: link.name,
      img: link.image.original,
      likes: 0,
      comments: [],
    }

    render(show, grid);
  });
})


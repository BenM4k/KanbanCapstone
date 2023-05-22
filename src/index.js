import render from "./modules/render.js";
import { shows } from "./modules/shows.js";

const grid = document.querySelector('.video-grid');

shows.forEach((show) => {
    render(show, grid)
})
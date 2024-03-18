import './style.css';
import initial from './initial-page-load';
import menu from './menu-page-load';

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contentContainer = document.querySelector('#content');

// Load initial page content
initial(contentContainer);

const clearContainer = () => (contentContainer.innerHTML = '');

homeBtn.addEventListener('click', () => {
    clearContainer();
    initial(contentContainer);
});

menuBtn.addEventListener('click', () => {
    clearContainer();
    menu(contentContainer);
});

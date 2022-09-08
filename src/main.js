import generateList from './module/generate_list.js';
import Api from './module/api.js';
import popup from './module/popuplist.js';
import setLikes from './module/updatelike.js';

const menu = document.getElementById('toggle-menu');
const toggleClose = document.getElementById('toggle-close');
const ulLists = document.getElementById('lists');
const listContainer = document.getElementById('list-dynamic');
const recipes = document.getElementById('recipes');
const error = document.getElementById('server-error');

const mainContainer = document.getElementById('main-container');

const api = new Api();

const loadList = async () => {
  try {
    const data = await api.getRecipes('recipe');
    const likes = await api.getRecipes('likes', '');
    recipes.innerHTML = '';
    recipes.appendChild(generateList(data));
    setLikes(generateList(data), likes);
  } catch {
    error.innerHTML = 'Server not responding';
  }
};

const loadpop = async (targetId) => {
  try {
    const data = await api.getRecipes('popup', targetId);
    mainContainer.prepend(popup(data));
  } catch (e) {
    error.innerHTML = 'Server not responding';
  }
};

window.onload = () => {
  loadList();
};

menu.onclick = () => {
  listContainer.classList.add('mobile');
  ulLists.classList.add('mobile');
  ulLists.style.display = 'flex';
  toggleClose.style.display = 'flex';
  menu.style.display = 'none';
};

toggleClose.onclick = () => {
  listContainer.classList.remove('mobile');
  ulLists.classList.remove('mobile');
  ulLists.style.display = 'none';
  toggleClose.style.display = 'none';
  menu.style.display = 'flex';
};

recipes.addEventListener('click', (e) => {
  loadpop(e.target.id.split('-')[1]);
  e.preventDefault();
});

document.getElementById('main-container').onclick = (e) => {
  if (e.target.id === 'pop-close' || e.target.id === 'i-close') {
    document.getElementById('id-popup').remove();
  }
};
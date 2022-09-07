import generateList from './module/generate_list.js';
import Api from './module/api.js';

const menu = document.getElementById('toggle-menu');
const toggleClose = document.getElementById('toggle-close');
const ulLists = document.getElementById('lists');
const listContainer = document.getElementById('list-dynamic');
const recipes= document.getElementById('recipes')
// const error = document.getElementById('error');
const api = new Api();

const loadList = async () => {
  try {
    const data = await api.getRecipes();
    console.log(data );
    recipes.innerHTML = '';
    recipes.appendChild(generateList(data));
  } catch {
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
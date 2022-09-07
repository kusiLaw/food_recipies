const generateList = (array) => {
  array = array.categories; // array of objects

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'food-list');

  for (let i = 0; i < array.length; i += 1) {
    ul.innerHTML += `<li class="food-list-items" id = 'li-${array[i].idCategory}'>
    <div class="list-header"><img class="food-img" src="${array[i].strCategoryThumb}" alt="food"></div>
    <div class="list-body">
     <div class="list-names-likes">
      <p class="food-name">${array[i].strCategory}</p>
      <div class="like">
      <button type='button' id='like-img'><i class="fa-solid fa-heart"></i></button>
       <p><span>1</span>likes</p>
      </div>
     </div>
     <div class="list-buttons">
      <button type="button" id = 'com-${array[i].idCategory}'>Comments</button>
      <button type="button" id = 'res-${array[i].idCategory}' >Reservation</button>
     </div>
    </div>
   </li>`;
  }
  return ul;
};

export default generateList;

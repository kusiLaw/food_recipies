const generateList = (array) => {
  array = array.meals; // array of objects
  // console.log(array)
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'food-list');
  ul.id = 'id-recipe';

  for (let i = 0; i < array.length; i += 1) {
    ul.innerHTML += `<li class="food-list-items" id = 'li-${array[i].idMeal}'>
    <div class="list-header"><img class="food-img" src="${array[i].strMealThumb}" alt="food"></div>
    <div class="list-body">
     <div class="list-names-likes">
      <p class="food-name">${array[i].strMeal}</p>
      <div class="like">
      <button type='button' id='like-img'><i class="fa-solid fa-heart"></i></button>
       <p><span id='like-${array[i].idMeal}'>0</span>likes</p>
      </div>
     </div>
     <div class="list-buttons">
      <button type="button" id = 'com-${array[i].idMeal}'>Comments</button>
      <button type="button" id = 'res-${array[i].idMeal}' >Reservation</button>
     </div>
    </div>
   </li>`;
  }
  return ul;
};

export default generateList;

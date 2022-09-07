const generateList = (array) => {
  array = array.categories; // array of objects

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'food-list');

  for (let i = 0; i < array.length; i += 1) {
    ul.innerHTML += `<li class="food-list-items" id = 'li-${array[i]['strCategory']}'>
    <div class="list-header"><img src="${array[i]['strCategoryThumb']}" alt="food">img here</div>
    <div class="list-body">
     <div class="list-names-likes">
      <p class="food-name">${array[i]['strCategory']}</p>
      <div class="like">
       <img id="like-img" src="" alt="like">
       <p><span>1</span>likes</p>
      </div>
     </div>
     <div class="list-buttons">
      <button type="button" id = 'com-${array[i]['strCategory']}'>Comments</button>
      <button type="button" id = 'res-${array[i]['strCategory']}' >Reservation</button>
     </div>
    </div>
   </li>`;
  }
  return ul;
};

export default generateList;



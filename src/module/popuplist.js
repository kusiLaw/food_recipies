const popup = (array) => {
  array = array.meals;

  // return
  const div = document.createElement('div');
  div.className = 'popup';
  div.id = 'id-popup';

  div.innerHTML += `
 <div class="pop-header" id="pop">
  <img src="${array[0].strMealThumb}" alt="">
  <button type="button"  id="pop-close"><i id="i-close" class="fa-solid fa-xmark"></i></button>
 </div>
 <div class="pop-body">
  <h2 class="pop-name">${array[0].strMeal}</h2>
  <div class="pop-details">Details here:</div>
  <div class="pop-comment">Comment here:</div>
  <div class="pop-button">
   <input type="text" placeholder="Your Name" name="" id="">
   <input type="text-area" placeholder="Your Comment" name="" id="">
   <button type="button" name="submit">Submit</button>
  </div>
 </div>
`;
  return div;
};

export default popup;

const setLikes = async (data) => {
 // set all likes
  let element;
  for (let i = 0; i < data.length; i += 1) {
    element = document.getElementById(`like-${data[i].item_id}`);
    element.innerHTML = '';
    element.innerHTML = `${data[i].likes}`;
  }
};


const updateLike = async (targetId, data) => {
 //update card like upon click
 let element;
 for (let i = 0; i < data.length; i += 1) {
  if (data[i].item_id === targetId){
   element = document.getElementById(`like-${data[i].item_id}`);
   element.innerHTML = '';
   element.innerHTML = `${data[i].likes}`;
  }
 }
};


export {setLikes, updateLike} ;
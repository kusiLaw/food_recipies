const setLikes = (data) => {
  // set all likes
  let element;
  for (let i = 0; i < data.length; i += 1) {
    element = document.getElementById(`like-${data[i].item_id}`);
    element.innerHTML = '';
    element.innerHTML = `${data[i].likes}`;
  }
};

const updateLike = (targetId) => {
  // update card like upon click
  const element = document.getElementById(`like-${targetId}`);
  element.innerHTML = parseInt(element.innerHTML, 10) + 1;
};

export { setLikes, updateLike };
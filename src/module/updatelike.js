const setLikes = async (ul, data) => {
  let element;
  for (let i = 0; i < data.length; i += 1) {
    element = document.getElementById(`like-${data[i].item_id}`);
    element.innerHTML = '';
    element.innerHTML = `${data[i].likes}`;
  }
};

export default setLikes;
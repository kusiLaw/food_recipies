const displayComment = (id, comments) => {
  if (comments.length > 0) {
    const listContainer = document.getElementById(`comlist-${id}`);
    const comtitle = document.getElementById(`comtitle-${id}`);
    comtitle.innerHTML = '';
    comtitle.innerText = `Comment (${comments.length})`;

    listContainer.innerHTML = '';
    // '${array[0].idMeal}';
    for (let i = 0; i < comments.length; i += 1) {
      listContainer.innerHTML += `
 <p>${comments[i].creation_date} ${comments[i].username} : ${comments[i].comment} </p>
 `;
    }
  }
};

export default displayComment;
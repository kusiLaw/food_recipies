class Api {
  url = {
    recipe: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
    popup: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
    likes:
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pqjGrlyQr7CLbjRiDztL/likes/',
    comments:
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pqjGrlyQr7CLbjRiDztL/comments/',
    getcomments:
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pqjGrlyQr7CLbjRiDztL/comments?item_id=',
  };

  newScore = async (object) => {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        ...object,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  addComment = async (idMeal, name, message) => {
    await fetch(this.url.comments, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: idMeal,
        username: name,
        comment: message,
      }),
    });
  };

  addLike = async (idMeal) => {
    await fetch(this.url.likes, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: idMeal,
      }),
    });
  };

  getRecipes = async (preferredLink, key = 'Canadian') => {
    try {
      const response = await fetch(this.url[preferredLink].concat(key));
      const results = await response.json();
      return results;
    } catch (e) {
      return e;
    }
  };
}

export default Api;

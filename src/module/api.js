class Api {
 url = {
   recipe: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
   popup: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
   likes:
   'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pqjGrlyQr7CLbjRiDztL/likes/',
 }

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
 }

 getRecipes = async (preferredLink, key = 'Canadian') => {
   try {
     const response = await fetch(this.url[preferredLink].concat(key));
     const results = await response.json();
     return results;
   } catch (e) {
     return e;
   }
 }
}

export default Api;

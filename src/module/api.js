class Api {
 url = {
   recipe: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
   popup: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
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

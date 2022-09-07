class Api {
 url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

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

 getRecipes = async () => {
   try {
     const response = await fetch(this.url);
     const results = await response.json();
     return results;
   } catch (e) {
     return e;
   }
 }
}

export default Api;

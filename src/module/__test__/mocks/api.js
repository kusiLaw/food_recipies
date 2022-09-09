const getRecipes = () => ({
  meals: [
    {
      strMeal: 'BeaverTails',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
      idMeal: '52928',
    },
    {
      strMeal: 'Breakfast Potatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
      idMeal: '52965',
    },
    {
      strMeal: 'Canadian Butter Tarts',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg',
      idMeal: '52923',
    },

  ],
});

const getComment = () => {
  return  [
     {
         "username": "Marve",
         "comment": "cool",
         "creation_date": "2022-09-09"
     },
     {
         "username": "Marve",
         "comment": "cool",
         "creation_date": "2022-09-09"
     },
     {
         "comment": "cool",
         "creation_date": "2022-09-09",
         "username": "Marve"
     },
     {
         "username": "Marve",
         "creation_date": "2022-09-09",
         "comment": "cool"
     },
     {
         "creation_date": "2022-09-09",
         "comment": "cool",
         "username": "Marve"
     },
     {
         "username": "Marve",
         "comment": "cool",
         "creation_date": "2022-09-09"
     }
    ]
 }
export {getRecipes, getComment}
/**
 * @jest-environment jsdom
 */
import itemCounter from '../counter.js';
import getRecipes from './mocks/api.js';

 // test count item list
 describe('Count the total a recipes on page from api', () => {
   test('Must return total 3 items', () => {
      // Arrange
      document.body.innerHTML = '<div id="list">'
      + '</div>';

        // Act
       let result = itemCounter(document.getElementById('list'), getRecipes())
       
       // Assert
       expect(result).toBe(3);
   
   });
 });

/**
 * @jest-environment jsdom
 */
import itemCounter from '../counter.js';
import { getRecipes, getComment } from './mocks/api.js';

// test count item list
describe('Count the total a recipes on page from api', () => {
  test('Must return total 3 items', () => {
    // Arrange
    document.body.innerHTML = '<div id="list">'
      + '</div>';

    // Act
    const result = itemCounter(document.getElementById('list'), getRecipes());

    // Assert
    expect(result).toBe(3);
  });
});

// Test of comment list

describe('Count the total comment on page from api', () => {
  test('Must return total 6 items', () => {
    // Arrange
    document.body.innerHTML = '<div id="list">'
     + '</div>';
    // Act
    const result = itemCounter(document.getElementById('list'), getComment());
    // Assert
    expect(result).toBe(6);
  });
});
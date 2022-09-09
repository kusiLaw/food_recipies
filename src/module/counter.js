const itemCounter = (element, array) => {
  array = array.meals || array;
  if (array !== undefined) {
    const counter = array.length;
    element.innerText = '';
    element.innerText = `(${counter})`;
    return counter;
  }
  return 0;
};

export default itemCounter;
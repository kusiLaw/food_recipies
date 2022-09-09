const itemCounter = (element, array) =>{
 console.log(array)
 array = array.meals || array
 if(array !== undefined){
  let counter = array.length
  element.innerText = ""
  element.innerText = `(${counter})`
  return counter
 }

}

export default itemCounter
function iterativeLog(array) {
  array.forEach((element, index, array) => {
  console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var myArray = ['element0', 'element1', 'element2', 'element3']
  myArray.forEach(callback)
  return myArray
}

function doToArray(array, callback){
  array.forEach(callback)
}

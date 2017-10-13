var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

var initialPivot =  array[array.length-1];
var lessThanPivot = [];
var moreThanPivot = [];
var temp = []
function quickSort(array){
for(let i=0; i < array.lenth - 1; i++){
  if(array[i] < initialPivot){
    lessThanPivot.push(array[i]);
    var initialPivot =  array[array.length-1]
    var lessThanPivot = [];
    var moreThanPivot = [];


}
}
}
quickSort(array)
console.log(initialPivot)
console.log(lessThanPivot);

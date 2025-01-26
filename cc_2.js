//Task 1: Working with Arrays
let products = ["notebook", "pencil", "pen", "highlighter", "binder"];
products.unshift ("eraser"); //creating an item and moving it to the front. Could have also done products.push but then the next step would immediately remove that item
products.pop(); //removes the last item: "binder"
console.log(products);
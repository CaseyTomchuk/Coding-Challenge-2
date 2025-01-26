//Task 1: Working with Arrays
let products = ["notebook", "pencil", "pen", "highlighter", "binder"];
products.unshift ("eraser"); //creating an item and moving it to the front. Could have also done products.push but then the next step would immediately remove that item
products.pop(); //removes the last item: "binder"
console.log(products);

//Task 2: Accessing and Modifying Arrays
const scores = [97,50,76,95,78];
scores[4] = 80; //changes the fifth item in the array from 78 to 80

let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
} //this for loop works by calculating the sum of all items in the array. i < scores.length repeats the process if there are more items left in the array.
// After running, i++ moves the loop on to the next item. sum += scores[i] is how the summing is done

const averageScore = sum /scores.length; // sum / scores.length divides the sum by the number of items in the array.
console.log("The scores are: | " + scores + " | The average score is: | " + averageScore + " |"); // Yes the | thing is very extra

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

//Task 3: Working with Objects
let employee = {
    name: "casey",
    age: 19,
    department: "Sales",
    isActive: true
}; //Created object

employee.department = "marketing";
employee.position = "manager";
console.log(employee);

//Task 4: Array of Objects
let customers = [{ //creating the array (using a [bracket] on the outsides)
    name: "elise",
    email: "elise123@gmail.com",
    purchaseAmount: 100
}, //defining each object in the array
{
    name: "albert",
    email: "albert500@gmail.com",
    purchaseAmount: 500
},
{
    name: "gabe",
    email: "gabe591@gmail.com",
    purchaseAmount: 124
}];
customers.push({
    name: "jon",
    email: "jonsemail@gmail.com",
    purchaseAmount: 205
});

for (let i = 0; i < customers.length; i++) {
console.log(customers[i])
}; // I created this for loop so that I could display each item in the array seperately, since attempting to display them all at once led to it showing {...}
// let i = 0 sets the index to start at 0. As long as i is less than the amount of objects left in the array, the loop will repeat. 
// Each repetition logs one full object in the array.

//Task 5: Object Methods
let order = {
    orderID: 1,
    customerName: "josh",
    amount: 500,
    calculateTax: function() {
      return this.amount * 0.10; // could have also done return order.amount
    }
};
console.log("orderID: " + order.orderID, "| name: " + order.customerName + " | amount: " + order.amount + " | tax: " + order.calculateTax());
//I did the console log in a bit of a roundabout way to avoid showing the function information and so I could fit it all in one line.
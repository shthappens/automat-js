let dishesArray = [
  'Chicken Pot Pie',
  'Baked Beans',
  'Macaroni and Cheese',
  'Burgundy Sauce with Beef and Noodles',
  'Creamed Spinach',
  'Pumpkin Pie',
  'Strawberry Shortcake'
];

let text = "";

// Part 1

// for (i = 0; i < dishesArray.length; i++) {
//   text += "<div class='food-item'>" + dishesArray[i] + "</div>";
// }
//
// let display = document.getElementById('main');
//   display.innerHTML = text;

// Part 2

// for (i = 0; i < dishesArray.length; i++) {
//   text += dishesArray[i];
// }
//
// let mainDiv = document.getElementById('main');
//
// dishesArray.forEach((dish) => {
//   let foodItemDiv = document.createElement('div');
//   foodItemDiv.className = 'food-item';
//   foodItemDiv.innerHTML = dish;
//   mainDiv.appendChild(foodItemDiv);
// });

// Part 3

let mainDiv = document.getElementById('main');

dishesArray.forEach((dish) => {
  let foodItemDiv = document.createElement('div');
  foodItemDiv.className = 'food-item';
  foodItemDiv.addEventListener('click', () => {
    foodItemDiv.className += ' hidden';
  });
  foodItemDiv.innerHTML = dish;
  mainDiv.appendChild(foodItemDiv);
});

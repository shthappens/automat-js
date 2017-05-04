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

for (i = 0; i < dishesArray.length; i++) {
  text += "<div class='food-item'>" + dishesArray[i] + "</div>";
}

let display = document.getElementById('main');
  display.innerHTML = text;

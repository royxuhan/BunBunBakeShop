/* 
<!-- 05-430: Programming Usable Interfaces -->
<!-- Roy Xu -->
<!-- Spring 2020 --> 
*/

class Product {
  constructor(name) {
    this.name = name;
  }
}

// Highlight selected flavor option on product detail page
function selectFlavorOption(id) {
  var element = document.getElementById(id);
  element.classList.toggle("flavor-selected");

  var selectedOptions = document.querySelectorAll(".flavor-selected");
  for (var i = 0; i < selectedOptions.length; i++) {
    var previousSelected = document.getElementById(selectedOptions[i].id);
    if (previousSelected != element) {
      previousSelected.classList.toggle("flavor-selected");
    }
  }
}

// Highlight selected glazing option on product detail page
function selectGlazingOption(id) {
  var element = document.getElementById(id);
  element.classList.toggle("glazing-selected");

  var selectedOptions = document.querySelectorAll(".glazing-selected");
  for (var i = 0; i < selectedOptions.length; i++) {
    var previousSelected = document.getElementById(selectedOptions[i].id);
    if (previousSelected != element) {
      previousSelected.classList.toggle("glazing-selected");
    }
  }
}

// Update product selection based on selections
function updateProductSelection() {
  var flavor = document.querySelectorAll(".flavor-selected")[0];
  var glazing = document.querySelectorAll(".glazing-selected")[0];

  if (flavor != null && glazing == null) {
    var flavorText = flavor.innerHTML;
    document.getElementById("flavor").innerHTML = "Select Flavor:" + flavorText;
  } else if (glazing != null && flavor == null) {
    var glazingText = glazing.innerHTML;
    document.getElementById("glazing").innerHTML =
      "Select Glazing:" + glazingText;
  } else if (flavor != null && glazing != null) {
    var flavorText = flavor.innerHTML;
    var glazingText = glazing.innerHTML;
    document.getElementById("flavor").innerHTML = "Select Flavor:" + flavorText;
    document.getElementById("glazing").innerHTML =
      "Select Glazing:" + glazingText;
  } else {
    document.getElementById("flavor").innerHTML = "Select Flavor: Original";
    document.getElementById("glazing").innerHTML = "Select Glazing: None";
  }
}

// Calculate how much the total is based on item pricing and quantity
function calculatePrice(id) {
  var itemPrice = 3;
  var quantity = document.getElementById(id);
  var numItems = quantity.options[quantity.selectedIndex].value;
  var total = itemPrice * numItems;
  var item = "item-" + id.charAt(id.length - 1);
  document.getElementById(item).innerHTML = "$" + total.toFixed(2);
  var subtotal =
    parseInt(document.getElementById("item-1").innerHTML.substr(1)) +
    parseInt(document.getElementById("item-2").innerHTML.substr(1));
  document.getElementById("subtotal-price").innerHTML =
    "$" + subtotal.toFixed(2);
}

// Update product image based on selection
function updateProductImage(id) {
  if (id == "blackberry") {
    document.getElementById("changing-image").src =
      "images/cinnamon-blackberry.jpg";
  } else if (id == "walnut") {
    document.getElementById("changing-image").src =
      "images/cinnamon-walnut.jpg";
  } else if (id == "pumpkin-spice") {
    document.getElementById("changing-image").src =
      "images/cinnamon-pumpkinspice.jpg";
  } else if (id == "caramel") {
    document.getElementById("changing-image").src =
      "images/cinnamon-caramel.jpg";
  } else if (id == "original") {
    document.getElementById("changing-image").src =
      "images/cinnamonrollmain.jpg";
  } else if (id == "original-gf") {
    document.getElementById("changing-image").src = "images/cinnamonroll2.png";
  }
}

// Update item count in the cart
function updateItemCount() {
  var itemCount = document.getElementById("item-count");
  var count = itemCount.innerHTML;
  count++;
  itemCount.innerHTML = count;
}

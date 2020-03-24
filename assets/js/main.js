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

// Update product heading based on selections
function updateProductTitle() {
  var flavor = document.querySelectorAll(".flavor-selected")[0];
  var glazing = document.querySelectorAll(".glazing-selected")[0];

  if (flavor != null && glazing == null) {
    var flavorText = flavor.innerHTML;
    document.getElementById("product-title").innerHTML =
      "Cinnamon Rolls" + "<br />" + "Flavor: " + flavorText;
  } else if (glazing != null && flavor == null) {
    var glazingText = glazing.innerHTML;
    document.getElementById("product-title").innerHTML =
      "Cinnamon Rolls" + "<br />" + "Glazing: " + glazingText;
  } else if (flavor != null && glazing != null) {
    var flavorText = flavor.innerHTML;
    var glazingText = glazing.innerHTML;
    document.getElementById(
      "product-title"
    ).innerHTML = `Cinnamon Rolls<br />Flavor: ${flavorText}<br />Glazing: ${glazingText}`;
  } else {
    document.getElementById("product-title").innerHTML = "Cinnamon Rolls";
  }
}

// Calculate how much the total is based on item pricing and quantity
function calculatePrice() {
  var itemPrice = 3;
  var quantityForm = document.getElementById("quantity");
  var numItems = quantityForm.options[quantityForm.selectedIndex].value;
  var total = itemPrice * numItems;
  document.getElementById("pricing-total").innerHTML =
    "Total: $" + total.toFixed(2);
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
  } else if (id == "original" || id == "original-gf") {
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

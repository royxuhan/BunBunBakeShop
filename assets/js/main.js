/* 
<!-- 05-430: Programming Usable Interfaces -->
<!-- Roy Xu -->
<!-- Spring 2020 --> 
*/

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

// Calculate how much the total is for cinnamon rolls
function calculateTotal() {
  var itemPrice = 3;
  var quantity = document.getElementById("quantity");
  var numItems = quantity.options[quantity.selectedIndex].value;
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
  } else if (id == "original") {
    document.getElementById("changing-image").src =
      "images/cinnamonrollmain.jpg";
  } else if (id == "original-gf") {
    document.getElementById("changing-image").src = "images/cinnamonroll2.png";
  }
}

// Object Constructors
function CinnamonRoll(name, quantity, flavor, glazing) {
  this.name = name;
  this.quantity = quantity;
  this.flavor = flavor;
  this.glazing = glazing;
}

// Update item count in the cart
function saveItem() {
  var flavor = document.querySelectorAll(".flavor-selected")[0];
  var glazing = document.querySelectorAll(".glazing-selected")[0];
  var numCartItems = localStorage.length;

  if (flavor == null) {
    alert("Please select both a flavor for your cinnamon roll!");
  } else if (glazing == null) {
    alert("Please select both a glazing for your cinnamon roll!");
  } else {
    var flavorText = flavor.innerHTML;
    var glazingText = glazing.innerHTML;
    var quantity = document.getElementById("quantity");
    var numItems = quantity.options[quantity.selectedIndex].value;
    var toSave = "savedCinnamonRoll" + (numCartItems + 1);
    var cinnamonRoll = new CinnamonRoll(
      toSave,
      numItems,
      flavorText,
      glazingText
    );
    localStorage.setItem(toSave, JSON.stringify(cinnamonRoll));

    // update cart count
    var itemCount = document.getElementById("item-count");
    itemCount.innerHTML = numCartItems;
    location.reload();
    alert("Your cinnamon roll has been added to cart!");
  }
}

function onLoad() {
  // update cart count
  var itemCount = document.getElementById("item-count");
  var numItems = 0;
  if (itemCount != 0) {
    numItems = localStorage.length + 1;
  }
  itemCount.innerHTML = numItems;
}

// Recalculate item price based on changed quantity
function changeQuantity(id) {
  var quantity = document.getElementById(id);
  var numItems = quantity.options[quantity.selectedIndex].value;
  var total = 3 * numItems;
  var newID = id + "Change";
  document.getElementById(newID).innerHTML = "$" + total.toFixed(2);
  calculateSubtotal();
}

// Calculate what the cart subtotal is
function calculateSubtotal() {
  var numItems = localStorage.length + 1;
  var items = document.getElementsByClassName("item-price");
  var subtotal = 0;
  for (var i = 0; i < items.length; i++) {
    subtotal += parseInt(items[i].innerHTML.substr(1));
  }
  document.getElementById("subtotal-price").innerHTML =
    "$" + subtotal.toFixed(2);
}

// Populate page with customized cinnamon rolls
function onLoadCartPage() {
  var numItems = localStorage.length;
  for (var i = 0; i < numItems; i++) {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    var currItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
    clon.getElementById("user-selection").innerHTML =
      currItem.flavor + " | " + currItem.glazing;
    if (currItem.flavor.includes("Blackberry")) {
      clon.getElementById("selected-image").src =
        "images/cinnamon-blackberry.jpg";
    } else if (currItem.flavor.includes("Walnut")) {
      clon.getElementById("selected-image").src = "images/cinnamon-walnut.jpg";
    } else if (currItem.flavor.includes("Pumpkin Spice")) {
      clon.getElementById("selected-image").src =
        "images/cinnamon-pumpkinspice.jpg";
    } else if (currItem.flavor.includes("caramel")) {
      clon.getElementById("selected-image").src = "images/cinnamon-caramel.jpg";
    } else if (currItem.flavor.includes("Original")) {
      clon.getElementById("selected-image").src = "images/cinnamonrollmain.jpg";
    } else if (currItem.flavor.includes("Original (GF)")) {
      clon.getElementById("selected-image").src = "images/cinnamonroll2.png";
    }

    clon.getElementById("itemQty").selectedIndex = currItem.quantity / 3;
    var itemTotal = currItem.quantity * 3;
    clon.getElementById("itemQtyChange").innerHTML = "$" + itemTotal.toFixed(2);
    var itemPriceSpecific = currItem.name + "Price";
    clon.getElementById("itemQty").setAttribute("id", itemPriceSpecific);
    var itemPriceSpecificChange = itemPriceSpecific + "Change";
    clon
      .getElementById("itemQtyChange")
      .setAttribute("id", itemPriceSpecificChange);
    clon.getElementById("template").setAttribute("id", currItem.name);
    var deleteButtonID = currItem.name + "Delete";
    clon.getElementById("delete-button").setAttribute("id", deleteButtonID);
    var subtotalDivider = document.getElementById("subtotal-divider");
    subtotalDivider.parentNode.insertBefore(clon, subtotalDivider);
  }
  calculateSubtotal();
}

function removeItem(id) {
  var rowID = id.substr(0, id.indexOf("Delete"));
  var row = document.getElementById(rowID);
  row.parentNode.removeChild(row);
  localStorage.removeItem(rowID);
  calculateSubtotal();
  onLoad();
}

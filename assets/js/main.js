/* 
<!-- 05-430: Programming Usable Interfaces -->
<!-- Roy Xu -->
<!-- Spring 2020 --> 
*/

// Highlight selected option on product detail page
function selectOption(id) {
    var element = document.getElementById(id);
    element.classList.toggle("options-selected");
}

// Calculate how much the total is based on item pricing and quantity
function calculatePrice() {
    var itemPrice = 3;
    var quantityForm = document.getElementById("quantity");
    var numItems = quantityForm.options[quantityForm.selectedIndex].value;
    var total = itemPrice * numItems;
    document.getElementById("pricing-total").innerHTML = "Total: $" + total.toFixed(2);
}
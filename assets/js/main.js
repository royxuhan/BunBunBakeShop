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




let menu_buttons = document.querySelectorAll(".menu_btn");

for (let i = 0; i < menu_buttons.length; i++) {
    menu_buttons[i].addEventListener("click", change_text);
}



function change_text() {

    const id = this.id;
    const action = id.substring(0,1);
    const categoty = id.substring(1);
    
    if (action === "+") {
        add(categoty)

    }
    if (action ===  "-") {
        subtract(categoty)
    }
}



function add(category)
{
  var quantity = parseInt(document.getElementById(category).innerHTML);
  var newQuant = quantity + 1;
  document.getElementById(category).innerHTML = newQuant;
}

function subtract(category)
{
  var quantity = parseInt(document.getElementById(category).innerHTML);
  if (quantity > 0) {
    var newQuant = quantity - 1;
    document.getElementById(category).innerHTML = newQuant;
  }
  
}

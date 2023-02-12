



let menu_buttons = document.querySelectorAll(".menu_btn");

for (let i = 0; i < menu_buttons.length; i++) {
    menu_buttons[i].addEventListener("click", change_text);
}



function change_text() {

    const id = this.id;
    const action = id.substring(0,1);
    const categoty = id.substring(1);
    
    if (action === "+") {
        add_item(categoty)

    }
    if (action ===  "-") {
        del_item(categoty)
    }
}



function add_item(category) {

    let quantity = parseInt(document.getElementById(category).innerHTML);

    // Changing the COUNTER NUMBER
    let newQuant = quantity + 1;
    document.getElementById(category).innerHTML = newQuant;

    // Changing SUBTOTAL
    let subtotal_str = document.getElementById("subtotal").innerHTML.substring(11);
    let price_str = document.getElementById(category + "price").innerHTML.substring(1);    
    let subtotal = parseInt(subtotal_str);
    let item_price = parseInt(price_str);
    console.log("subtotal: " + "     '" + document.getElementById("subtotal").innerHTML + "'       " + "price " + price_str);
    console.log(subtotal + "      " + item_price + "\n");
    console.log(subtotal + item_price);
    let sum = subtotal + item_price;
    let sum_str = "Subtotal: $" + sum;
    document.getElementById("subtotal").innerHTML = sum_str;

}

function del_item(category)
{
  var quantity = parseInt(document.getElementById(category).innerHTML);
  if (quantity > 0) {

    // Changing the COUNTER NUMBER
    var newQuant = quantity - 1;
    document.getElementById(category).innerHTML = newQuant;

    // Changing SUBTOTAL
    let subtotal_str = document.getElementById("subtotal").innerHTML.substring(11);
    let price_str = document.getElementById(category + "price").innerHTML.substring(1);    
    let subtotal = parseInt(subtotal_str);
    let item_price = parseInt(price_str);
    console.log("subtotal: " + "     '" + document.getElementById("subtotal").innerHTML + "'       " + "price " + price_str);
    console.log(subtotal + "      " + item_price + "\n");
    console.log(subtotal + item_price);
    let sum = subtotal - item_price;
    let sum_str = "Subtotal: $" + sum;
    document.getElementById("subtotal").innerHTML = sum_str;



  }







  
}

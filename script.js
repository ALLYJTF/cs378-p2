

// --------------------------------------------------------------------------------------
// Add Items function

let menu_buttons = document.querySelectorAll(".menu_btn");

for (let i = 0; i < menu_buttons.length; i++) {
    menu_buttons[i].addEventListener("click", change_text);
}

function change_text() {

    const id = this.id;
    const action = id.substring(0,1);
    const item = id.substring(1);
    
    if (action === "+") {
        add_item(item);

    }
    if (action ===  "-") {
        del_item(item);
    }
}

function add_item(item) {

    let quantity = parseInt(document.getElementById(item).innerHTML);

    // Changing the COUNTER NUMBER
    let newQuant = quantity + 1;
    document.getElementById(item).innerHTML = newQuant;

    // Changing SUBTOTAL
    change_subtotal(item, 1);

}

function del_item(item) {

  var quantity = parseInt(document.getElementById(item).innerHTML);
  if (quantity > 0) {

    // Changing the COUNTER NUMBER
    var newQuant = quantity - 1;
    document.getElementById(item).innerHTML = newQuant;

    // Changing SUBTOTAL
    change_subtotal(item, 0);

  }
}

function change_subtotal(item, choice) {

    let subtotal_str = document.getElementById("subtotal").innerHTML.substring(11);
    let price_str = document.getElementById(item + "price").innerHTML.substring(1);    
    
    let subtotal = parseInt(subtotal_str);
    let item_price = parseInt(price_str);
    
    let sum = (choice == 1) ? subtotal + item_price : subtotal - item_price;
    let sum_str = "Subtotal: $" + sum;

    document.getElementById("subtotal").innerHTML = sum_str;

}


// --------------------------------------------------------------------------------------
// Clear Items function


let clear_button = document.getElementById("clear");
clear_button.addEventListener("click", clear_everything);

function clear_everything() {

    let counters = document.getElementsByClassName("counter");
    for (let i = 0; i < counters.length; i++) {
        counters[i].innerHTML = 0;
    }
    
    document.getElementById("subtotal").innerHTML = "Subtotal: $0";

}

// --------------------------------------------------------------------------------------
// Purchase Items function

let order_button = document.getElementById("order");
order_button.addEventListener("click", order_items);

function order_items() {

    // Grabbing counters
    let counters = document.getElementsByClassName("counter");

    let no_orders = true;
    let items_str = "";
    for (let i = 0; i < counters.length; i++) {
        if (counters[i].innerHTML != 0) {
            no_orders = false;            
            items_str += item_string(counters[i].id.toString());
        }
    }
    
    let display_str = (no_orders) ? "No Items in Cart" : ("Order Placed!\n" + items_str.toString());
    alert(display_str);
}


function item_string(item) {

    let itm_count = document.getElementById(item).innerHTML;
    let itm_name = document.getElementById(item.toString() + "title").innerHTML;
    if (item == "mac") {
        itm_name = "mac & cheese";
    }

    console.log(itm_count + " " + itm_name.toString());
    
    return (itm_count + " " + itm_name + "\n");
}


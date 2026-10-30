// Javascript for all pages

// Home Page Welcome Button

function showWelcome() {

    document.getElementById("homeMessage").innerHTML =
    "Welcome to Technology Products! Explore our latest technology products.";

}

// Products Page Button

function showProduct(productName) {

    document.getElementById("productMessage").innerHTML =
    "You selected " + productName +
    ". Thank you for exploring our technology products.";

}

// Contact Page Submit Button

function sendMessage() {

    var name = document.getElementById("customerName").value;

    var email = document.getElementById("customerEmail").value;

    var message = document.getElementById("customerMessage").value;

    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {

        document.getElementById("contactMessage").innerHTML =
        "Please fill in your name, email, and message.";

    }

    else {

        document.getElementById("contactMessage").innerHTML =
        "Thank you, " + name +
        ". Your sample message has been prepared.";

    }

}



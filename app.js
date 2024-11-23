// Prices for the different cake sizes
const priceList1 = {
    Pound1: 1000,
    Pound2: 1800,
    Pound3: 2600,
    Pound0: 0

   
};

const priceList2 ={
    Pieces0: 0,
    Pieces6: 700,
    Pieces12:1200
}

const priceList3 ={
    Pieces0: 0,
    Pieces6: 900,
    Pieces12: 1700
    
}




// Handle form submission
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected values
    const flavor = document.getElementById('flavor').value;
    const size = document.getElementById('size').value;

    const cupflavor = document.getElementById('cupflavor').value;
    const cupsize = document.getElementById('cupsize').value;

    const brownieflavor = document.getElementById('brownieflavor').value;
    const browniesize = document.getElementById('browniesize').value;

    // Calculate total price
    const cakePrice = priceList1[size];
    const cupcakePrice = priceList2[cupsize];
    const browniePrice = priceList3[browniesize];

    

    const basePrice = cakePrice + cupcakePrice + browniePrice;
  
    const totalPrice = basePrice ;

    if(size == "Pound0" && cupsize == "Pieces0" && browniesize == "Pieces0" ) {
        
        // alert(`Please Select an item.`);
        Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "Please Select an item.!",
           
          });
    }


    else{
    // alert(`Your items are added to cart.`);
    Swal.fire({
        icon: "success",
        
        text: "Your items are added to cart.",
       
      });


    }


    // Show the order summary
    document.getElementById('order-summary').style.display = 'block';
    document.getElementById('cake-details').textContent = `Cake Flavor: ${capitalizeFirstLetter(flavor)}`;
      document.getElementById('cake-size').textContent =` Cake Size: ${capitalizeFirstLetter(size)}`;
    document.getElementById('cake-price').textContent = `Cake Price: RS:${cakePrice}`;

    document.getElementById('cupcake-details').textContent = `CupCake Flavor: ${capitalizeFirstLetter(cupflavor)}`;

  document.getElementById('cupcake-quantity').textContent   = `CupCake Quantity: ${capitalizeFirstLetter(cupsize)}`;
    document.getElementById('cupcake-price').textContent = `Cupcake Price: Rs:${cupcakePrice}`;

    document.getElementById('brownie-details').textContent = `Brownies Flavor: ${capitalizeFirstLetter(brownieflavor)}`;
    document.getElementById('brownie-quantity').textContent = `Brownies Quantity: ${capitalizeFirstLetter(browniesize)}`;
    document.getElementById('brownie-price').textContent = `Brownie Price: Rs:${browniePrice}`;
    document.getElementById('total-price').textContent = `Total Price: Rs:${totalPrice}`;



    // Reset form
    document.getElementById('order-form').reset();

});


// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



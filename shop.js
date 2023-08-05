function addItem() {
    const candyName = document.getElementById("candy-name").value;
    const description = document.getElementById("candy-description").value;
    const price = document.getElementById("candy-price").value;
    const quantity = document.getElementById("candy-quantity").value;
  
    
    const newItem = {
      name: candyName,
      description: description,
      price: price,
      quantity: quantity
    };

    
  

    document.getElementById("candy-name").value = "";
    document.getElementById("candy-description").value = "";
    document.getElementById("candy-price").value = "";
    document.getElementById("candy-quantity").value = "";
  }
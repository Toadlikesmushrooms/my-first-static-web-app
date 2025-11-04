const buttons = document.querySelectorAll('.myButtonClass'); 
let cartCount = 0;

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const fullText = button.textContent;      
    const itemName = fullText.split('$')[0].trim(); 
    
    cartCount++; 
    document.getElementById('cartCounter').textContent = `Items in cart: ${cartCount}`;
    
    alert(`You added ${itemName} to your cart!`);
  });
});
const clearButton = document.getElementById('clearCart');


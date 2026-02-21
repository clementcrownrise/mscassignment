// Represents a physical product in the store
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Represents a product added to a cart with a specific quantity
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate total price for this specific item line
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add a ShoppingCartItem to the array
  addItem(product, quantity) {
    const newItem = new ShoppingCartItem(product, quantity);
    this.items.push(newItem);
  }

  // Remove item by product ID
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Get the grand total of all items in the cart
  getCartTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Display all items currently in the cart
  displayCart() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
      return;
    }
    console.log("--- Current Shopping Cart ---");
    this.items.forEach(item => {
      console.log(`${item.product.name} x${item.quantity} - $${item.getTotalPrice().toFixed(2)}`);
    });
    console.log(`Total: $${this.getCartTotal().toFixed(2)}`);
    console.log("-----------------------------");
  }
}


// 1. Create Products
const laptop = new Product(101, "MacBook Pro", 1999.99);
const mouse = new Product(102, "Magic Mouse", 79.00);
const keyboard = new Product(103, "Mechanical Keyboard", 150.00);

// 2. Create a Shopping Cart
const myCart = new ShoppingCart();

// 3. Add items to the cart
myCart.addItem(laptop, 1);
myCart.addItem(mouse, 2);
myCart.addItem(keyboard, 1);

// 4. Display the cart
console.log("Initial Cart:");
myCart.displayCart();

// 5. Remove an item (Removing the Mouse)
console.log("Removing the mouse...");
myCart.removeItem(102);

// Display the cart again to verify
myCart.displayCart();
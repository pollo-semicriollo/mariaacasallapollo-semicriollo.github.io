const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.createElement('div');
cartItemsContainer.id = 'cart-items';
document.body.appendChild(cartItemsContainer);

let cartItems = [];
let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const button = event.target;
    const product = button.parentElement;
    const productTitle = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.querySelector('button').dataset.price);

    const item = {
        title: productTitle,
        price: productPrice
    };

    cartItems.push(item);
    total += productPrice;

    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.title}</span>
            <span>$${item.price}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.textContent = `Total: $${total}`;
    cartItemsContainer.appendChild(totalElement);

    const cartLink = document.getElementById('cart');
    cartLink.textContent = `Carrito (${cartItems.length})`;
}

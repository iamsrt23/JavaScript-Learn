// const products = [
//   {
//     image:"images/products/athletic-cotton-socks-6-pairs.jpg",
//     name:"GrayAthletic CoBlack andtton Socks - 6 Pairs",
//     rating:{
//       stars:4.5,
//       count:87
//     },
//     priceCents:1090 ,//saved in cents
//   },
//   {
//     image:"images/products/intermediate-composite-basketball.jpg",
//     name:"Intermediate Size Basketball",
//     rating:{
//       stars:4.0,
//       count:127
//     },
//     priceCents:2095
//   },
//   {
//     image:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     name:"Adults Plain Cotton T-Shirt - 2 Pack",
//     rating:{
//       stars:4.5,
//       count:56
//     },
//     priceCents:799
//   },
//   {
//     image:'images/products/6-Piece-White-Dinner-Plate-set.jpg',
//     name:"6 Piece White Dinner Plate Set",
//     rating:{
//       stars:4.0,
//       count:37,
//     },
//     priceCents:2067
//   },
//   {
//     image:'images/products/6-piece-non-stick-baking-set.webp',
//     name:"6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
//     rating:{
//       stars:4.5,
//       count:175,
//     },
//     priceCents:3499,
//   }

// ];



let productsHTML = ''



products.forEach((product)=>{
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
             ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `

})

// console.log(productsHTML)


// Add to cart 
document.querySelector('.js-products-grid').innerHTML = productsHTML

document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click',()=>{


      // Based on Product id we update the cart
      const productId = button.dataset.productId;

      let matchingItem ;

      // if product already in the cart
      cart.forEach((item)=>{
        if(productId === item.productId){
          matchingItem = item
        }

      })

      if(matchingItem){
        matchingItem.quantity +=1;
      }else{
        cart.push({
          productId: productId,
          quantity:1
        })
      }

      let cartQuantity = 0


      cart.forEach((item)=>{
        cartQuantity += item.quantity

      })

      // update the quantity in DOM
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity

      console.log(cartQuantity)
      
      console.log(cart)

      
    })
})
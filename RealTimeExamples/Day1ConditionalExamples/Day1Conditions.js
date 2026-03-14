// 1.Order Amount Category like small,medium, large orders

const orderAmount = 1000;

function totalorderAmount(orderAmount) {
  if (orderAmount > 0 && orderAmount <= 1000) {
    console.log(`${orderAmount} is small order`);
  } else if (orderAmount > 1000 && orderAmount <= 3000) {
    console.log(`${orderAmount} is medium order`);
  } else {
    console.log(`${orderAmount} is Large order`);
  }
}

// totalorderAmount(orderAmount);
// totalorderAmount(1500)
// totalorderAmount(20000)

// 2.Product Stock Check

const products = 10;
function checkProductAvailable(products) {
  if (products > 0) {
    console.log(`${products} products are available`);
  } else {
    console.log(`products are not available`);
  }
}

// checkProductAvailable(products);
// checkProductAvailable(0);
// checkProductAvailable(-10);

//3.Free Delivary Check

const orderCost = 1000;

function checkDevlivaryFee(orderCost) {
  if (orderCost >= 1000) {
    console.log(`Free Devlivary above ${orderCost} `);
  } else {
    console.log("develivary chnarges apply 200");
  }
}

// checkDevlivaryFee(orderCost);
// checkDevlivaryFee(500);

// 4.Product Rating level

const rating = 5;

function checkRating(rating) {
  if (rating <= 5 && rating >= 4) {
    console.log("Execllent Product");
  } else if (rating >= 2.5 && rating < 4) {
    console.log("Average Product");
  } else {
    console.log("Poor Product");
  }
}
// checkRating(rating)
// checkRating(4.5)
// checkRating(3)
// checkRating(4)
// checkRating(2)
// checkRating(2.5)
// checkRating(1)

//5. Check Return Status

const daysAfterDelivery = 7;
function checkReturn(daysAfterDelivery) {
  if (daysAfterDelivery > 0 && daysAfterDelivery <= 7) {
    console.log("Return Allowed");
  } else {
    console.log("Return Not Allowed");
  }
}
// checkReturn(daysAfterDelivery);
// checkReturn(8)
// checkReturn(-1)

//6. Cart Item Limit

const cartitems = 6;
function checkCartItemsLimit(cartitems) {
  if (cartitems > 0 && cartitems < 10) {
    console.log("Added to Cart successfully");
  } else {
    console.log("Cart Items Reached Limit");
  }
}

// checkCartItemsLimit(cartitems);
// checkCartItemsLimit(20)

// 7.WishList Items Limit Check

const wishListItems = 16;
function checkWishListLimit(wishListItems) {
  if (wishListItems > 0 && wishListItems <= 30) {
    console.log("Items added to wishList");
  } else {
    console.log("wishList Items Limit reached ");
  }
}

// checkWishListLimit(wishListItems);
// checkWishListLimit(30);
// checkWishListLimit(88);

//8. Check Discount

const purchaseAmount = 1000;

function checkDiscount(purchaseAmount) {
  if (purchaseAmount > 1 && purchaseAmount < 1000) {
    console.log("NO Discount ");
  } else if (purchaseAmount >= 1000 && purchaseAmount <= 10000) {
    console.log("15% discount applied");
  } else {
    console.log("25% discount applied");
  }
}

// checkDiscount(purchaseAmount);
// checkDiscount(600)
// checkDiscount(150000)

// 9. Devlivary Type

const cityName = "Hyderabad";
// const arr = ["hyderabad", "chennai", "Bangluru"];

function checkDevliveryType(cityName) {
  if (cityName === "Hyderabad") {
    console.log("express");
  } else {
    console.log("Normal devlivery avaibale");
  }
}
checkDevliveryType(cityName);
checkDevliveryType("Nandyal");

// 10.Login Check

const userName = "Madhava";
const password = "123456";

function checkLoginStatus(userName, password) {
  if (userName === "Madhava" && password === "123456") {
    console.log("Login SuccessFull");
  } else {
    console.log("Login Failed");
  }
}

checkLoginStatus(userName, password);
checkLoginStatus("madhavareddy", "monkeyDLuffy")

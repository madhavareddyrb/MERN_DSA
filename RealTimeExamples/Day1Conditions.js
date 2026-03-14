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
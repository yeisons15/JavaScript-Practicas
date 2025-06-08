function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage)/100
    const priceWhithDiscount = price - discount

    return priceWhithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice (originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)
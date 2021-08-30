module.exports = function checkForAlertsController(req, res) {
    const { productId, retailers } = req.body
    let productWithMinPrice = retailers[0] // Baseline for comparsion
    retailers.forEach(product => { // Checking every product
        if (product.isInStock === true) {
            if (product.discountPrice < productWithMinPrice.discountPrice || product.discountPrice < productWithMinPrice.retailPrice) {
                productWithMinPrice = product
            }
        }
    })

    let difference = productWithMinPrice.retailPrice - productWithMinPrice.discountPrice
    
    // If product has a discount price - only then check the pricedrop and generate an alert
    if (productWithMinPrice.discountPrice) {
        if (difference >= 10) {
            return res.json({
                alertRequired: true,
                newPrice: productWithMinPrice.discountPrice,
                productId: productId,
                retailerId: productWithMinPrice.retailerId
            })
        }
        return res.json({})
    }
    return res.json(productWithMinPrice)
}

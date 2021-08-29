'use strict'

const async = require('async')
const { response } = require('../apps')

async function checkForAlertsController({ productId, retailers }, res) {
    let currentMin

    let minPrice = retailers[0].retailPrice

    function itemHandler({ retailerId, retailPrice, discountPrice, isInStock }, callback) {
        if (isInStock === true) {
            if (retailPrice < minPrice && retailPrice - discountPrice >= 10) {
                minPrice = retailPrice
                currentMin = {
                    alertRequired: true,
                    newPrice: discountPrice,
                    productId: productId,
                    retailerId: retailerId
                }
            }
        }
        if(currentMin === 'undefined'){
            currentMin = {}
        }
        callback()
    }

    await async.each(retailers, itemHandler, function (err, result) {
        if (err) {
            return console.log(err)
        } else {
            return Promise.resolve(() => res.send(currentMinPrice))
        }
    })
}

exports.default = checkForAlertsController
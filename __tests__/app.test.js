const express = require("express")
const routes = require("../routers/index.js")
const supertest = require("supertest")

const app = require('../app')

describe("Testing the API", () => {
    describe("POST /", () => {
        it("Returns 200", (done) => {
            supertest(app)
                .post("/")
                .send({
                    productId: "ABC123",
                    retailers: [{
                        retailerId: "nike",
                        retailPrice: 100,
                        isInStock: true
                    }, {
                        retailerId: "offspring",
                        retailPrice: 100,
                        discountPrice: 90,
                        isInStock: true
                    }]
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        done(err)
                    } else {
                        done()
                    }
                })
        })
        it('Correctly aggregates the incoming data', (done) => {
            supertest(app)
                .post("/")
                .send({
                    productId: "ABC123",
                    retailers: [{
                        retailerId: "nike",
                        retailPrice: 100,
                        isInStock: true
                    }, {
                        retailerId: "offspring",
                        retailPrice: 100,
                        discountPrice: 90,
                        isInStock: true
                    }]
                })
                .expect({
                    alertRequired: true,
                    newPrice: 90,
                    productId: "ABC123",
                    retailerId: "offspring"
                })
                .end((err, res) => {
                    if (err) {
                        done(err)
                    } else {
                        done()
                    }
                })
        })
        it('Fails to aggregate incorrect payload', (done) => {
            supertest(app)
                .post("/")
                .send({})
                .expect({
                    alertRequired: true,
                    newPrice: 90,
                    productId: "ABC123",
                    retailerId: "offspring"
                })
                .end((err, res) => {
                    if (err) {
                        done()
                    }
                })
        })
    })
})